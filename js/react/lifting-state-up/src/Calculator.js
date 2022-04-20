import React, { useState } from 'react'
import TemperatureInput from './TemperatureInput'

const Calculator = () => {
  const [grade, setGrade] = useState(70)

  return (
    <div>
      <TemperatureInput grade={grade} setGrade={setGrade} scale="number" />
      <TemperatureInput grade={grade} setGrade={setGrade} scale="letter" />
    </div>
  );
  
}



export default Calculator;
