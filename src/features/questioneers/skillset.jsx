import React from "react";

function Skillset(
    {SkillsetData, changeSkillsetData}
){
    return ( 
        <div className="questineerForm">
             <label htmlFor="Stupidity_lvl">How dumb are you:</label>
             <input
               type="text"
               id="Stupidity_lvl"
               name="Stupidity_lvl"
               value={SkillsetData.stupidity_lvl}
               onChange={(e) => changeSkillsetData("Stupidity_lvl", e.target.value)}
             />

             <label htmlFor="Javascript">Javascript knowledge:</label>
             <input
               type="range"
               min="0"
               max="10"
               id="Javascript"
               name="Javascript"
               value={SkillsetData.Javascript}
               onChange={(e) => changeSkillsetData("Javascript", e.target.value)}
             /> 

             <label htmlFor="html">HTML Knowledge</label>
             <input
               type="range"
                min="0"
               max="10"
               id="html"
               name="html"
               value={SkillsetData.html}
               onChange={(e) => changeSkillsetData("html", e.target.value)}
             />

             <label htmlFor="css">CSS knowledge</label>
             <input
               type="range"
               min="0"
               max="10"
               id="css"
               name="css"
               value={SkillsetData.css}
               onChange={(e) => changeSkillsetData("css", e.target.value)}
             />

           </div>
           )
}

export default Skillset