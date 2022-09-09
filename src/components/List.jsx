import React from "react";
import reactStringReplace from "react-string-replace";
function List(props) {
  const content = props.characterName;
  const enteredLetters = props.enteredLetters;
  return (
    <li
      onClick={() => props.handleListClick(props.characterName)}
      className="listItem"
    >
      <img src={props.image} alt={props.species} />
      <p>
        {reactStringReplace(content, enteredLetters, (match, i) => (
          <span key={i} style={{ color: "red" }}>
            {match}
          </span>
        ))}
      </p>
    </li>
  );
}

export default List;
reactStringReplace("whats your name", "your", (match, i) => (
  <span>{match}</span>
));

// react string replace = https://github.com/iansinnott/react-string-replace
