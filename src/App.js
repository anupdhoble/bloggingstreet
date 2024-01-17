import React, { useEffect,useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Music from './components/Music';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import Bloglogin from './components/Bloglogin';
import CreateBlog from './components/CreateBlog';


function App() {
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [isLogin,setIsLogin]=useState(localStorage.getItem("isLogin"));

    const toggleNavbar = () => {
        setIsNavbarActive((prevValue) => !prevValue);
    };

    const closeTheMenu=()=>{
      setIsNavbarActive(false);
    }
  useEffect(() => {
    let scrollupbtn = document.getElementById("scrollup");
    scrollupbtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  })

  return (
    <div className='wrapper'>
      
    <Router>
      <Header isNavbarActive={isNavbarActive} toggleNavbar={toggleNavbar} closeTheMenu={closeTheMenu}/>
      <Routes>
        {/* Define your routes here */}
        <Route path="/home" element={<Home isLogin={isLogin} setIsLogin={setIsLogin}/>} />
        <Route path="/" element={<Home isLogin={isLogin}/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/music" element={<Music/>} />
        <Route path="/contact" element={<Contact/>} />
        
        <Route path="/home/blogs" element={<Blogs isLogin={isLogin}/>}/>
        <Route path="/home/login" element={<Bloglogin isLogin={isLogin} setIsLogin={setIsLogin}/>}/>
        <Route path="/home/createblog" element={<CreateBlog isLogin={isLogin}/>}/>
      </Routes>
      <Footer isNavbarActive={isNavbarActive} toggleNavbar={toggleNavbar} />
    </Router>
    </div>
  );
}

export default App;
