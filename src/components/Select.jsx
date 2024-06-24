// client/src/components/Select.jsx

import React from "react";

const Select = ({ name, label, options, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name} value={value} onChange={onChange} className="form-control">
        <option value="">Выберите...</option>
        {options &&
          options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Select;
