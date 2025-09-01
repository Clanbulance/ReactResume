import React from "react";

function    Personal(
    {formData,
    setFormData
    }
){

    return ( 
        <div className="questineerForm">
            <label htmlFor="NameInput">Name:</label>
            <input type="text" id="NameInput" name="NameInput" value={formData.name} onChange={() => setFormData()}/>

            <label htmlFor="FamilyInput">Family Name:</label>
            <input type="text" id="FamilyInput" name="FamilyInput" value={formData.familyName}/> 

            <label htmlFor="DateOfBirth">Date of Birth:</label>
            <input type="date" id="DateOfBirth" name="DateOfBirth" value={formData.dateOfBirth}/>

            <label htmlFor="PhoneNumber">Phone Number:</label>
            <input type="number" id="PhoneNumber" name="PhoneNumber" value={formData.phoneNumber}/>

            <button type="submit">Submit</button>
            
        </div>
    )
}

export default Personal