import { useState } from "react";

const InputBox = (props) => {
  const [value, valueHandler] = useState("");

  const changeHandler = (e) => {
    valueHandler(e.target.value);
    props.getValue(value)
  };


  return (
    <input
      onChange={changeHandler}
      value={value}
      className={props.classes}
      placeholder={props.placeHolder}
    />
  );
};

export default InputBox;
