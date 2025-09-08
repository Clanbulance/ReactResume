import React from "react";

function Education(
    {education, changeEducation, addEducation, removeEducation}
){
    return ( 

        <div className="educationFeature">
            <h2>Education</h2>
            {education.map((edu, index) => (
                <div key={index} className="educationEntry">
                    <input
                        type="text"
                        placeholder="School Name"   
                        value={edu.schoolName}
                        onChange={(e) => changeEducation(index, "schoolName", e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Title of Study"   
                        value={edu.titleOfStudy}    
                        onChange={(e) => changeEducation(index, "titleOfStudy", e.target.value)}
                    />
                    <input
                        type="text" 
                        placeholder="Date of Study"
                        value={edu.dateOfStudy}
                        onChange={(e) => changeEducation(index, "dateOfStudy", e.target.value)}
                    />
                    <button onClick={() => removeEducation(index)}>Remove</button>
                </div>
            ))} 
            <button onClick={addEducation}>Add Education</button>
        </div>
        
    )
}

export default Education