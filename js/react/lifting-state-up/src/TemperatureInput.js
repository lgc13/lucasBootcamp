import React from "react";
  
const TemperatureInput = ({ grade, setGrade, scale }) => {
    
    console.log("grade: ", grade)

    const handleChange = (e) => {
        setGrade(e.target.value)
    }

    const getGradeLetter = () => {
        if (grade >= 90 && grade <= 100 && scale === "letter") {
            return "A"
        } else if (grade >= 80 && grade <= 89 && scale === "letter") {
            return "B"
        } else if (grade >= 70 && grade <= 79 && scale === "letter") {
            return "C"
        } else if (grade >= 60 && grade <= 69 && scale === "letter") {
            return "D"
        } else if (grade <= 59 && scale === "letter") {
            return "F"
        } else if (grade >= 101 && scale === "letter") {
            return "WAY TOO SMART"
        } else {
            return grade
        }
    }
    
    return (
        <fieldset>
            <legend>Your {scale} grade is:</legend>
            <input 
                value={getGradeLetter()}
                onChange={handleChange} 
            />
        </fieldset>
    );
    
}

export default TemperatureInput