import React, { useEffect } from 'react';
import './CoursesPage.css'; // optional 自定義樣式

const courseList = [
  { year: '2024', term: 'fall', title: 'Graph Theory (圖形理論)' },
  { year: '2024', term: 'fall', title: 'Discrete Mathematics (離散數學)' },
  { year: '2024', term: 'spring', title: 'Algorithm (演算法)' },
  { year: '2023', term: 'fall', title: 'Graph Theory (圖論)' },
  { year: '2023', term: 'spring', title: 'Algorithm (演算法)' },
  { year: '2020', term: 'spring', title: 'Algorithm (演算法)' },
  { year: '2019', term: 'spring', title: 'Algorithm (演算法)' },
  { year: '2018', term: 'spring', title: 'Algorithm (演算法)' },
  { year: '2017', term: 'spring', title: 'Algorithm (演算法)' },
  { year: '2016', term: 'fall', title: 'Algorithm (演算法)' },
  { year: '2015', term: 'fall', title: 'Algorithm (演算法)' },
  { year: '2014', term: 'fall', title: 'Algorithm (演算法)' },
  { year: '2013', term: 'fall', title: 'Algorithm (演算法)' },
  { year: '2012', term: 'fall', title: 'Algorithm (演算法)' },
  { year: '2010', term: 'fall', title: 'Algorithm (演算法)' },
  { year: '2009', term: 'fall', title: 'Algorithm (演算法)' },
];

const CoursesPage = () => {
  useEffect(() => {
    document.title = 'Courses - INHPC';
  }, []);

  return (
    <div className="courses-container" style={{ padding: '50px', background: '#f0f0f0' }}>
      <h1 style={{ color: '#0391e0' }}>Courses</h1>
      <ul style={{ lineHeight: '2em', paddingLeft: '20px' }}>
        {courseList.map((course, index) => (
          <li key={index}>
            <a href="#" style={{ color: '#0391e0' }}>
              {`${course.year} ${course.term} ${course.title}`}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoursesPage;
