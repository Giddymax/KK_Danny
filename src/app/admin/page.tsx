import { redirect } from "next/navigation";
import { AdminDashboard } from "./dashboard";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const supabase = await createServerSupabaseClient();
  let userEmail = "demo@kkdanny.local";
  let userName = "Demo Staff";
  let userRole: "admin" | "staff" = "admin";
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
      .select("full_name,role")
      .eq("id", user.id)
      .single();

    userName = profile?.full_name || userEmail;
    userRole = profile?.role === "admin" ? "admin" : "staff";
    isDemo = false;
  }

  return <AdminDashboard userEmail={userEmail} userName={userName} userRole={userRole} isDemo={isDemo} />;
}
