import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", required: true },
        password: { label: "Password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email et mot de passe requis.");
        }

        console.log("🔍 Credentials reçus :", credentials);

        const { data, error } = await supabase.auth.signInWithPassword({
          email: credentials.email,
          password: credentials.password,
        });

        console.log("Réponse Supabase :", { data, error });

        if (error || !data.user) {
          console.error("Erreur Supabase :", error?.message || "Aucun utilisateur trouvé");
          throw new Error("Identifiants incorrects");
        }

        return data.user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};

export const { GET, POST } = NextAuth(authOptions);
