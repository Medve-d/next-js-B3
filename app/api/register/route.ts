import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const { name, email, password, role } = await req.json();

    // Création de l'utilisateur dans BDD
    const { data: user, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError) {
      return NextResponse.json({ message: authError.message }, { status: 400 });
    }

    const { error: insertError } = await supabase.from("users").insert([
      { id: user.user?.id, name, email, role },
    ]);

    if (insertError) {
      return NextResponse.json({ message: insertError.message }, { status: 400 });
    }

    return NextResponse.json({ message: "Utilisateur créé avec succès!" });
  } catch {
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}
