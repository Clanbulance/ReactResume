import React from "react";

function Education({ education, changeEducation, addEducation, removeEducation }) {
  return (
    <div className="questineerForm">
      <button type="button" className="add-btn" onClick={addEducation}>
        + Add Education
      </button>

      {education.map((edu, index) => (
        <div key={index} className="form-group-container">
          <label htmlFor={`schoolName-${index}`}>School Name:</label>
          <input
            type="text"
            id={`schoolName-${index}`}
            name="schoolName"
            value={edu.schoolName}
            onChange={(e) => changeEducation(index, "schoolName", e.target.value)}
          />

          <label htmlFor={`titleOfStudy-${index}`}>Title of Study:</label>
          <input
            type="text"
            id={`titleOfStudy-${index}`}
            name="titleOfStudy"
            value={edu.titleOfStudy}
            onChange={(e) => changeEducation(index, "titleOfStudy", e.target.value)}
          />

          <label htmlFor={`dateOfStudy-${index}`}>Date of Study:</label>
          <input
            type="date"
            id={`dateOfStudy-${index}`}
            name="dateOfStudy"
            value={edu.dateOfStudy}
            onChange={(e) => changeEducation(index, "dateOfStudy", e.target.value)}
          />

          {education.length > 1 && (
            <button type="button" className="remove-btn" onClick={() => removeEducation(index)}>
              X
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Education;