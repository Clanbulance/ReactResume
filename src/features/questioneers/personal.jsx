import React from "react";

function    Personal(
    {formData,
    setFormData,
    ChangeFormData
    }
){

    return ( 
        <div className="questineerForm">
            <label htmlFor="NameInput">Name:</label>
            <input type="text" id="NameInput" name="name" value={formData.personal.name} onChange={(e) => ChangeFormData("personal", e)}/>

            <label htmlFor="FamilyInput">Family Name:</label>
            <input type="text" id="FamilyInput" name="familyName" value={formData.personal.familyName} onChange={(e) => ChangeFormData("personal", e)}/> 

            <label htmlFor="DateOfBirth">Date of Birth:</label>
            <input type="date" id="DateOfBirth" name="dateOfBirth" value={formData.personal.dateOfBirth} onChange={(e) => ChangeFormData("personal", e)}/>

            <label htmlFor="PhoneNumber">Phone Number:</label>
            <input type="number" id="PhoneNumber" name="phoneNumber" value={formData.personal.phoneNumber} onChange={(e) => ChangeFormData("personal", e)}/>

            <button type="submit">Submit</button>
            
        </div>
    )
}

export default Personal