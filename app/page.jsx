'use client';

import React, { useState, useEffect } from 'react';
import Courses from './components/Courses';
import CourseSearch from './components/CourseSearch';
import LoadingPage from './loading';

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const res = await fetch('/api/courses');
        const data = await res.json();
        setCourses(data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <h1>Welcome To My Crash Course 👋</h1>
      <CourseSearch getCourseSearch={(course) => setCourses(course)} />
      <Courses courses={courses} />
    </>
  );
};

export default HomePage;
