import React from "react";

function Input(props) {
  return (
    <input
      onChange={(e) => {
        props.handleInputChange(e);
      }}
      type="text"
      placeholder="Type..."
      className="inputCharName"
      value={props.enteredLetters}
    />
  );
}

export default Input;
