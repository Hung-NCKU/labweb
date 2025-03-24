import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ⬅️ 加這個
import './Courses.css';

const Courses = () => {
  const [studentId, setStudentId] = useState('');
  const [idList, setIdList] = useState([]);
  const navigate = useNavigate(); // ⬅️ 使用 navigate

  useEffect(() => {
    document.title = 'Courses - INHPC';
    fetch('/ID.txt')
      .then(res => res.text())
      .then(data => {
        const ids = data.split('\n').map(id => id.trim()).filter(Boolean);
        setIdList(ids);
      });
  }, []);


  const handleLogin = () => {
    if (idList.includes(studentId)) {
      navigate('/courses-page'); // ⬅️ 用 navigate 轉跳
    } else {
      alert('Invalid student ID');
    }
  };

  return (
    <>
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            <a href="/"><img src="/assets/img/logo.png" alt="Logo" /></a>
          </div>
          <ul className="nav-links">
            <li><a href="/advisor">Advisor</a></li>
            <li><a href="/research">Research</a></li>
            <li><a href="/publications">Publications</a></li>
            <li><a href="/members">Members</a></li>
            <li><a href="/courses" className="active">Courses</a></li>
          </ul>
        </div>
      </nav>

      <main className="courses-page">
        <p>To access the courses page, please input your student ID.</p>
        <input
          type="text"
          placeholder="student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <p className="contact">
          If you have any question, please email to
          <a href="mailto:algoalgogo@gmail.com"> algoalgogo@gmail.com</a>
        </p>
      </main>

    </>
  );
};

export default Courses;
