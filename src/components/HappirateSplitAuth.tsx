import * as React from "react";
import happirateLogo from "@/assets/happirate-logo.png";
import { AuroraBackdrop } from "@/components/AuroraBackdrop";
import { HappirateLoanInquiryForm } from "@/components/HappirateLoanInquiryForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="min-w-0">
      <div className="text-3xl font-semibold tracking-tight">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function GoogleMark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <path
        d="M24 9.5c3.4 0 6.4 1.2 8.8 3.3l6-6C35.1 3.6 29.9 1.5 24 1.5 14.6 1.5 6.5 6.9 2.6 14.7l7 5.4C11.6 13.5 17.3 9.5 24 9.5z"
        fill="hsl(var(--primary))"
      />
      <path
        d="M46.5 24.5c0-1.5-.2-2.9-.5-4.2H24v8h12.6c-.6 3-2.4 5.6-5 7.3l7 5.4c4.1-3.8 6.9-9.4 6.9-16.5z"
        fill="hsl(var(--foreground))"
        opacity="0.75"
      />
      <path
        d="M9.6 28.1c-1-3-1-6.2 0-9.2l-7-5.4C-.2 19.6-.2 28.4 2.6 34.5l7-5.4z"
        fill="hsl(var(--primary))"
        opacity="0.55"
      />
      <path
        d="M24 46.5c5.9 0 11.1-2 14.8-5.5l-7-5.4c-2 1.4-4.6 2.2-7.8 2.2-6.7 0-12.4-4-14.4-10.1l-7 5.4C6.5 41.1 14.6 46.5 24 46.5z"
        fill="hsl(var(--primary))"
        opacity="0.8"
      />
    </svg>
  );
}

export function HappirateSplitAuth() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isSignedIn, setIsSignedIn] = React.useState(false);

  const onEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSignedIn(true);
    toast.message("Signed in (UI only)", {
      description: "Showing the next-step form. We can wire real login later.",
    });
  };

  const onGoogle = () => {
    setIsSignedIn(true);
    toast.message("Google sign-in (UI only)", {
      description: "Showing the next-step form. We can wire real login later.",
    });
  };

  return (
    <AuroraBackdrop className="min-h-screen">
      <div className="min-h-screen w-full">
        <div className="mx-auto grid min-h-screen w-full max-w-6xl grid-cols-1 items-stretch gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          {/* Left marketing panel */}
          <section className="flex flex-col justify-center">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border bg-card/70 p-3 shadow-soft backdrop-blur supports-[backdrop-filter]:bg-card/55">
                <img
                  src={happirateLogo}
                  alt="Happirate"
                  className="h-7 w-auto"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="text-sm text-muted-foreground">Transparent • Privacy-first</div>
            </div>

            <div className="mt-8 space-y-4">
              <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
                Compare &amp; Secure <span className="text-primary">Smarter Loans</span>
              </h1>
              <p className="max-w-xl text-pretty text-lg text-muted-foreground">
                India’s first transparent loan comparison platform with zero spam and no credit score damage.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <h2 className="text-sm font-medium text-foreground">Why Happirate</h2>
              <ul className="grid gap-2 text-sm text-muted-foreground">
                <li>✔ No data selling</li>
                <li>✔ No bureau score damage</li>
                <li>✔ RBI-aligned APR transparency</li>
                <li>✔ Compare lenders in minutes</li>
                <li>✔ Higher approval probability</li>
              </ul>
            </div>

            <div className="mt-10">
              <div className="grid gap-6 border-t border-border/60 pt-8 sm:grid-cols-3">
                <Stat value="15+" label="Integrated Banks & NBFCs" />
                <div className="hidden sm:block">
                  <div className="h-full w-px bg-border/60" />
                </div>
                <Stat value="0" label="Spam Calls Allowed" />
              </div>
            </div>
          </section>

          {/* Right auth card */}
          <section className="flex items-center justify-center lg:justify-end">
            {isSignedIn ? (
              <HappirateLoanInquiryForm onBack={() => setIsSignedIn(false)} />
            ) : (
              <Card
                className={cn(
                  "w-full max-w-md border-border/70 bg-card/75 shadow-elev backdrop-blur",
                  "supports-[backdrop-filter]:bg-card/55",
                )}
              >
                <CardHeader className="space-y-2 text-center">
                  <CardTitle className="text-2xl">Welcome back</CardTitle>
                  <CardDescription>Sign in to access your collections and downloads</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button type="button" variant="outline" className="w-full" onClick={onGoogle}>
                    <GoogleMark className="mr-2 size-5" />
                    Continue with Google
                  </Button>

                  <div className="flex items-center gap-3">
                    <Separator className="flex-1" />
                    <span className="text-xs text-muted-foreground">OR CONTINUE WITH EMAIL</span>
                    <Separator className="flex-1" />
                  </div>

                  <form onSubmit={onEmailLogin} className="space-y-3">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        type="email"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Password</label>
                      <Input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        type="password"
                        required
                      />
                    </div>

                    <Button type="submit" variant="hero" className="w-full">
                      Sign In
                    </Button>
                  </form>

                  <p className="text-center text-sm text-muted-foreground">
                    Don&apos;t have an account?{" "}
                    <a className="text-primary underline-offset-4 hover:underline" href="#">
                      Sign up
                    </a>
                  </p>
                  <p className="text-center text-xs text-muted-foreground">
                    By continuing, you agree to our{" "}
                    <a className="underline-offset-4 hover:underline" href="#">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a className="underline-offset-4 hover:underline" href="#">
                      Privacy Policy
                    </a>
                  </p>
                </CardContent>
              </Card>
            )}
          </section>
        </div>
      </div>
    </AuroraBackdrop>
  );
}
