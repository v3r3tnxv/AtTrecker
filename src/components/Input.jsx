import React from "react";

function Input({ type, id, value, onChange, label }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} value={value} onChange={onChange} required />
    </div>
  );
}

export default Input;
