import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Video from './components/Video';
import Home from './pages/Home';
import Advisor from './pages/Advisor';
import Research from './pages/Research';
import Publications from './pages/Publications';
import Members from './pages/Members';
import './App.css';
import Courses from './pages/Courses';
import CoursesPage from './pages/courses-page'; // 成功畫面

function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        <Routes>
          <Route path="/"   element={
              <>
                <Video />
                <Home />
              </>
            }
          />
          <Route path="/advisor" element={<Advisor />} />
          <Route path="/research" element={<Research />} /> 
          <Route path="/publications" element={<Publications />} />
          <Route path="/members" element={<Members />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses-page" element={<CoursesPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
