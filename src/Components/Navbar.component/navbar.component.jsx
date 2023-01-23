import React,{ useEffect,useState }  from 'react'
import "./navbar.component.css"

function Navbar() {
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true)
    } else{
      handleShow(false)
    }
  };
  useEffect(() => {
     window.addEventListener("scroll",transitionNavBar)
     return () =>window.removeEventListener("scroll",transitionNavBar);
      }, []);
  return (
     <div className={`Nav_bar ${ show && "Nav_black"}`} >
      <div className='Nav_content'>
        <img className='Nav_logo' src='https://pngimg.com/uploads/netflix/netflix_PNG25.png' alt='netflix-logo'/>
        <img className='Nav_avatar' src='https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg' alt='netflix-avatar'/>
      </div>
      
    </div>
  );
}

export default Navbar;