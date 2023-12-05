import React from 'react';

const ConvertorTemp = () => {
  const celsiusTemperatures = [25, 30, 15, 10, 20];

  
  const convertCelsiusToFahrenheit = (tempCelsius) => {
    return (tempCelsius * 9/5) + 32;
  };

  const cardStyle = {
    //backgroundColor: 'lightgreen',
    border: '1px solid black',
    width: '200px',
    padding: '10px',
    borderRadius: '40px',
    position: 'absolute', 
    top: '35%',
    left: '10%', 
    transform: 'translate(-50%, -50%)',
    background: "linear-gradient(#9d00ff, #ff8400)" 
    
  };

  return (
    <div style={cardStyle}>
      {celsiusTemperatures.map((tempCelsius, index) => {
        const tempFahrenheit = convertCelsiusToFahrenheit(tempCelsius);
        return <p key={index}>{tempCelsius} grade Celsius = {tempFahrenheit.toFixed(2)} grade Fahrenheit</p>;
      })}
    </div>
  );
};

export default ConvertorTemp;
