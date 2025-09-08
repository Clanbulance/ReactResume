import React from "react";


function ResumePage({
    personalData,
    SkillsetData,
    education

}
    

){
    return(
        <>
        <div className="resumePage">
            <div className="PersonalData"><h2>Personal Data</h2>
            <div>{personalData.name}</div>
            <div>{personalData.familyName}</div>
            <div>{personalData.dateOfBirth}</div>
            <div>{personalData.phoneNumber}</div>
            </div>
            <div className="skillsetData"><h2>Skill Levels</h2>
            <div>Stupidity:     {SkillsetData.Stupidity_lvl}</div>
            <div>Javascript:    {SkillsetData.Javascript}</div>
            <div>HTML:  {SkillsetData.html}</div>
            <div>CSS: {SkillsetData.css}</div>
            </div>
            <div className="educationData"><h2>Education</h2>
                <table className="educationTable"> 
                    <tr>
                        <th>School</th>
                        <th>Study</th>
                        <th>Time</th>
                    </tr>
                    {education.map((edu,index) => (
                        <tr key={index}>
                            <td>{edu.schoolName}</td>
                            <td>{edu.titleOfStudy}</td>
                            <td>{edu.dateOfStudy}</td>
                        </tr>
                    ))}
                    
                </table>
 
 
            </div>
        




        </div> 
        </>
    )
}

export default ResumePage