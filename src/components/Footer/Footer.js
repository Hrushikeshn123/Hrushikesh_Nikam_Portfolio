import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
const Footer = ()=>{
    return(
        <div className='footer'>
          <hr />
          <div className="footer-bottom">
            <div><p className="footer-bottom-left">2024 Hrushikesh Nikam. All rights are reserved.</p></div>
            <div className="footer-bottom-right">
              <p>Term of Services</p>
              <p>Privacy Policy</p>
              <p>Connect with me</p>
            </div>
          </div>
        </div>
    )
}

export default Footer