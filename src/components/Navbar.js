import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      background: '#fff',
      borderBottom: '1px solid #ccc',
      padding: '10px 20px',
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 10,
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',  // 左右排列
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* 左邊 LOGO */}
        <Link to="/" className="logo">
          <img src="/assets/img/logo.png" alt="Logo" style={{ height: '60px' }} />
        </Link>

        {/* 右邊導覽項目 */}
        <ul style={{
          listStyle: 'none',
          display: 'flex',
          gap: '20px',
          margin: 0,
          padding: 0,
        }}>
          <li><Link to="/advisor">Advisor</Link></li>
          <li><Link to="/research">Research</Link></li>
          <li><Link to="/publications">Publications</Link></li>
          <li><Link to="/members">Members</Link></li>
          <li><Link to="/courses">Courses</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
