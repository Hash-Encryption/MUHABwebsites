import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useI18n } from "@/lib/i18n";
import logoIcon from "@/assets/muhab-icon.jpg";
import { CheckCircle2, ArrowRight, Check, Lock, Globe, Smartphone, AlertCircle } from "lucide-react";
import { submitProjectRequest, type ServicePackageId } from "@/lib/project-request";

export { type ServicePackageId } from "@/lib/project-request";

interface RequestWebsiteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultService?: ServicePackageId | "";
}

export function RequestWebsiteDialog({
  open,
  onOpenChange,
  defaultService = "",
}: RequestWebsiteDialogProps) {
  const { t, lang } = useI18n();
  const [selectedService, setSelectedService] = useState<ServicePackageId | "">(defaultService);
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [serviceError, setServiceError] = useState(false);
  const [whatsappError, setWhatsappError] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    refId: string;
    name: string;
    businessName: string;
    whatsapp: string;
    service: string;
  } | null>(null);

  // Sync defaultService when dialog opens
  useEffect(() => {
    if (open) {
      if (defaultService && defaultService !== ("full-crm" as any)) {
        setSelectedService(defaultService);
      } else {
        setSelectedService("");
      }
      setServiceError(false);
      setWhatsappError(false);
      setSubmitError(null);
    }
  }, [open, defaultService]);

  const validateWhatsapp = (num: string) => {
    const cleanDigits = num.replace(/\D/g, "");
    return cleanDigits.length >= 7 && cleanDigits.length <= 16;
  };

  const handleSelectService = (id: ServicePackageId) => {
    setSelectedService(id);
    setServiceError(false);
    if (submitError) setSubmitError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    let hasError = false;

    if (!selectedService || selectedService === ("full-crm" as any)) {
      setServiceError(true);
      hasError = true;
    } else {
      setServiceError(false);
    }

    if (!validateWhatsapp(whatsapp)) {
      setWhatsappError(true);
      hasError = true;
    } else {
      setWhatsappError(false);
    }

    if (hasError || !name.trim() || !businessName.trim()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const generatedId = `MHB-${Math.floor(10000 + Math.random() * 90000)}`;
      const payload = {
        refId: generatedId,
        name: name.trim(),
        businessName: businessName.trim(),
        whatsapp: whatsapp.trim(),
        service: selectedService,
      };

      const result = await submitProjectRequest({ data: payload });

      if (result?.success) {
        setSubmittedData({
          ...payload,
          refId: result.refId || payload.refId,
        });
        setIsSubmitted(true);
      } else {
        setSubmitError(t("modal.submit_error"));
      }
    } catch (err) {
      console.error("[Start Your Project] Submission error:", err);
      setSubmitError(t("modal.submit_error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName("");
    setBusinessName("");
    setWhatsapp("");
    setSelectedService("");
    setSubmittedData(null);
    setServiceError(false);
    setWhatsappError(false);
    setSubmitError(null);
  };

  const getServiceLabel = (srv: string) => {
    if (srv === "basic") return t("modal.pkg.basic.title");
    if (srv === "custom") return t("modal.pkg.custom.title");
    if (srv === "taqyeemi") return t("modal.pkg.taqyeemi.title");
    return srv;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto rounded-3xl border border-[#A6FF2E]/25 bg-[#051A12] text-white shadow-2xl">
        {!isSubmitted ? (
          <>
            <DialogHeader className="space-y-2 text-left rtl:text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B2F23] border border-[#A6FF2E]/30 text-[#A6FF2E] text-xs font-bold w-fit">
                <img src={logoIcon} alt="MUHAB" className="h-4 w-4 rounded-sm object-cover" />
                <span>MUHAB · SAUDI WEBMAKERS</span>
              </div>
              <DialogTitle className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                {t("modal.title")}
              </DialogTitle>
              <DialogDescription className="text-[#DADDD6] text-sm leading-relaxed">
                {t("modal.desc")}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
              {/* Mandatory Contact Inputs (Name, Business Name, WhatsApp) */}
              <div className="space-y-4">
                {/* 1. Name */}
                <div className="space-y-2">
                  <Label htmlFor="req-name" className="text-xs font-bold uppercase tracking-wider text-[#A6FF2E]">
                    {t("modal.name")} *
                  </Label>
                  <Input
                    id="req-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t("modal.name_placeholder")}
                    className="rounded-xl bg-[#0B2F23]/60 border-white/15 text-white placeholder:text-white/40 focus-visible:ring-[#A6FF2E] h-11"
                  />
                </div>

                {/* 2. Business Name */}
                <div className="space-y-2">
                  <Label htmlFor="req-business-name" className="text-xs font-bold uppercase tracking-wider text-[#A6FF2E]">
                    {t("modal.business_name")} *
                  </Label>
                  <Input
                    id="req-business-name"
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder={t("modal.business_placeholder")}
                    className="rounded-xl bg-[#0B2F23]/60 border-white/15 text-white placeholder:text-white/40 focus-visible:ring-[#A6FF2E] h-11"
                  />
                </div>

                {/* 3. WhatsApp Number */}
                <div className="space-y-2">
                  <Label htmlFor="req-whatsapp" className="text-xs font-bold uppercase tracking-wider text-[#A6FF2E]">
                    {t("modal.whatsapp")} *
                  </Label>
                  <Input
                    id="req-whatsapp"
                    required
                    type="tel"
                    dir="ltr"
                    value={whatsapp}
                    onChange={(e) => {
                      setWhatsapp(e.target.value);
                      if (whatsappError) setWhatsappError(false);
                    }}
                    placeholder={t("modal.whatsapp_placeholder")}
                    className={`rounded-xl bg-[#0B2F23]/60 border-white/15 text-white placeholder:text-white/40 focus-visible:ring-[#A6FF2E] h-11 text-left rtl:text-right ${
                      whatsappError ? "border-red-500 focus-visible:ring-red-500" : ""
                    }`}
                  />
                  {whatsappError && (
                    <p className="text-xs text-red-400 font-medium">
                      {t("modal.whatsapp_invalid_error")}
                    </p>
                  )}
                </div>
              </div>

              {/* Service / Package Selection */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between">
                  <Label className="text-xs font-bold uppercase tracking-wider text-[#A6FF2E]">
                    {t("modal.select_service")} *
                  </Label>
                  {serviceError && (
                    <span className="text-xs text-red-400 font-semibold animate-pulse">
                      {t("modal.service_required_error")}
                    </span>
                  )}
                </div>

                {/* CATEGORY 1: WEBSITES */}
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#DADDD6]/70">
                    <Globe className="h-3.5 w-3.5 text-[#A6FF2E]" />
                    <span>{t("modal.group.websites")}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {/* 1. Basic Website (Starter) */}
                    <button
                      type="button"
                      onClick={() => handleSelectService("basic")}
                      className={`relative flex flex-col justify-between p-3.5 rounded-2xl border text-left rtl:text-right transition-all cursor-pointer ${
                        selectedService === "basic"
                          ? "border-[#A6FF2E] bg-[#0B2F23] text-white ring-2 ring-[#A6FF2E]/60 shadow-lg"
                          : "border-white/10 bg-[#0B2F23]/30 hover:bg-[#0B2F23]/70 text-[#DADDD6]"
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="text-xs font-extrabold tracking-wide uppercase text-white">
                          {t("modal.pkg.basic.title")}
                        </div>
                        <div className="text-[11px] font-semibold text-[#A6FF2E]/90">
                          {t("modal.pkg.basic.sub")}
                        </div>
                      </div>
                      {selectedService === "basic" && (
                        <div className="mt-2 flex items-center gap-1 text-[10px] font-bold text-[#A6FF2E]">
                          <Check className="h-3 w-3" />
                          <span>{lang === "ar" ? "تم الاختيار" : "Selected"}</span>
                        </div>
                      )}
                    </button>

                    {/* 2. Custom Website (Main Custom Option - with slight visual emphasis) */}
                    <button
                      type="button"
                      onClick={() => handleSelectService("custom")}
                      className={`relative flex flex-col justify-between p-3.5 rounded-2xl border text-left rtl:text-right transition-all cursor-pointer ${
                        selectedService === "custom"
                          ? "border-[#A6FF2E] bg-[#0B2F23] text-white ring-2 ring-[#A6FF2E] shadow-xl"
                          : "border-[#A6FF2E]/30 bg-[#0B2F23]/50 hover:bg-[#0B2F23] text-[#DADDD6]"
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-xs font-extrabold tracking-wide uppercase text-white">
                            {t("modal.pkg.custom.title")}
                          </span>
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#A6FF2E] animate-pulse" />
                        </div>
                        <div className="text-[11px] font-semibold text-[#A6FF2E]">
                          {t("modal.pkg.custom.sub")}
                        </div>
                      </div>
                      {selectedService === "custom" ? (
                        <div className="mt-2 flex items-center gap-1 text-[10px] font-bold text-[#A6FF2E]">
                          <Check className="h-3 w-3" />
                          <span>{lang === "ar" ? "تم الاختيار" : "Selected"}</span>
                        </div>
                      ) : (
                        <div className="mt-2 text-[10px] font-bold text-[#A6FF2E]/70">
                          ★ {lang === "ar" ? "الخيار الرئيسي" : "Main Choice"}
                        </div>
                      )}
                    </button>

                    {/* 3. Full CRM Custom Website (Coming Soon / Disabled) */}
                    <div
                      aria-disabled="true"
                      tabIndex={-1}
                      className="relative flex flex-col justify-between p-3.5 rounded-2xl border border-white/5 bg-white/[0.02] text-white/40 cursor-not-allowed select-none opacity-60 pointer-events-none"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-xs font-bold tracking-wide uppercase text-white/50">
                            {t("modal.pkg.crm.title")}
                          </span>
                          <Lock className="h-3 w-3 text-white/40 shrink-0" />
                        </div>
                        <div className="text-[11px] font-medium text-white/40">
                          {t("modal.pkg.crm.sub")}
                        </div>
                      </div>
                      <div className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#A6FF2E]/50 px-2 py-0.5 rounded bg-white/5 w-fit">
                        <span>{t("modal.coming_soon")}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CATEGORY 2: APPS / BUSINESS SYSTEMS */}
                <div className="space-y-2.5 pt-1">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#DADDD6]/70">
                    <Smartphone className="h-3.5 w-3.5 text-[#A6FF2E]" />
                    <span>{t("modal.group.apps")}</span>
                  </div>

                  <div className="grid grid-cols-1 gap-2.5">
                    {/* Taqyeemi App */}
                    <button
                      type="button"
                      onClick={() => handleSelectService("taqyeemi")}
                      className={`relative flex items-center justify-between p-3.5 rounded-2xl border text-left rtl:text-right transition-all cursor-pointer ${
                        selectedService === "taqyeemi"
                          ? "border-[#A6FF2E] bg-[#0B2F23] text-white ring-2 ring-[#A6FF2E]/60 shadow-lg"
                          : "border-white/10 bg-[#0B2F23]/30 hover:bg-[#0B2F23]/70 text-[#DADDD6]"
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs sm:text-sm font-extrabold tracking-wide uppercase text-white">
                            {t("modal.pkg.taqyeemi.title")}
                          </span>
                          <span className="text-[10px] font-bold text-[#A6FF2E] bg-[#A6FF2E]/10 px-2 py-0.5 rounded-full border border-[#A6FF2E]/20">
                            {lang === "ar" ? "منتج رقمي حي" : "Live Product"}
                          </span>
                        </div>
                        <div className="text-xs text-[#DADDD6]/80">
                          {t("modal.pkg.taqyeemi.sub")}
                        </div>
                      </div>

                      {selectedService === "taqyeemi" ? (
                        <div className="p-1.5 rounded-xl bg-[#A6FF2E] text-[#09110D] shrink-0">
                          <Check className="h-4 w-4 stroke-[3]" />
                        </div>
                      ) : (
                        <div className="p-1.5 rounded-xl bg-white/5 text-white/40 shrink-0">
                          <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                        </div>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Error Message if Resend delivery fails */}
              {submitError && (
                <div className="p-3.5 rounded-2xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs font-semibold flex items-start gap-2.5">
                  <AlertCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p>{submitError}</p>
                  </div>
                </div>
              )}

              {/* Submit CTA Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 rounded-xl text-base font-extrabold shadow-lg bg-[#A6FF2E] hover:bg-[#b5ff4f] text-[#09110D] cursor-pointer transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? t("modal.submitting") : t("modal.submit")}</span>
                {!isSubmitting && <ArrowRight className="h-4 w-4 rtl:rotate-180" />}
              </button>
            </form>
          </>
        ) : (
          <div className="py-8 text-center space-y-6">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#A6FF2E]/10 text-[#A6FF2E] ring-8 ring-[#A6FF2E]/5">
              <CheckCircle2 className="h-10 w-10" />
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold tracking-tight text-white">
                {t("modal.success_title")}
              </h3>
              <p className="text-sm text-[#DADDD6] max-w-md mx-auto">
                {t("modal.success_desc")}
                <span className="font-mono font-bold text-[#A6FF2E] px-2 py-0.5 rounded bg-[#A6FF2E]/10">
                  {submittedData?.refId}
                </span>
              </p>

              {submittedData && (
                <div className="p-4 rounded-2xl bg-[#0B2F23]/80 border border-white/10 text-left rtl:text-right max-w-md mx-auto space-y-1.5 text-xs text-[#DADDD6]">
                  <div className="flex justify-between">
                    <span className="text-white/60">{t("modal.name")}:</span>
                    <span className="font-bold text-white">{submittedData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">{t("modal.business_name")}:</span>
                    <span className="font-bold text-white">{submittedData.businessName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">{t("modal.whatsapp")}:</span>
                    <span className="font-mono font-bold text-[#A6FF2E]" dir="ltr">{submittedData.whatsapp}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">{t("modal.select_service")}:</span>
                    <span className="font-bold text-white">{getServiceLabel(submittedData.service)}</span>
                  </div>
                </div>
              )}

              <p className="text-xs text-[#DADDD6]/80 pt-1">
                {t("modal.success_sub")}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center">
              <button
                type="button"
                onClick={handleReset}
                className="px-5 py-2.5 rounded-xl border border-white/20 hover:bg-white/10 text-white text-xs font-semibold cursor-pointer"
              >
                {t("modal.new_request")}
              </button>
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="px-6 py-2.5 rounded-xl bg-[#A6FF2E] text-[#09110D] font-extrabold text-xs cursor-pointer hover:bg-[#b5ff4f]"
              >
                {t("modal.close")}
              </button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
