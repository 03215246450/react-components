import React, { useState } from 'react';

let SelectComponent = () => {
  let options = ['Option 1', 'Option 2', 'Option 3'];
  let [selectedOption, setSelectedOption] = useState('');
  let handleSelectChange = (event) => {
    setSelectedOption(event.value);
  };
  

//   ===============event.target.value============
//   So, event.target.value effectively gets the value that the user has selected from the dropdown.
//  It's a way to extract the selected value from the <select> element when the onChange event occurs.

  return (
    <div>
      <h2>Select Component</h2>
      <select value={selectedOption} onChange={handleSelectChange}>
  <option>Select an option</option>
  {options.map((option, index) => (
    <option  key={index} value={option}>
      {option}</option>
  ))}
</select>

    </div>
  );
};

export default SelectComponent;
