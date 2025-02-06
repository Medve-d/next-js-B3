'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { PrismaClient } from '@prisma/client';
import Link from 'next/link';

const prisma = new PrismaClient();

interface Course {
  id: string;
  title: string;
  description: string | null;
  instrument: string;
  teacherId: string;
  level: string;
  schedule: string;
  capacity: number;
}

export default function TeacherCoursesPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCourses() {
      if (status === 'authenticated' && session?.user?.id) {
        try {
          const fetchedCourses = await prisma.course.findMany({
            where: { teacherId: session.user.id },
          });

          const typedCourses = fetchedCourses as Course[];
          setCourses(typedCourses);
        } catch (err) {
          console.error("Erreur lors de la récupération des cours :", err);
          setError("Une erreur s'est produite lors du chargement des cours.");
        } finally {
          setLoading(false);
        }
      } else if (status === 'unauthenticated') {
        router.push('/login');
      }
    }

    fetchCourses();
  }, [status, session?.user?.id, router]);

  if (loading) {
    return <div>Chargement des cours...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Mes Cours</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p className="text-gray-600">{course.description}</p>
            <Link href={`/dashboard/teacher/course/${course.id}`} className="mt-4 inline-block bg-blue-500 text-white p-2 rounded">
              Voir les détails
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}