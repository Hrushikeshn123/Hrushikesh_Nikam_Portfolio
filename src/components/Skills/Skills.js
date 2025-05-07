import React from 'react'
import './Skills.css'


import Services_Data from '../../assets/services_data'


const Skills = ()=>{
    return(
      <div id='skill_scroll' className='container'>
        
          <div className="title">Skills</div>
        
          <div className="skillscontainer">
            {
              Services_Data.map((skill)=>(
                <div className="Skill">
                  <div className="SkillTitle">{skill.title}</div>
                  <div className="SkillList">
                    {
                      skill.skills.map((item)=>(
                       <div className="SkillItem">
                        <img src={item.image}/>
                        {item.name}
                       </div> 
                      ))
                    }
                  </div>
                </div>
              ))
            }
          </div>
      </div>
      










        // <div id='services' className='services'>
        //   <div className="services-title">
        //     <h1>Skills</h1>
        //     {/* <img src={theme_pattern} alt=''/> */}
        //   </div>

        //   <div className="services-container">
        //    {Services_Data.map((skill,index)=>(
        //       <div key={index} className='services-format'>
        //       <h3>{skill.title}</h3>
        //       {
        //         skill.skills.map((item)=>(<>
        //           <img className='skill-images' src={item.image} alt=""/>
        //           <h3>{item.name}</h3>
        //           </>
        //            ))
        //       }
        //       <div className='services-readmore'>
        //         <p>Read More</p>
        //         <img src={arrow_icon} alt="" />
        //       </div>
        //     </div>
        //    )
            
        //    )} 
        //   </div>                  
        // </div>
    )
}

export default Skills