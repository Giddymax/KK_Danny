import Image from "next/image";
import { brand } from "@/lib/brand";
import { hasSupabaseEnv } from "@/lib/supabase/env";
import { LoginForm } from "./login-form";

type LoginPageProps = {
  searchParams?: Promise<{
    next?: string | string[];
  }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const supabaseReady = hasSupabaseEnv();
  const params = await searchParams;
  const nextValue = Array.isArray(params?.next) ? params.next[0] : params?.next;
  const nextPath = nextValue?.startsWith("/") ? nextValue : "/admin";

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
        </div>
      </section>

      <section className="login-form-panel" aria-label="Admin staff sign in">
        <LoginForm supabaseReady={supabaseReady} nextPath={nextPath} />
      </section>
    </main>
  );
}
