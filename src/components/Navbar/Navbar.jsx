import './Navbar.css'
import { NavLink, Link } from "react-router-dom";

function Navbar() {
    document.title = "Triangles | Home";
    return (
        <>
            <nav className="nav-base flex">
                <Link to="/" className="txt-decor-none">
                    <div className="primary-nav-logo flex">
                        <h3>Triangles</h3>
                    </div>
                </Link>
                <input type="checkbox" id='nav-toggle' className='nav-toggle d-none'/>
                <ul className="list-style-none flex mobile-nav">
                    <li><NavLink to="is-triangle" className={({ isActive }) => isActive ? "uppercase nav-base-link link-active" : "uppercase nav-base-link"}>Is Triangle?</NavLink></li>
                    <li><NavLink to="quiz" className={({ isActive }) => isActive ? "uppercase nav-base-link link-active" : "uppercase nav-base-link"}>Quiz</NavLink></li>
                    <li><NavLink to="hypotenuse" className={({ isActive }) => isActive ? "uppercase nav-base-link link-active" : "uppercase nav-base-link"}>Hypotenuse</NavLink></li>
                    <li><NavLink to="areacalc" className={({ isActive }) => isActive ? "uppercase nav-base-link link-active" : "uppercase nav-base-link"}>Area Calculator</NavLink></li>
                </ul>
                <label htmlFor='nav-toggle' className='mobile-nav-button'><span className='d-none'>Menu</span></label>
            </nav>
        </>
    );
  }
  
export default Navbar;