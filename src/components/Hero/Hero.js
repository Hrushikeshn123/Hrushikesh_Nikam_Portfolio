import React from 'react'
import './Hero.css'
import profile_image from '../../assets/profile_image_circle.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () =>{
    return(
        <div id='home' className='hero'>
            <img src={profile_image} alt=""/>
            <h1><span>I'm Hrushikesh Nikam,</span> Web developer based in India</h1>
            <p>Hello! My name is Hrushikesh I have a strong passion for web development and have been honing my skills in HTML, CSS, JavaScript, and various frameworks.</p>
            <p>My goal is to build seamless and efficient web applications that provide excellent user experiences.</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href="#contact">Connect with me</AnchorLink></div>
                <a href='https://drive.google.com/file/d/1ApApMhZkcGPQQn-QCC3LQGz9rGmcu9TN/view?usp=drive_link'>
                <div className="hero-resume">My Resume</div>
                </a>
                
                
            </div>
        </div>
    )
}
export default Hero