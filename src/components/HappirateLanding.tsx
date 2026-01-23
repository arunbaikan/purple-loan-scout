import { AuroraBackdrop } from "@/components/AuroraBackdrop";
import happirateLogo from "@/assets/happirate-logo.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { CheckCircle2, Shield, Sparkles } from "lucide-react";
import * as React from "react";
import { toast } from "sonner";

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border bg-card/70 px-4 py-3 shadow-soft backdrop-blur supports-[backdrop-filter]:bg-card/55">
      <div className="text-2xl font-semibold tracking-tight">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function Tick({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-sm">
      <CheckCircle2 className="mt-0.5 size-4 text-primary" />
      <span className="text-muted-foreground">
        <span className="text-foreground">{children}</span>
      </span>
    </li>
  );
}

function LoanCheckCard() {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks! We’ll reach out with lender options.", {
      description: "(Demo form — connects to backend later)",
    });
    setName("");
    setPhone("");
  };

  return (
    <Card className="shadow-elev border-border/70 bg-card/75 backdrop-blur supports-[backdrop-filter]:bg-card/55">
      <CardHeader className="space-y-2">
        <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
          <Shield className="size-4 text-primary" />
          Zero spam • No score damage
        </div>
        <CardTitle className="text-xl">Check your best loan options</CardTitle>
        <CardDescription>
          Start with a quick preview — no hidden calls, no data selling.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-3">
          <div className="space-y-2">
            <label className="text-sm font-medium">Name</label>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Mobile</label>
            <Input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="10-digit mobile number"
              inputMode="numeric"
              pattern="[0-9]{10}"
              required
            />
          </div>
          <Button type="submit" variant="hero" className="w-full">
            Compare lenders
          </Button>
          <p className="text-xs text-muted-foreground">
            By continuing, you agree to our Terms & Privacy Policy.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}

export function HappirateLanding() {
  return (
    <AuroraBackdrop className="min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between gap-6">
          <a href="/" className="flex items-center gap-3">
            <img
              src={happirateLogo}
              alt="Happirate"
              className="h-8 w-auto"
              loading="eager"
              decoding="async"
            />
            <span className="sr-only">Happirate</span>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <a className="hover:text-foreground" href="#why">
              Why Happirate
            </a>
            <a className="hover:text-foreground" href="#impact">
              Our Impact
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="soft" className="hidden sm:inline-flex">
              <a href="#why">Learn more</a>
            </Button>
            <Button asChild variant="hero">
              <a href="#start">Get started</a>
            </Button>
          </div>
        </header>

        <main>
          <section id="start" className="grid items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border bg-card/70 px-3 py-1 text-sm shadow-soft backdrop-blur supports-[backdrop-filter]:bg-card/55">
                <Sparkles className="size-4 text-primary" />
                <span className="text-muted-foreground">India’s first transparent loan comparison platform</span>
              </div>

              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Compare &amp; Secure Smarter Loans
              </h1>

              <p className="max-w-xl text-pretty text-lg text-muted-foreground">
                Compare lenders in minutes — with zero spam and no credit score damage.
              </p>

              <ul className="grid gap-2">
                <Tick>No data selling</Tick>
                <Tick>No bureau score damage</Tick>
                <Tick>RBI-aligned APR transparency</Tick>
                <Tick>Compare lenders in minutes</Tick>
                <Tick>Higher approval probability</Tick>
              </ul>

              <div className="grid grid-cols-2 gap-3 pt-2 sm:max-w-lg">
                <Stat value="15+" label="Integrated Banks & NBFCs" />
                <Stat value="0" label="Spam Calls Allowed" />
              </div>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
                <Button asChild variant="hero" size="lg" className="sm:w-auto">
                  <a href="#start">Compare now</a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className={cn(
                    "sm:w-auto",
                    "bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/45",
                  )}
                  asChild
                >
                  <a href="#impact">See our impact</a>
                </Button>
              </div>
            </div>

            <div className="lg:justify-self-end">
              <LoanCheckCard />
            </div>
          </section>

          <Separator className="bg-border/60" />

          <section id="why" className="py-14">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-semibold tracking-tight">Why Happirate</h2>
                <p className="mt-2 text-muted-foreground">
                  Designed to be privacy-first, transparent, and fast.
                </p>
              </div>

              <div className="grid gap-4 lg:col-span-2 sm:grid-cols-2">
                {[
                  {
                    title: "Zero spam",
                    desc: "No random calls. You stay in control of who contacts you.",
                  },
                  {
                    title: "No score damage",
                    desc: "Explore options without unnecessary bureau hits.",
                  },
                  {
                    title: "APR transparency",
                    desc: "RBI-aligned APR breakdown so you can compare fairly.",
                  },
                  {
                    title: "Higher approvals",
                    desc: "Match with lenders that fit your profile — faster, smarter.",
                  },
                ].map((item) => (
                  <Card
                    key={item.title}
                    className="border-border/70 bg-card/65 shadow-soft backdrop-blur supports-[backdrop-filter]:bg-card/45"
                  >
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">{item.title}</CardTitle>
                      <CardDescription className="text-sm">{item.desc}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <Separator className="bg-border/60" />

          <section id="impact" className="py-14">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Our Impact</h2>
                <p className="mt-2 text-muted-foreground">
                  Built to make borrowing transparent and stress-free.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:justify-self-end sm:max-w-lg">
                <Stat value="15+" label="Integrated Banks & NBFCs" />
                <Stat value="0" label="Spam Calls Allowed" />
              </div>
            </div>
          </section>

          <footer className="pb-10 pt-2 text-sm text-muted-foreground">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <span>© {new Date().getFullYear()} Happirate</span>
              <span className="text-xs">Transparent comparisons • Privacy-first</span>
            </div>
          </footer>
        </main>
      </div>
    </AuroraBackdrop>
  );
}
