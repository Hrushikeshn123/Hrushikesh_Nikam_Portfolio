import React from 'react'
import Achievement_Data from '../../assets/achievement_data'
import './Achievements.css'
const Achievements = ()=>{
    return (
        <div id='achieve_scroll' className="myachieve">
            <div className="myachieve-title">
                <h1>Achievements</h1>
            </div>
            <div className="myachieve-container">
                {
                    Achievement_Data.map((achieve)=>{
                        return(
                      <a href={achieve.a_link}>    
                        <div className="achieve_item"> 
                            <img src={achieve.a_img}/>
                            {achieve.a_desc}
                        
                        </div>
                      </a>  
                        )
                    })
                }
            </div>
        </div>
        
    )

}

export default Achievements