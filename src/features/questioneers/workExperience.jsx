import React from "react";

function WorkExperience({ workExperience, changeWorkExperience, addWorkExperience, removeWorkExperience }) {
  return (
    <div className="questineerForm">
      <button type="button" className="add-btn" onClick={addWorkExperience}>
        + Add Experience
      </button>

      {workExperience.map((exp, index) => (
        <div key={index} className="form-group-container">
          <label htmlFor={`companyName-${index}`}>Company Name:</label>
          <input
            type="text"
            id={`companyName-${index}`}
            name="companyName"
            value={exp.companyName}
            onChange={(e) => changeWorkExperience(index, "companyName", e.target.value)}
          />

          <label htmlFor={`jobTitle-${index}`}>Job Title:</label>
          <input
            type="text"
            id={`jobTitle-${index}`}
            name="jobTitle"
            value={exp.jobTitle}
            onChange={(e) => changeWorkExperience(index, "jobTitle", e.target.value)}
          />

          <label htmlFor={`startDate-${index}`}>Start Date:</label>
          <input
            type="date"
            id={`startDate-${index}`}
            name="startDate"
            value={exp.startDate}
            onChange={(e) => changeWorkExperience(index, "startDate", e.target.value)}
          />

          <label htmlFor={`endDate-${index}`}>End Date:</label>
          <input
            type="date"
            id={`endDate-${index}`}
            name="endDate"
            value={exp.endDate}
            onChange={(e) => changeWorkExperience(index, "endDate", e.target.value)}
          />

          {workExperience.length > 1 && (
            <button type="button" className="remove-btn" onClick={() => removeWorkExperience(index)}>
              X
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default WorkExperience;