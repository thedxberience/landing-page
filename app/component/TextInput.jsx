import React from "react";

const TextInput = ({ label, register, name, placeholder, type = "text" }) => {
  return (
    <div className="bg-transparent w-full">
      <label
        htmlFor="email"
        className="text-text_primary font-medium font-poppins text-sm"
      >
        {label}
      </label>
      <input
        type={type}
        id={label}
        name={name}
        className="w-full bg-white py-3 px-2 border-border_primary  focus:outline-none focus:border-border_secondary border-b"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
