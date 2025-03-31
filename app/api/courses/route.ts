import { NextResponse } from 'next/server';

const courses = [
    { id: 1, name: 'Introduction to JavaScript', level: 'Beginner' },
    { id: 2, name: 'Advanced TypeScript', level: 'Advanced' },
    { id: 3, name: 'React for Professionals', level: 'Intermediate' },
];

export async function GET() {
    return NextResponse.json(courses);
}

export async function POST(request: Request) {
    const body = await request.json();
    const newCourse = { id: courses.length + 1, ...body };
    courses.push(newCourse);
    return NextResponse.json(newCourse, { status: 201 });
}