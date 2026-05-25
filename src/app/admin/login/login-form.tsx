"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { Eye, EyeOff, LockKeyhole, LogIn, Mail, ShieldCheck } from "lucide-react";
import { brand, phoneLine } from "@/lib/brand";
import { createBrowserSupabaseClient } from "@/lib/supabase/browser";

type LoginFormProps = {
  supabaseReady: boolean;
};

export function LoginForm({ supabaseReady }: LoginFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextPath = searchParams.get("next") ?? "/admin";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");

  const canSubmit = useMemo(() => {
    return email.includes("@") && password.length >= 6 && !pending;
  }, [email, password, pending]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    if (!email.includes("@")) {
      setMessage("Enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }

    const supabase = createBrowserSupabaseClient();

    if (!supabase) {
      setMessage("Supabase keys are not set yet. Use dashboard preview or add .env.local keys.");
      return;
    }

    setPending(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    setPending(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    if (!remember) {
      await supabase.auth.updateUser({ data: { remember_device: false } });
    }

    router.replace(nextPath);
    router.refresh();
  }

  return (
    <div className="login-card">
      <div className="mobile-brand">
        <Image src={brand.logo} alt={`${brand.name} logo`} width={96} height={59} priority />
        <div>
          <strong>{brand.name}</strong>
          <span>{brand.tagline}</span>
        </div>
      </div>

      <div className="form-heading">
        <div className="secure-icon" aria-hidden="true">
          <ShieldCheck size={22} />
        </div>
        <div>
          <p className="eyebrow">Admin / Staff Portal</p>
          <h2>Sign in to dashboard</h2>
          <p>Manage sales, stock, receipts, staff activity, and daily shop records.</p>
        </div>
      </div>

      {!supabaseReady ? (
        <div className="setup-alert" role="status">
          <strong>Setup needed:</strong> add `NEXT_PUBLIC_SUPABASE_URL` and
          `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` to `.env.local` for real authentication.
        </div>
      ) : null}

      {message ? (
        <div className="toast-error" role="alert">
          {message}
        </div>
      ) : null}

      <form onSubmit={onSubmit} className="login-form">
        <label>
          <span>Email</span>
          <div className="field-wrap">
            <Mail size={18} aria-hidden="true" />
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
              required
            />
          </div>
        </label>

        <label>
          <span>Password</span>
          <div className="field-wrap">
            <LockKeyhole size={18} aria-hidden="true" />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              required
              minLength={6}
            />
            <button
              type="button"
              className="icon-button"
              onClick={() => setShowPassword((value) => !value)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              title={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </label>

        <div className="form-row">
          <label className="check-row">
            <input
              type="checkbox"
              checked={remember}
              onChange={(event) => setRemember(event.target.checked)}
            />
            <span>Remember me</span>
          </label>
          <Link href="/admin/login">Forgot password?</Link>
        </div>

        <button type="submit" className="primary-action" disabled={!canSubmit}>
          <LogIn size={18} />
          {pending ? "Signing in..." : "Sign in"}
        </button>

        {!supabaseReady ? (
          <Link href="/admin" className="secondary-action">
            Open dashboard preview
          </Link>
        ) : null}
      </form>

      <p className="contact-line">{phoneLine}</p>
    </div>
  );
}
