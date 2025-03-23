import React, { useEffect } from 'react';

const Courses = () => {
  useEffect(() => {
    document.title = 'Courses - INHPC';
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.href = '/log.png';
    }
  }, []);

  return (
    <div className="content" style={{ maxWidth: '900px', margin: '0 auto', padding: '20px', textAlign: 'left' }}>
      <h1 style={{ color: '#0b476f' }}>Courses</h1>
      <section style={{ textAlign: 'center', marginTop: '40px' }}>
        <div className="loader" style={{
          animation: 'spin 0.4s cubic-bezier(.45,.05,.55,.95) infinite',
          border: '3px solid transparent',
          borderTop: '3px solid #40dcff',
          borderRadius: '50%',
          margin: '0 auto',
          width: '30px',
          height: '30px'
        }}></div>
      </section>
    </div>
  );
};

export default Courses;