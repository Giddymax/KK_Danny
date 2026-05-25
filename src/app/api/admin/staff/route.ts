import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdminConfig } from "@/lib/supabase/env";
import { createServerSupabaseClient } from "@/lib/supabase/server";

type StaffPayload = {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  role?: string;
  active?: boolean;
};

type ValidStaff = {
  name: string;
  email: string;
  password: string;
  role: "admin" | "staff";
  active: boolean;
};

function jsonError(message: string, status: number) {
  return NextResponse.json({ error: message }, { status });
}

async function assertAdmin() {
  const supabase = await createServerSupabaseClient();

  if (!supabase) {
    return { error: jsonError("Supabase keys are not set.", 500) };
  }

  const {
    data: { user },
    error: userError
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return { error: jsonError("Sign in as an admin to manage staff accounts.", 401) };
  }

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("role,is_active")
    .eq("id", user.id)
    .single();

  if (profileError || profile?.role !== "admin" || !profile.is_active) {
    return { error: jsonError("Only active admins can manage staff accounts.", 403) };
  }

  return { user };
}

function validatePayload(payload: StaffPayload, mode: "create" | "update"): { staff: ValidStaff } | { error: string } {
  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim().toLowerCase() ?? "";
  const password = payload.password?.trim() ?? "";
  const role = payload.role === "admin" ? "admin" : "staff";
  const active = payload.active !== false;

  if (!name) {
    return { error: "Enter the staff member's full name." };
  }

  if (!email.includes("@")) {
    return { error: "Enter a valid email address." };
  }

  if (mode === "create" && password.length < 6) {
    return { error: "Enter a password with at least 6 characters." };
  }

  if (mode === "update" && password && password.length < 6) {
    return { error: "New password must be at least 6 characters." };
  }

  return { staff: { name, email, password, role, active } };
}

function createAdminClient() {
  const config = getSupabaseAdminConfig();

  if (!config) {
    return null;
  }

  return createClient(config.url, config.key, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
}

export async function POST(request: NextRequest) {
  const adminCheck = await assertAdmin();
  if ("error" in adminCheck) return adminCheck.error;

  const payload = (await request.json()) as StaffPayload;
  const parsed = validatePayload(payload, "create");
  if ("error" in parsed) return jsonError(parsed.error, 400);

  const supabaseAdmin = createAdminClient();
  if (!supabaseAdmin) return jsonError("Add SUPABASE_SERVICE_ROLE_KEY to the server environment.", 500);

  const { staff } = parsed;
  const { data, error } = await supabaseAdmin.auth.admin.createUser({
    email: staff.email,
    password: staff.password,
    email_confirm: true,
    user_metadata: { full_name: staff.name },
    app_metadata: { role: staff.role }
  });

  if (error || !data.user) {
    return jsonError(error?.message ?? "Unable to create staff login.", 400);
  }

  const { error: profileError } = await supabaseAdmin.from("profiles").upsert({
    id: data.user.id,
    email: staff.email,
    full_name: staff.name,
    role: staff.role,
    is_active: staff.active
  });

  if (profileError) {
    return jsonError(profileError.message, 400);
  }

  return NextResponse.json({
    staff: {
      id: data.user.id,
      name: staff.name,
      email: staff.email,
      role: staff.role,
      active: staff.active
    }
  });
}

export async function PATCH(request: NextRequest) {
  const adminCheck = await assertAdmin();
  if ("error" in adminCheck) return adminCheck.error;

  const payload = (await request.json()) as StaffPayload;
  const id = payload.id?.trim() ?? "";

  if (!id) {
    return jsonError("Missing staff account id.", 400);
  }

  const parsed = validatePayload(payload, "update");
  if ("error" in parsed) return jsonError(parsed.error, 400);

  const supabaseAdmin = createAdminClient();
  if (!supabaseAdmin) return jsonError("Add SUPABASE_SERVICE_ROLE_KEY to the server environment.", 500);

  const { staff } = parsed;
  const authAttributes: { email: string; password?: string; user_metadata: { full_name: string }; app_metadata: { role: string } } = {
    email: staff.email,
    user_metadata: { full_name: staff.name },
    app_metadata: { role: staff.role }
  };

  if (staff.password) {
    authAttributes.password = staff.password;
  }

  const { error: authError } = await supabaseAdmin.auth.admin.updateUserById(id, authAttributes);
  if (authError) {
    return jsonError(authError.message, 400);
  }

  const { error: profileError } = await supabaseAdmin
    .from("profiles")
    .update({
      email: staff.email,
      full_name: staff.name,
      role: staff.role,
      is_active: staff.active
    })
    .eq("id", id);

  if (profileError) {
    return jsonError(profileError.message, 400);
  }

  return NextResponse.json({
    staff: {
      id,
      name: staff.name,
      email: staff.email,
      role: staff.role,
      active: staff.active
    }
  });
}
