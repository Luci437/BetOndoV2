import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { AiFillCloseCircle } from "react-icons/ai";

function InputBox(props) {
  const { titleName, type, maxLength } = props;
  const unique_id = uuid();

  const [inputValue, setInputValue] = useState('');

  return (
    <div className="site-input-box">
      <input
        className="site-input-box-input"
        type={type ? type : "text"}
        id={unique_id}
        required
        value={inputValue}
        maxLength={maxLength ? maxLength : 100}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <label className="site-input-box-input-label" htmlFor={unique_id}>
        {titleName}
      </label>
      {inputValue?.length > 0 && (
        <AiFillCloseCircle
          onClick={() => setInputValue("")}
          className="site-input-box-input-close-button"
        />
      )}
    </div>
  );
}

export default InputBox;
