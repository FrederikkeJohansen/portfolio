import { Link } from 'react-router-dom';
import '../styles/CustomStyles.css';

function NavBar() {
  return (
    <div className="navbar min-h-0 h-8 py-0 items-center px-4">
      <div className="flex-1">
        <ul className="menu menu-horizontal font-light text-xs h-8 min-h-0 items-center">
          <li><Link to="/" className="px-0 custom-underline hover:bg-white">FREDERIKKE ELLEN JOHANSEN</Link></li>
        </ul>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal font-light text-xs h-8 min-h-0 items-center">
          <li><Link to="/projects" className="px-0 mx-4 custom-underline hover:bg-white">PROJECTS</Link></li>
          <li><Link to="/resume" className="px-0 custom-underline hover:bg-white">RESUME</Link></li>
        </ul>
      </div>
    </div>
  );
}
export default NavBar;