'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface Student {
  id: string;
  name: string;
  email: string;
}

export default function TeacherStudentsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [students, setStudents] = useState<Student[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStudents = async () => {
      if (status === 'authenticated' && session?.user?.id) {
        try {
          const fetchedStudents = await prisma.user.findMany({
            where: { role: 'student' },
          });

          const typedStudents = fetchedStudents as Student[];
          setStudents(typedStudents);
        } catch (err) {
          console.error("Erreur lors de la récupération des étudiants:", err);
          setError("Erreur lors du chargement des étudiants.");
        } finally {
          setLoading(false);
        }
      } else if (status === 'unauthenticated') {
        router.push('/login');
      }
    };

    fetchStudents();
  }, [status, session?.user?.id, router]);

  if (status === 'loading' || loading) {
    return <div>Chargement des étudiants...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!students) {
    return <div>Aucun étudiant trouvé.</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Mes étudiants</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students?.map((student) => (
          <div key={student.id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{student.name}</h2>
            <p className="text-gray-600">{student.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}