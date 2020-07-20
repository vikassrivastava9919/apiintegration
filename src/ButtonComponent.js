import React from "react";

const ButtonComponent = (props) => {
  return (
    <button onClick={props.onclick} className={props.btnClass}>
      {props.buttonText}
    </button>
  );
};

export default ButtonComponent;
