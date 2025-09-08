import React from "react";

const skillLevels = ["Beginner", "Intermediate", "Advanced", "Expert"];

function Skillset({ skillset, addSkill, changeSkill, removeSkill }) {
  return (
    <div className="questineerForm">
      <button type="button" className="add-btn" onClick={addSkill}>
        + Add Skill
      </button>

      {skillset.map((skill, index) => (
        <div key={index} className="form-group-container">
          <label htmlFor={`skillName-${index}`}>Skill Name:</label>
          <input
            type="text"
            id={`skillName-${index}`}
            name="name"
            placeholder="e.g., React"
            value={skill.name}
            onChange={(e) => changeSkill(index, "name", e.target.value)}
          />

          <label>Level:</label>
          <div className="radio-group">
            {skillLevels.map((level) => (
              <label key={level} className="radio-label">
                <input
                  type="radio"
                  name={`skillLevel-${index}`}
                  value={level}
                  checked={skill.level === level}
                  onChange={(e) => changeSkill(index, "level", e.target.value)}
                />
                {level}
              </label>
            ))}
          </div>

          {skillset.length > 1 && (
            <button type="button" className="remove-btn" onClick={() => removeSkill(index)}>
              X
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Skillset;