import { useState } from 'react';
import './App.css';
import InputPage from './features/inputPage';
import ResumePage from './features/resumePage';

function App() {
  /* PERSONAL DATA */
  const [personalData, setPersonalData] = useState({
    name: "",
    familyName: "",
    dateOfBirth: "",
    phoneNumber: ""
  });

  function changePersonalData(field, newValue) {
    setPersonalData(prevData => ({
      ...prevData, [field]: newValue
    }));
  }

  /* SKILLSET DATA - NEW DYNAMIC STRUCTURE */
  const [skillset, setSkillset] = useState([
    { name: "JavaScript", level: "Advanced" }
  ]);

  function addSkill() {
    setSkillset(prev => [{ name: "", level: "Beginner" }, ...prev]);
  }

  function changeSkill(index, field, value) {
    const newSkillset = skillset.map((skill, i) => {
      if (i === index) {
        return { ...skill, [field]: value };
      }
      return skill;
    });
    setSkillset(newSkillset);
  }

  function removeSkill(index) {
    if (skillset.length > 1) {
      setSkillset(prev => prev.filter((_, i) => i !== index));
    }
  }

  /* EDUCATION DATA */
  const [education, setEducation] = useState([
    {
      schoolName: "",
      titleOfStudy: "",
      dateOfStudy: ""
    }
  ]);

  function addEducation() {
    setEducation(prevEducation => ([
      ...prevEducation,
      {
        schoolName: "",
        titleOfStudy: "",
        dateOfStudy: ""
      }
    ]));
  }

  function changeEducation(index, field, newValue) {
    const updatedEducation = education.map((edu, i) => {
      if (i === index) {
        return { ...edu, [field]: newValue };
      }
      return edu;
    });
    setEducation(updatedEducation);
  }

  function removeEducation(index) {
    // Prevent removing the last item
    if (education.length > 1) {
      setEducation(prevEducation => prevEducation.filter((_, i) => i !== index));
    }
  }

  /* WORK EXPERIENCE DATA */
  const [workExperience, setWorkExperience] = useState([
    {
      companyName: "",
      jobTitle: "",
      startDate: "",
      endDate: ""
    }
  ]);

  function addWorkExperience() {
    setWorkExperience(prevExperience => ([
      ...prevExperience,
      {
        companyName: "",
        jobTitle: "",
        startDate: "",
        endDate: ""
      }
    ]));
  }

  function changeWorkExperience(index, field, newValue) {
    const newWorkExperience = workExperience.map((exp, i) => {
        if (i === index) {
            return { ...exp, [field]: newValue };
        }
        return exp;
    });
    setWorkExperience(newWorkExperience);
  }

  function removeWorkExperience(index) {
    // Prevent removing the last item
    if (workExperience.length > 1) {
      setWorkExperience(prevExperience => prevExperience.filter((_, i) => i !== index));
    }
  }

  /* TAB MANAGEMENT */
  const [ActiveTab, setActiveTab] = useState('personal');
  const [QuestionTabs] = useState([
    { tab: "personal", icon: "👤" },
    { tab: "skillset", icon: "⭐" },
    { tab: "education", icon: "🎓" },
    { tab: "experience", icon: "💼" }
  ]);

  /* AI STYLE TOGGLE - Now with multiple themes! */
  const themes = ['theme-corporate', 'theme-creative', 'theme-minimalist'];
  const [activeTheme, setActiveTheme] = useState('default');

  const changeTheme = () => {
    if (activeTheme === 'default') {
      // Pick a random theme from the list
      const randomTheme = themes[Math.floor(Math.random() * themes.length)];
      setActiveTheme(randomTheme);
    } else {
      // Revert to default
      setActiveTheme('default');
    }
  };

  function changeActiveTab(newActive) {
    setActiveTab(newActive);
  }

  return (
    <div className="page-wrapper">
      <header className="top-toolbar">
        <button type="button" className="ai-style-btn" onClick={changeTheme}>
          {activeTheme === 'default' ? '✨ AI-ify Resume Style' : '🪄 Revert to Original Style'}
        </button>
      </header>

      <div className="app-container">
        <InputPage
          QuestionTabs={QuestionTabs}
          ActiveTab={ActiveTab}
          changeActiveTab={changeActiveTab}
          personalData={personalData}
          changePersonalData={changePersonalData}
          skillset={skillset}
          addSkill={addSkill}
          changeSkill={changeSkill}
          removeSkill={removeSkill}
          education={education}
          changeEducation={changeEducation}
          addEducation={addEducation}
          removeEducation={removeEducation}
          workExperience={workExperience}
          changeWorkExperience={changeWorkExperience}
          addWorkExperience={addWorkExperience}
          removeWorkExperience={removeWorkExperience}
        />
        <ResumePage
          personalData={personalData}
          skillset={skillset}
          education={education}
          workExperience={workExperience}
          activeTheme={activeTheme}
        />
      </div>
    </div>
  );
}

export default App;


