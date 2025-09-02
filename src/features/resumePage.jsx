import React from "react";


function ResumePage({
    personalData,
}
    

){
    return(
        <>
        <div className="resumePage">
        This will be our ResumePage form with shared props
        {personalData.name}
        {personalData.familyName}
        {personalData.dateOfBirth}
        {personalData.phoneNumber}    
        </div>
        </>
    )
}

export default ResumePage