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
        <h1>Sun-Yuan Hsieh</h1>
        <img
          src="/assets/img/hsieh.jpg"
          alt="Advisor Photo"
          className="advisor-img"
        />
        <p><strong class="highlight">Sun-Yuan Hsieh</strong> received the PhD degree in 
        computer science from <strong class="highlight">National Taiwan University</strong>, Taipei, Taiwan, in June 1998. He then served the compulsory two-year military service. From August 2000 to January 2002, he was an assistant professor at the Department of Computer Science and Information Engineering, <strong class="highlight">National Chi Nan University</strong>. In February 2002, he joined the Department of Computer Science and Information Engineering, National <strong class="highlight">Cheng Kung University</strong>, and now he is a chair professor. He received the 2007 K. T. Lee Research Award, President's Citation Award (American Biographical Institute) in 2007, the Engineering Professor Award of Chinese Institute of Engineers (Kaohsiung Branch) in 2008, National Science Council’s Outstanding Research Award in 2009, IEEE Outstanding Technical Achievement Award (IEEE Tainan Section) in 2011, Outstanding Electronic Engineering Professor Award of Chinese Institute of Electrical Engineers in 2013, and Outstanding Engineering Professor Award of Chinese Institute of Engineers in 2014. He is Fellow of the British Computer Society (BCS) and Fellow of Institution of Engineering and Technology (IET).<br /><br />

Dr. Hsieh is also an experienced editor with editorial services to a number of journals, including serving as associate editors of IEEE ACCESS, IEEE Transactions on Reliability, Theoretical Computer Science (Elsevier), Discrete Applied Mathematics (Elsevier), Journal of Supercomputing (Springer), International Journal of Computer Mathematics (Taylor & Francis Group), Parallel Processing Letters (World Scientific), Discrete Mathematics, Algorithms and Applications (World Scientific), Fundamental Informaticae (Polish Mathematical Society), and Journal of Interconnection Networks (World Scientific). In addition, he has served on organization committee and/or program committee of several dozens international conferences in computer science and computer engineering. His current research interests include design and analysis of algorithms, fault-tolerant computing, bioinformatics, parallel and distributed computing, and algorithmic graph theory. 

Dr. Hsieh is also an experienced editor with editorial services to a number of journals, including serving as associate editors of IEEE ACCESS, IEEE Transactions on Reliability, Theoretical Computer Science (Elsevier), Discrete Applied Mathematics (Elsevier), Journal of Supercomputing (Springer), International Journal of Computer Mathematics (Taylor & Francis Group), Parallel Processing Letters (World Scientific), Discrete Mathematics, Algorithms and Applications (World Scientific), Fundamental Informaticae (Polish Mathematical Society), and Journal of Interconnection Networks (World Scientific). In addition, he has served on organization committee and/or program committee of several dozens international conferences in computer science and computer engineering. His current research interests include design and analysis of algorithms, fault-tolerant computing, bioinformatics, parallel and distributed computing, and algorithmic graph theory. </p>
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