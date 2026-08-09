import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useI18n } from "@/lib/i18n";
import logoIcon from "@/assets/muhab-icon.jpg";
import { CheckCircle2, Globe, ShoppingBag, Rocket, Palette, ArrowRight } from "lucide-react";

interface RequestWebsiteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultCategory?: string;
}

export function RequestWebsiteDialog({ open, onOpenChange, defaultCategory = "corporate" }: RequestWebsiteDialogProps) {
  const { t } = useI18n();
  const [category, setCategory] = useState(defaultCategory);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [budget, setBudget] = useState("$3,000 - $7,000");
  const [requirements, setRequirements] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refId, setRefId] = useState("");

  const categories = [
    { id: "corporate", icon: Globe, labelKey: "modal.cat.corporate" },
    { id: "ecommerce", icon: ShoppingBag, labelKey: "modal.cat.ecommerce" },
    { id: "saas", icon: Rocket, labelKey: "modal.cat.saas" },
    { id: "portfolio", icon: Palette, labelKey: "modal.cat.portfolio" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedId = `MHB-${Math.floor(10000 + Math.random() * 90000)}`;
      setRefId(generatedId);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName("");
    setContact("");
    setRequirements("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto rounded-3xl border border-[#A6FF2E]/25 bg-[#051A12] text-white shadow-2xl">
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
              {/* Category Selector */}
              <div className="space-y-3">
                <Label className="text-xs font-bold uppercase tracking-wider text-[#A6FF2E]">
                  {t("modal.category")}
                </Label>
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                  {categories.map((item) => {
                    const Icon = item.icon;
                    const isSelected = category === item.id;
                    return (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setCategory(item.id)}
                        className={`flex items-center gap-3 p-3 rounded-2xl border text-left rtl:text-right transition-all cursor-pointer ${
                          isSelected
                            ? "border-[#A6FF2E] bg-[#0B2F23] text-white ring-1 ring-[#A6FF2E]/50 shadow-md"
                            : "border-white/10 bg-[#0B2F23]/40 hover:bg-[#0B2F23] text-[#DADDD6]"
                        }`}
                      >
                        <div className={`p-2 rounded-xl shrink-0 ${isSelected ? "bg-[#A6FF2E] text-[#09110D]" : "bg-white/10 text-white"}`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold line-clamp-1">
                          {t(item.labelKey as any)}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Contact Info Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="req-name" className="text-xs font-semibold text-white/90">
                    {t("modal.name")} *
                  </Label>
                  <Input
                    id="req-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t("modal.name_placeholder")}
                    className="rounded-xl bg-[#0B2F23]/60 border-white/15 text-white placeholder:text-white/40 focus-visible:ring-[#A6FF2E]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="req-contact" className="text-xs font-semibold text-white/90">
                    {t("modal.contact")} *
                  </Label>
                  <Input
                    id="req-contact"
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder={t("modal.contact_placeholder")}
                    className="rounded-xl bg-[#0B2F23]/60 border-white/15 text-white placeholder:text-white/40 focus-visible:ring-[#A6FF2E]"
                  />
                </div>
              </div>

              {/* Budget Selector */}
              <div className="space-y-2">
                <Label className="text-xs font-semibold text-white/90">
                  {t("modal.budget")}
                </Label>
                <div className="grid grid-cols-3 gap-2">
                  {["modal.budget_1", "modal.budget_2", "modal.budget_3"].map((key) => {
                    const val = t(key as any);
                    const isSelected = budget === val;
                    return (
                      <button
                        type="button"
                        key={key}
                        onClick={() => setBudget(val)}
                        className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          isSelected
                            ? "border-[#A6FF2E] bg-[#A6FF2E] text-[#09110D]"
                            : "border-white/15 bg-[#0B2F23]/40 text-white hover:bg-[#0B2F23]"
                        }`}
                      >
                        {val}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Requirements & Notes */}
              <div className="space-y-2">
                <Label htmlFor="req-notes" className="text-xs font-semibold text-white/90">
                  {t("modal.requirements")}
                </Label>
                <Textarea
                  id="req-notes"
                  rows={3}
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  placeholder={t("modal.req_placeholder")}
                  className="rounded-xl bg-[#0B2F23]/60 border-white/15 text-white placeholder:text-white/40 focus-visible:ring-[#A6FF2E] resize-none"
                />
              </div>

              {/* Primary Electric Lime CTA Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 rounded-xl text-base font-extrabold shadow-lg bg-[#A6FF2E] hover:bg-[#b5ff4f] text-[#09110D] cursor-pointer transition-all flex items-center justify-center gap-2"
              >
                <span>{isSubmitting ? t("modal.submitting") : t("modal.submit")}</span>
                {!isSubmitting && <ArrowRight className="h-4 w-4 rtl:rotate-180" />}
              </button>
            </form>
          </>
        ) : (
          <div className="py-8 text-center space-y-6">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#A6FF2E]/10 text-[#A6FF2E] ring-8 ring-[#A6FF2E]/5 animate-bounce">
              <CheckCircle2 className="h-10 w-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tight text-white">
                {t("modal.success_title")}
              </h3>
              <p className="text-sm text-[#DADDD6] max-w-md mx-auto">
                {t("modal.success_desc")}
                <span className="font-mono font-bold text-[#A6FF2E] px-2 py-0.5 rounded bg-[#A6FF2E]/10">
                  {refId}
                </span>
              </p>
              <p className="text-xs text-[#DADDD6]/80">
                {t("modal.success_sub")}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center">
              <button
                onClick={handleReset}
                className="px-5 py-2.5 rounded-xl border border-white/20 hover:bg-white/10 text-white text-xs font-semibold cursor-pointer"
              >
                {t("modal.new_request")}
              </button>
              <button
                onClick={() => onOpenChange(false)}
                className="px-6 py-2.5 rounded-xl bg-[#A6FF2E] text-[#09110D] font-extrabold text-xs cursor-pointer"
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
