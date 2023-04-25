import { NextResponse } from 'next/server';
import courses from '../data.json';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const courseName = searchParams.get('courseName');
  const filterCourses = courses.filter((course) =>
    course.title
      .toLowerCase()
      .includes(courseName.replaceAll("'", '').toLowerCase())
  );
  return NextResponse.json(filterCourses);
}
