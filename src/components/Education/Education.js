import React from "react";
import Education_Data from "../../assets/education_data";
import './Education.css'

const Education = ()=>{
    return(
        <div id="education_scroll" className="myeducation">
          <div className="myeducation-title">
            <h1>Education</h1>
          </div>

          <div className="myeducation-container">
            {
              Education_Data.map((edc) =>{
                return(
                  <div className="education_item">
                    <h2>{edc.e_name}</h2>
                    <h3>{edc.e_place}</h3>
                    <p>{edc.e_percentage}</p>
                    <p>{edc.e_duration}</p>
                  </div>
                )
              })
            }
          </div>

        </div>
    )
}
export default Education