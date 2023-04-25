import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import courses from './data.json';

export async function GET(request) {
  return NextResponse.json(courses);
}

export async function POST(request) {
  const requestBody = await request.json();
  const { title, description, link, level } = requestBody;
  const newCourse = {
    id: uuidv4(),
    title,
    description,
    link,
    level,
  };
  courses.push(newCourse);
  return NextResponse.json(courses);
}
