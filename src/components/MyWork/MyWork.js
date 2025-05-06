import React from 'react'
import './MyWork.css'
//import theme_pattern from '../../assets/theme_pattern.svg' 
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
//import Project_management_web_app from '../../assets/Projects_Images/Project_management_web_app.jpeg'
const MyWork = () => {
    return (
        <div id='project_scroll' className='mywork'>
          <div className='mywork-title'>
            <h1>My latest work</h1>
            {/* <img src={theme_pattern} alt="" /> */}
          </div>
          <div className="mywork-container">
            {mywork_data.map((work, index)=>{
              return (
              <div className='project_item'>
              <img key={index} src={work.w_img} alt="" />
              <h3>{work.w_name}</h3>
              <p>{work.w_desc}</p>
              <div className="mywork_link">
                  <a href={work.w_link}>
                      <div className="mywork-showmore">
                            <p>GitHub Repo</p>
                            <img src={arrow_icon} alt=""/>
                      </div>
                  </a>
                  <a href={work.w_live}>
                      <div className="mywork-showmore">
                            <p>Live Link</p>
                            <img src={arrow_icon} alt=""/>
                      </div>
                  </a>
              </div>
                  
              </div> 
            )
            })}
            
          </div>
          
         
        </div>
    )
}

export default MyWork