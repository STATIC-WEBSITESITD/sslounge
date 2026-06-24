import { Link, NavLink } from 'react-router-dom'
import { imagePath } from '../assets/imagePath'

const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <div className="logo-container header-logo">
              <Link className="navbar-brand" to="/">
                <img
                  src={imagePath('logo.png')}
                  className="img-fluid"
                  alt=""
                />
              </Link>
            </div>
            <div className="nav-link-wrapper">
              <button
                className="btn nav-btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fa-solid fa-bars"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink className="nav-link" end to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                      About Us
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/services">
                      Our Services
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/blogs">
                      Blogs
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="navbar-cta-container">
              <Link to="/contact" className="btn btn-primary btn-nohover">
                Contact Us
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <aside>
        <div className="sidebar-overlay"></div>
        <div className="sidebar">
          <div className="sidebar-header">
            <div className="logo">
              <img
                src={imagePath('logo.png')}
                className="logo"
                alt="Logo"
              />
            </div>
            <button className="close-btn-sidebar" type="button">
              <span>X</span>
            </button>
          </div>
          <ul className="sidebar-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li className="sidebar-dropdown">
              <div className="dropdown-header">
                <a href="#">Pages</a>
                <button className="sidebar-dropdown-btn" type="button">
                  <i className="fa-solid fa-angle-down"></i>
                </button>
              </div>
              <ul className="sidebar-dropdown-menu">
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </li>
            <li className="sidebar-dropdown">
              <div className="dropdown-header">
                <a href="#">Blog</a>
                <button className="sidebar-dropdown-btn" type="button">
                  <i className="fa-solid fa-angle-down"></i>
                </button>
              </div>
              <ul className="sidebar-dropdown-menu">
                <li>
                  <Link to="/blogs">Archive</Link>
                </li>
                <li>
                  <Link to="/blogs/post">Blog Detail</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </aside>
    </>
  )
}

export default Header
