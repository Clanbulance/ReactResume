import React from "react";
import Education from "./questioneers/education";
import Personal from "./questioneers/personal";
import Skillset from "./questioneers/skillset";

function InputPage({
    QuestionTabs,
    ActiveTab,
    changeActiveTab,
    formData,
    setFormData
}
    

){
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
                        {QuestionTabs.find(item => item.tab === ActiveTab)?.questionList}
                    </div>

            </div>
        </div>
   
    )
}

export default InputPage