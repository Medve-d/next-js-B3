"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

/* eslint-disable react/no-unescaped-entities */

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    setError("");
    try {
      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
      });

      if (response.ok) {
        router.push("/login");
      } else {
        const { message } = await response.json();
        setError(message || "Erreur lors de l'inscription.");
      }
    } catch {
      setError("Erreur réseau.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-xl">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
          Inscription
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Nom</label>
            <input
              type="text"
              placeholder="Nom"
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Mot de passe</label>
            <input
              type="password"
              placeholder="Mot de passe"
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Rôle</label>
            <select
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="student">Étudiant</option>
              <option value="teacher">Professeur</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            onClick={handleRegister}
            className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
          >
            S'inscrire
          </button>
        </div>
      </div>
    </div>
  );
}
