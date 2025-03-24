import React, { useState } from 'react';
import './CoursesPage.css';

const CoursesPage = () => {
  const [studentID, setStudentID] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await fetch('/ID.txt');
      const text = await response.text();
      const lines = text.split('\n');
      const isValid = lines.some(line => {
        const [id, pw] = line.trim().split(',');
        return id === studentID && pw === password;
      });
      if (isValid) {
        setLoggedIn(true);
        setError('');
      } else {
        setError('Invalid ID or Password');
      }
    } catch (err) {
      setError('Failed to read ID.txt');
    }
  };

  if (loggedIn) {
    return (
      <div className="courses-page">
        <h1>Welcome to Courses Page</h1>
        <p>This is the content available after login.</p>
      </div>
    );
  }

  return (
    <div className="courses-page">
      <h1>Courses</h1>
      <p>To access the courses page, please input your student ID.</p>
      <input
        type="text"
        placeholder="student ID"
        value={studentID}
        onChange={(e) => setStudentID(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p className="error">{error}</p>}
      <p>If you have any question, please email to <a href="mailto:algoalgogo@gmail.com">algoalgogo@gmail.com</a></p>
    </div>
  );
};

export default CoursesPage;
