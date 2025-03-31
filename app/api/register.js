import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role) {
    return res.status(400).json({ message: "Tous les champs sont requis" });
  }

  const { data: existingUser } = await supabase
    .from("users")
    .select("id")
    .eq("email", email)
    .single();

  if (existingUser) {
    return res.status(400).json({ message: "Cet email est déjà utilisé" });
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  const { error: insertError } = await supabase.from("users").insert([
    {
      id: data.user.id,
      name,
      email,
      role,
      created_at: new Date(),
    },
  ]);

  if (insertError) {
    return res.status(500).json({ message: "Erreur lors de l'inscription" });
  }

  res.status(200).json({ message: "Inscription réussie", user: data.user });
}
