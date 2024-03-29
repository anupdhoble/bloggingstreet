import React, { useEffect } from 'react';
import {Link,useLocation} from 'react-router-dom';
import '../styles/header.css'

export default function Header({isNavbarActive,toggleNavbar,closeTheMenu}) {
    let location=useLocation();
    useEffect(()=>{
        console.log(location.pathname);
    },[location]);
    return (
        <>
            <nav className={`navbar ${isNavbarActive ? 'active' : ''}`}>
            <Link className={`${location.pathname==="/home" ? 'highlightNavoption':''}`} to="/home" onClick={closeTheMenu}><img src="logo.ico" alt="Hello" id="logo" /></Link>
                <span>Anup Dhoble</span>
                <ul className="list_nav">
                    
                    <li><Link className={`${location.pathname==="/home" ? 'highlightNavoption':''}`} to="/home" onClick={closeTheMenu}>Home</Link></li>
                    <li><Link className={`${location.pathname==="/music" ? 'highlightNavoption':''}`} to="/music" onClick={closeTheMenu}>Music</Link></li>
                    <li><Link className={`${location.pathname==="/about" ? 'highlightNavoption':''}`} to="/about" onClick={closeTheMenu}>About</Link></li>
                    <li><Link className={`${location.pathname==="/contact" ? 'highlightNavoption':''}`} to="/contact" onClick={closeTheMenu}>Contact Us</Link></li>
                    
                </ul>
                <div className="search nav-right">
                    <input type="text" name="search" id="searchbox" placeholder="Search Article" />
                    <a title="magnicon" href="index.html" className="nav-magnicon"><i className="fa-solid fa-magnifying-glass fa-5xs"></i></a>
                </div>
                <div className="toggle_btn" onClick={toggleNavbar}>
                    <i className="fa-solid fa-bars" style={{ color: '#05386b' }}></i>
                    <i className="fa-solid fa-xmark" style={{ color: '#05386b' }}></i>
                </div>
            </nav>
            <div className="hr-nav m-auto">
                <hr />
            </div>
        </>
    );
}
