import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import linkedin_icon from '../../assets/icons8-linkedin-logo-50.png'
import Github_icon from '../../assets/icons8-github-50.png'

const Contact =() => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "491df1f0-7b17-4277-bdb8-776dbf82b3b3");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());


    if (res.success) {
      alert(res.message);
    }
  };

    return(
      <div id="contact" className='contact'>
        <div className='contact-title'>
          <h1>Get in touch</h1>
        </div>
        <div className='contact-section'>
          <div className='contact-left'>
            <h1>Let's talk</h1>
            <p>I'm currently available to take new projects, so feel free to send me message about anything that you want me to work on. You can contact anytime.</p>
            <div className='contact-details'>
              <a href='https://www.linkedin.com/in/hrushikesh-nikam-936a26283/'>
                <div className="contact-detail">
                  <img src={linkedin_icon} alt=''/> <p>Linkedin</p>
                </div>
              </a>
              <a href='https://github.com/Hrushikeshn123'>  
                <div className="contact-detail">
                  <img src={Github_icon} alt=''/> <p>Github</p>
                </div>
              </a>
              <a href='mailto:hrushikeshn63@gmail.com'>
                <div className="contact-detail">
                  <img src={mail_icon} alt=''/> <p>hrushikeshn63@gmail.com</p>
                </div>
              </a>
              <a href='tel:+91 7083597649'>
                <div className="contact-detail">
                <img src={call_icon} alt=''/> <p>+91 7083597649</p>
              </div>
              </a>
              <a>
                <div className="contact-detail">
                <img src={location_icon} alt=''/> <p>Pune, India</p>
                </div>
              </a>
            </div>
          </div>
          <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="" >Your Name</label>
            <input type="text" placeholder='Enter your name' name='name'/>
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email'/>
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your Message'></textarea>
            <button type="submit" className="contact-submit">Submit now</button>
          </form>
        </div>
      </div>
    )
}

export default Contact