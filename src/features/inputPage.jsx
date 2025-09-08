import React from "react";
import Education from "./questioneers/education";
import Personal from "./questioneers/personal";
import Skillset from "./questioneers/skillset";

function InputPage({
    QuestionTabs,
    ActiveTab,
    changeActiveTab,
    personalData,
    changePersonalData,
    SkillsetData,
    changeSkillsetData,
    education,
    changeEducation,
    addEducation,
    removeEducation
}){

    const renderQuestionList = () => {
    switch (ActiveTab) {
      case "personal":
        return <Personal personalData={personalData} changePersonalData={changePersonalData} />;
      case "skillset":
        return <Skillset SkillsetData={SkillsetData} changeSkillsetData={changeSkillsetData}/>;
      case "education":
        return <Education  education={education} changeEducation={changeEducation} addEducation={addEducation} removeEducation={removeEducation} />;
      default:
        return null;
    }
  };


    return (
        <div className="inputPage">
            <div className="mainBox">

                <div className="inputFeatures">
                    {QuestionTabs.map((tabs) => 
                        <div key={tabs.tab} className="FeatureItems">
                            <img src={tabs.icon} onClick={() => changeActiveTab(tabs.tab)}></img>
                            <a onClick={() => changeActiveTab(tabs.tab)}>{tabs.tab}</a>
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