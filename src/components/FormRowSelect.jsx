import React from "react";

function FormRowSelect({ labelText, name, value, handleChange, list }) {
  return (
    <div className="form-row">
      <label htmlFor="status" className="form-label">
        {labelText || name}
      </label>
      <select
        name={name}
        value={value}
        id={name}
        onChange={handleChange}
        className="form-select outline-[#a435f0]"
      >
        {list.map((itemValue, index) => {
          return (
            <option key={index} value={itemValue}>
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default FormRowSelect;
