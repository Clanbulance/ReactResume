import React from "react";


function ResumePage({
    formData
}
    

){
    return(
        <>
        <div className="resumePage">
        This will be our ResumePage form with shared props {formData.personal.name}
        </div>
        </>
    )
}

export default ResumePage