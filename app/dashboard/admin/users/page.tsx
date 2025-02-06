import { PrismaClient } from '@prisma/client';
import prisma from '@/app/lib/prisma'; 



interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export default async function AdminUsersPage() {
  const users: User[] = await prisma.user.findMany();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Gestion des Utilisateurs</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Nom</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Rôle</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}