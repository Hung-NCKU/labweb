import React, { useEffect }  from 'react';
import './Advisor.css';

const Advisor = () => {
    useEffect(() => {
      document.title = 'Advisor | INHPC Lab';
      // 可選：也可動態改 favicon
      const favicon = document.querySelector("link[rel='icon']");
      if (favicon) {
        favicon.href = '/assets/img/logo.png'; // 你要用的圖示路徑
      }
    }, []);
  return (
    <>
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            <a href="/">
              <img src="/assets/img/logo.png" alt="Logo" />
            </a>
          </div>
          <ul className="nav-links">
            <li><a href="/advisor">Advisor</a></li>
            <li><a href="/research">Research</a></li>
            <li><a href="/publications">Publications</a></li>
            <li><a href="/members">Members</a></li>
            <li><a href="/courses">Courses</a></li>
          </ul>
        </div>
      </nav>

      <div className="content">
        <h1>Advisor</h1>
        <p>指導教授資訊將顯示於此。</p>
        <img
          src="/assets/img/hsieh.jpg"
          alt="Advisor Photo"
          className="advisor-img"
        />
      </div>

      <footer className="footer">
        <div className="footer-columns">
          <div>
            <p>
              <a href="https://web.ncku.edu.tw/" target="_blank" rel="noreferrer">
                國立成功大學
              </a>
            </p>
            <p>National Cheng Kung University</p>
            <p>
              <a href="https://eecs.ncku.edu.tw/" target="_blank" rel="noreferrer">
                電機資訊學院
              </a>
            </p>
            <p>College of EECS</p>
          </div>
          <div>
            <p>
              <a href="https://www.csie.ncku.edu.tw/" target="_blank" rel="noreferrer">
                資訊工程學系
              </a>
            </p>
            <p>Department of CSIE</p>
            <p>
              <a href="https://www.imi.ncku.edu.tw/" target="_blank" rel="noreferrer">
                醫學資訊研究所
              </a>
            </p>
            <p>Institute of Medical Informatics</p>
          </div>
        </div>
        <p className="footer-bottom">
          © 2024 互連網路暨高效率運算實驗室 ── INHPC NCKU ❤︎ ──
        </p>
      </footer>
    </>
  );
};

export default Advisor;