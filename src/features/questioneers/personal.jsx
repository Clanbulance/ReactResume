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
            <input type="text" id="NameInput" name="NameInput" value={formData.name} onChange={() => ChangeFormData()}/>

            <label htmlFor="FamilyInput">Family Name:</label>
            <input type="text" id="FamilyInput" name="FamilyInput" value={formData.familyName} onChange={() => ChangeFormData()}/> 

            <label htmlFor="DateOfBirth">Date of Birth:</label>
            <input type="date" id="DateOfBirth" name="DateOfBirth" value={formData.dateOfBirth} onChange={() => ChangeFormData()}/>

            <label htmlFor="PhoneNumber">Phone Number:</label>
            <input type="number" id="PhoneNumber" name="PhoneNumber" value={formData.phoneNumber} onChange={() => ChangeFormData()}/>

            <button type="submit">Submit</button>
            
        </div>
    )
}

export default Personal