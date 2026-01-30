import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const loanInquirySchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name").max(80, "Name is too long"),
  monthlyIncome: z
    .string()
    .trim()
    .min(1, "Enter your monthly income")
    .refine((v) => /^\d+(\.\d+)?$/.test(v), "Use numbers only")
    .refine((v) => Number(v) > 0, "Income must be > 0"),
  city: z.string().trim().min(2, "Enter your city").max(50, "City is too long"),
  employmentType: z.string().trim().min(2, "Enter employment type").max(30, "Too long"),
});

type LoanInquiryValues = z.infer<typeof loanInquirySchema>;

export function HappirateLoanInquiryForm({ onBack }: { onBack?: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoanInquiryValues>({
    resolver: zodResolver(loanInquirySchema),
    defaultValues: {
      fullName: "",
      monthlyIncome: "",
      city: "",
      employmentType: "Salaried",
    },
    mode: "onBlur",
  });

  const onSubmit = React.useMemo(
    () =>
      handleSubmit(async (values) => {
        toast.success("Saved (UI only)", {
          description: `Thanks, ${values.fullName}. Next we can wire this to Cloud + lender results.`,
        });
      }),
    [handleSubmit],
  );

  return (
    <Card className="w-full max-w-md border-border/70 bg-card/70 shadow-elev backdrop-blur-xl supports-[backdrop-filter]:bg-card/50">
      <CardHeader className="space-y-2">
        <CardTitle className="text-2xl">Loan inquiry</CardTitle>
        <CardDescription className="text-pretty">
          Light-shade form experience — we’ll connect it to real lender matching next.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={onSubmit} className="space-y-3">
          <div className="space-y-2">
            <label className="text-sm font-medium">Full name</label>
            <Input placeholder="Your name" {...register("fullName")} aria-invalid={!!errors.fullName} />
            {errors.fullName && <p className="text-xs text-destructive">{errors.fullName.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Monthly income (₹)</label>
            <Input
              inputMode="decimal"
              placeholder="e.g. 75000"
              {...register("monthlyIncome")}
              aria-invalid={!!errors.monthlyIncome}
            />
            {errors.monthlyIncome && <p className="text-xs text-destructive">{errors.monthlyIncome.message}</p>}
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">City</label>
              <Input placeholder="Mumbai" {...register("city")} aria-invalid={!!errors.city} />
              {errors.city && <p className="text-xs text-destructive">{errors.city.message}</p>}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Employment</label>
              <Input placeholder="Salaried" {...register("employmentType")} aria-invalid={!!errors.employmentType} />
              {errors.employmentType && <p className="text-xs text-destructive">{errors.employmentType.message}</p>}
            </div>
          </div>

          <Button type="submit" variant="hero" className="w-full" disabled={isSubmitting}>
            Continue
          </Button>

          {onBack && (
            <Button type="button" variant="outline" className="w-full" onClick={onBack}>
              Back to sign in
            </Button>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
