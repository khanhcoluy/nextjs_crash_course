import React from 'react';
import Link from 'next/link';

async function getCourses() {
  const response = await fetch('http://localhost:3000/api/courses');
  const data = await response.json();
  return data;
}

const Courses = async () => {
  const courses = await getCourses();
  return (
    <div className="courses">
      {courses.map((course) => (
        <div key={course.id} className="card">
          <h3>{course.title}</h3>
          <small>{course.level}</small>
          <p>{course.description}</p>
          <Link href={course.link} target="_blank" className="btn">
            Go to course
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Courses;
