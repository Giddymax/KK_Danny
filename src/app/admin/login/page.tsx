import Image from "next/image";
import { Suspense } from "react";
import { brand, phoneLine } from "@/lib/brand";
import { hasSupabaseEnv } from "@/lib/supabase/env";
import { LoginForm } from "./login-form";

export default function LoginPage() {
  const supabaseReady = hasSupabaseEnv();

  return (
    <main className="login-shell">
      <section className="login-brand-panel" aria-label="Business profile">
        <div className="brand-card">
          <Image
            src={brand.logo}
            alt={`${brand.name} logo`}
            width={520}
            height={318}
            className="login-logo"
            priority
          />
          <div>
            <p className="eyebrow">{brand.location}</p>
            <h1>{brand.name}</h1>
            <p className="brand-subtitle">{brand.tagline}</p>
            <p className="brand-address">{brand.address}</p>
          </div>
          <div className="phone-strip" aria-label="Telephone numbers">
            {phoneLine}
          </div>
        </div>
      </section>

      <section className="login-form-panel" aria-label="Admin staff sign in">
        <Suspense fallback={<div className="login-card">Loading sign-in...</div>}>
          <LoginForm supabaseReady={supabaseReady} />
        </Suspense>
      </section>
    </main>
  );
}
