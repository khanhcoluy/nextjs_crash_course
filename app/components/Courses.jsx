import Link from 'next/link';

const Courses = ({ courses = [] }) => {
  return (
    <>
      {courses?.map((course) => (
        <div key={course.id} className="card">
          <h3>{course.title}</h3>
          <small>{course.level}</small>
          <p>{course.description}</p>
          <Link href={course.link} target="_blank" className="btn">
            Go to course
          </Link>
        </div>
      ))}
    </>
  );
};

export default Courses;
