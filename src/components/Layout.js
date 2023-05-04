import { Link } from 'react-router-dom';

function Layout() {
  return (
    <header>
      <nav>
        <h1>
          <Link to="/">Math Magicians</Link>
        </h1>

        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          |
          <li><Link to="/calculator">Calculator</Link></li>
          |
          <li><Link to="/quote">Quote</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Layout;
