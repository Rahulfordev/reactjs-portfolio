import { useState } from 'react';
import './Home.css';
import logo from './img/logo.png'

function Home () {
   window.addEventListener("scroll", function() {
    const header = this.document.querySelector(".header");
     header.classList.toggle("active", window.scrollY > 0)
   });
    const [isOpen, setIsOpen] = useState(false);
    return (
     <div className='home' id='Home'>
        <div className='home__bg'>
            <div className='header Navbar'>
                <img className='logo' src={logo} alt='' />
                <div className={`nav-items ${isOpen && "open"}`} >
                    <a href='/home'>Home</a>
                    <a href='/about'>About</a>
                    <a href='/'>Portfolio</a>
                    <a href='/'>Service</a>
                    <a href='/contact'>Contact</a>
                </div>
                <div className={`nav-toggle ${isOpen && "open"}`} 
                onClick={() => setIsOpen(!isOpen)} >
                    <div className='bar'></div>
                </div>
            </div>
            <div className="container">
          <div className="home__content">
            <div className="home__meta">
             <h2 className="frelencer_content">
             Hey there!
             <br></br>
             I'm Martin Solonick Independent  
             <span> Frelencer</span>
             </h2>
            </div>
          </div>
        </div>
            
        </div>
     </div>
    )
}

export default Home;