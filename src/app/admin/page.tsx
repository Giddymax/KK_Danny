import { redirect } from "next/navigation";
import { AdminDashboard } from "./dashboard";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const supabase = await createServerSupabaseClient();
  let userEmail = "demo@kkdanny.local";
  let isDemo = true;

  if (supabase) {
    const {
      data: { user }
    } = await supabase.auth.getUser();

    if (!user) {
      redirect("/admin/login");
    }

    userEmail = user.email ?? "staff@kkdanny.com";
    isDemo = false;
  }

  return <AdminDashboard userEmail={userEmail} isDemo={isDemo} />;
}
