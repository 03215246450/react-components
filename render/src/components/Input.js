import React, { useState } from "react";

let InputComponent = () => {
  let [inputValue, setInputValue] = useState("");

let userValue = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h2>Input Component</h2>
      <input
        type="text"
        value={inputValue}
        onChange={userValue}
        placeholder="Type something..."
      />
    </div>
  );
};

export default InputComponent;



