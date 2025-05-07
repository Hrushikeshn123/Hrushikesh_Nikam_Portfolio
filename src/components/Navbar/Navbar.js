import React from 'react'
import './Navbar.css'
import {useState, useRef} from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
const Navbar = ()=>{
    const [menu, setMenu] = useState("")
    const menuRef = useRef();

    const openMenu = () =>{
      menuRef.current.style.right="0";    
    }

    const closeMenu = ()=>{
      menuRef.current.style.right="-350px";
    }

    return(
      <div className="main">
            <div className='navbar'>
                <div className="portfolio-title">
                  <h1>Portfolio</h1>
                </div>       
                <div>
                <img src={menu_open} onClick={openMenu} alt=""  className='nav-mob-open'/>
                  <ul  ref={menuRef} className='nav-menu'>
                    <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close"/>
                    <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>About Me</p></AnchorLink></li>
                    <li><AnchorLink className='anchor-link' offset={120} href="#skill_scroll"><p onClick={()=>setMenu("about")}>Skills</p></AnchorLink></li>
                    <li><AnchorLink className='anchor-link' offset={120} href="#project_scroll"><p onClick={()=>setMenu("services")}>Projects</p></AnchorLink></li>
                    <li><AnchorLink className='anchor-link' offset={120} href="#education_scroll"><p onClick={()=>setMenu("services")}>Education</p></AnchorLink></li>
                    <li><AnchorLink className='anchor-link' offset={120} href="#achieve_scroll"><p onClick={()=>setMenu("services")}>Achievements</p></AnchorLink></li>
                </ul>
                </div>
                
                <div className='nav-connect'><AnchorLink className='anchor-link' offset={120} href="#contact">Connect with me</AnchorLink></div>
            </div>
      </div>  
    )
}

export default Navbar