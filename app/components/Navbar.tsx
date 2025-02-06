// app/components/Navbar.tsx
"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between">
        <h1 className="text-xl">MusiLearn</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">Menu</button>
      </div>
      <ul className={`md:flex ${isOpen ? "block" : "hidden"}`}>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/dashboard/teacher/courses">Cours</Link></li>
      </ul>
    </nav>
  );
}
