import React from "react";
import Education from "./questioneers/education";
import Personal from "./questioneers/personal";
import Skillset from "./questioneers/skillset";
import WorkExperience from "./questioneers/workExperience";

function InputPage({
    QuestionTabs,
    ActiveTab,
    changeActiveTab,
    personalData,
    changePersonalData,
    skillset,
    addSkill,
    changeSkill,
    removeSkill,
    education,
    changeEducation,
    addEducation,
    removeEducation,
    workExperience,
    changeWorkExperience,
    addWorkExperience,
    removeWorkExperience
}){

    const renderQuestionList = () => {
    switch (ActiveTab) {
      case "personal":
        return <Personal personalData={personalData} changePersonalData={changePersonalData} />;
      case "skillset":
        return <Skillset skillset={skillset} addSkill={addSkill} changeSkill={changeSkill} removeSkill={removeSkill} />;
      case "education":
        return <Education  education={education} changeEducation={changeEducation} addEducation={addEducation} removeEducation={removeEducation} />;
      case "experience":
        return <WorkExperience workExperience={workExperience} changeWorkExperience={changeWorkExperience} addWorkExperience={addWorkExperience} removeWorkExperience={removeWorkExperience} />;
      default:
        return null;
    }
  };


    return (
        <div className="inputPage">
            <div className="mainBox">

                <div className="inputFeatures">
                    {QuestionTabs.map((tabs) => 
                        <div key={tabs.tab} className={`FeatureItems ${ActiveTab === tabs.tab ? 'active' : ''}`} onClick={() => changeActiveTab(tabs.tab)}>
                            <span className="feature-icon">{tabs.icon}</span>
                            <a>{tabs.tab}</a>
                        </div>
                        )}
                </div>

                <div className="LoadedFeatures">
                        {renderQuestionList()}
                </div>
            </div>
        </div>
   
    )
}

export default InputPage