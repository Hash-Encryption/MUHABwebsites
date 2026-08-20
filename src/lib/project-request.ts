import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";

export type ServicePackageId = "basic" | "custom" | "taqyeemi";

export type ProjectRequestPayload = {
  refId: string;
  name: string;
  businessName: string;
  whatsapp: string;
  service: ServicePackageId;
};

const ALLOWED_SERVICES: Record<ServicePackageId, string> = {
  basic: "Basic Website (Starter)",
  custom: "Custom Website (Main Option)",
  taqyeemi: "Taqyeemi (Customer Experience & Reputation App)",
};

function sanitizeString(str: unknown, maxLen = 150): string {
  if (typeof str !== "string") return "";
  return str.trim().slice(0, maxLen);
}

function isValidWhatsapp(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 16;
}

function getEnvVar(key: string): string | undefined {
  if (typeof process !== "undefined" && process.env && process.env[key]) {
    return process.env[key];
  }
  if (typeof globalThis !== "undefined" && (globalThis as any)[key]) {
    return (globalThis as any)[key];
  }
  if (
    typeof globalThis !== "undefined" &&
    (globalThis as any).__env__ &&
    (globalThis as any).__env__[key]
  ) {
    return (globalThis as any).__env__[key];
  }
  return undefined;
}

export const submitProjectRequest = createServerFn({ method: "POST" })
  .validator((data: unknown): ProjectRequestPayload => {
    if (!data || typeof data !== "object") {
      throw new Error("Invalid request payload");
    }

    const raw = data as Record<string, unknown>;
    const name = sanitizeString(raw.name, 100);
    const businessName = sanitizeString(raw.businessName, 120);
    const whatsapp = sanitizeString(raw.whatsapp, 30);
    const rawService = sanitizeString(raw.service, 30) as ServicePackageId;
    let refId = sanitizeString(raw.refId, 30);

    if (!name) {
      throw new Error("Name is required");
    }

    if (!businessName) {
      throw new Error("Business name is required");
    }

    if (!whatsapp || !isValidWhatsapp(whatsapp)) {
      throw new Error("Valid WhatsApp number is required");
    }

    if (!rawService || !(rawService in ALLOWED_SERVICES)) {
      throw new Error("Invalid service package selected");
    }

    if (!refId || !/^MHB-\d{5}$/.test(refId)) {
      refId = `MHB-${Math.floor(10000 + Math.random() * 90000)}`;
    }

    return {
      refId,
      name,
      businessName,
      whatsapp,
      service: rawService,
    };
  })
  .handler(async ({ data }) => {
    const apiKey = getEnvVar("RESEND_API_KEY");
    const toEmail = getEnvVar("PROJECT_REQUEST_TO_EMAIL") || "hello@muhab.sa";
    const fromEmail =
      getEnvVar("PROJECT_REQUEST_FROM_EMAIL") || "MUHAB <onboarding@resend.dev>";

    if (!apiKey) {
      console.error(
        "[Project Request] Server configuration error: RESEND_API_KEY environment variable is not set.",
      );
      throw new Error("Email service is currently unavailable");
    }

    const resend = new Resend(apiKey);
    const serviceName = ALLOWED_SERVICES[data.service];
    const now = new Date();
    const formattedDate = now.toUTCString();
    const cleanWhatsappDigits = data.whatsapp.replace(/\D/g, "");
    const waLink = `https://wa.me/${cleanWhatsappDigits}`;

    const subject = `New MUHAB Project Request — ${data.businessName}`;

    const textContent = `
NEW MUHAB PROJECT REQUEST
==========================
Reference ID:  ${data.refId}
Submission:    ${formattedDate}

CLIENT DETAILS:
- Name:            ${data.name}
- Business Name:   ${data.businessName}
- WhatsApp Number: ${data.whatsapp} (Direct: ${waLink})
- Selected Service: ${serviceName}

--
MUHAB · Saudi Webmakers (Automated Notification)
`.trim();

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #051A12; color: #FFFFFF; margin: 0; padding: 24px; }
    .card { max-width: 560px; margin: 0 auto; background-color: #0B2F23; border: 1px solid rgba(166, 255, 46, 0.25); border-radius: 20px; overflow: hidden; box-shadow: 0 12px 30px rgba(0,0,0,0.3); }
    .header { background: linear-gradient(135deg, #051A12 0%, #0B2F23 100%); padding: 24px; border-bottom: 1px solid rgba(166, 255, 46, 0.15); text-align: left; }
    .logo-badge { display: inline-block; padding: 4px 12px; background: rgba(166, 255, 46, 0.1); border: 1px solid rgba(166, 255, 46, 0.3); color: #A6FF2E; font-size: 11px; font-weight: 800; letter-spacing: 0.1em; border-radius: 9999px; text-transform: uppercase; margin-bottom: 8px; }
    .title { color: #FFFFFF; font-size: 22px; font-weight: 800; margin: 0 0 4px 0; }
    .subtitle { color: #DADDD6; font-size: 13px; margin: 0; }
    .body { padding: 24px; }
    .info-table { width: 100%; border-collapse: collapse; margin-top: 12px; margin-bottom: 20px; }
    .info-table td { padding: 10px 12px; border-bottom: 1px solid rgba(255, 255, 255, 0.08); font-size: 13px; }
    .label { color: #DADDD6; font-weight: 600; width: 35%; }
    .value { color: #FFFFFF; font-weight: 700; }
    .highlight { color: #A6FF2E; }
    .ref-badge { display: inline-block; font-family: monospace; font-size: 13px; font-weight: 800; background: rgba(166, 255, 46, 0.15); color: #A6FF2E; padding: 4px 10px; border-radius: 8px; }
    .btn { display: inline-block; padding: 12px 24px; background-color: #A6FF2E; color: #09110D; font-weight: 800; text-decoration: none; border-radius: 12px; font-size: 13px; }
    .footer { padding: 16px 24px; background-color: #051A12; border-top: 1px solid rgba(255, 255, 255, 0.08); text-align: center; color: rgba(218, 221, 214, 0.6); font-size: 11px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <div class="logo-badge">MUHAB · SAUDI WEBMAKERS</div>
      <h1 class="title">New Project Request</h1>
      <p class="subtitle">A new project submission has been received from the website.</p>
    </div>
    <div class="body">
      <table class="info-table">
        <tr>
          <td class="label">Reference ID</td>
          <td class="value"><span class="ref-badge">${data.refId}</span></td>
        </tr>
        <tr>
          <td class="label">Client Name</td>
          <td class="value">${data.name}</td>
        </tr>
        <tr>
          <td class="label">Business Name</td>
          <td class="value highlight">${data.businessName}</td>
        </tr>
        <tr>
          <td class="label">WhatsApp Number</td>
          <td class="value"><a href="${waLink}" style="color: #A6FF2E; text-decoration: underline;" dir="ltr">${data.whatsapp}</a></td>
        </tr>
        <tr>
          <td class="label">Selected Service</td>
          <td class="value">${serviceName}</td>
        </tr>
        <tr>
          <td class="label">Submission Date</td>
          <td class="value" style="font-size: 12px; color: #DADDD6;">${formattedDate}</td>
        </tr>
      </table>
      <div style="text-align: center; margin-top: 20px;">
        <a href="${waLink}" class="btn">Open WhatsApp Chat →</a>
      </div>
    </div>
    <div class="footer">
      MUHAB · Saudi Webmakers &bull; Riyadh, Kingdom of Saudi Arabia
    </div>
  </div>
</body>
</html>
`.trim();

    try {
      const response = await resend.emails.send({
        from: fromEmail,
        to: [toEmail],
        subject,
        text: textContent,
        html: htmlContent,
      });

      if (response.error) {
        console.error("[Project Request] Resend API error:", response.error);
        throw new Error("Failed to send notification email");
      }

      return {
        success: true,
        refId: data.refId,
      };
    } catch (err) {
      console.error("[Project Request] Delivery failure:", err);
      throw new Error("Failed to deliver project request email");
    }
  });
