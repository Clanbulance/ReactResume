import React from "react";
import App from "../../App";

function Personal({personalData, changePersonalData}){


return ( 
    <div className="questineerForm">
      <label htmlFor="NameInput">Name:</label>
      <input
        type="text"
        id="NameInput"
        name="name"
        value={personalData.name}
        onChange={(e) => changePersonalData("name", e.target.value)}
      />

      <label htmlFor="FamilyInput">Family Name:</label>
      <input
        type="text"
        id="FamilyInput"
        name="familyName"
        value={personalData.familyName}
        onChange={(e) => changePersonalData("familyName", e.target.value)}
      /> 

      <label htmlFor="DateOfBirth">Date of Birth:</label>
      <input
        type="date"
        id="DateOfBirth"
        name="dateOfBirth"
        value={personalData.dateOfBirth}
        onChange={(e) => changePersonalData("dateOfBirth", e.target.value)}
      />

      <label htmlFor="PhoneNumber">Phone Number:</label>
      <input
        type="number"
        id="PhoneNumber"
        name="phoneNumber"
        value={personalData.phoneNumber}
        onChange={(e) => changePersonalData("phoneNumber", e.target.value)}
      />
    </div>
    )
}

export default Personal