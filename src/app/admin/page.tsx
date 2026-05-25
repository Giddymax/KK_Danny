import { redirect } from "next/navigation";
import { AdminDashboard } from "./dashboard";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const supabase = await createServerSupabaseClient();
  let userEmail = "demo@kkdanny.local";
  let userName = "Demo Staff";
  let isDemo = true;

  if (supabase) {
    const {
      data: { user }
    } = await supabase.auth.getUser();

    if (!user) {
      redirect("/admin/login");
    }

    userEmail = user.email ?? "staff@kkdanny.com";

    const { data: profile } = await supabase
      .from("profiles")
      .select("full_name")
      .eq("id", user.id)
      .single();

    userName = profile?.full_name || userEmail;
    isDemo = false;
  }

  return <AdminDashboard userEmail={userEmail} userName={userName} isDemo={isDemo} />;
}
