
import Link from "next/link";

export default function CourseTable() {
  const courses = [
    { id: "1", title: "Piano Débutant", teacher: "Jean Dupont" },
    { id: "2", title: "Guitare Classique", teacher: "Marie Curie" },
  ];

  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2">Cours</th>
          <th className="border p-2">Professeur</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course) => (
          <tr key={course.id} className="border">
            <td className="border p-2">{course.title}</td>
            <td className="border p-2">{course.teacher}</td>
            <td className="border p-2">
              <Link href={`/dashboard/teacher/courses/${course.id}`}>Voir</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
