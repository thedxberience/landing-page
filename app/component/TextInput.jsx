import React from "react";

const TextInput = ({
  label,
  register,
  name,
  placeholder,
  error,
  required = false,
  type = "text",
}) => {
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
        {...register(name, { required })}
        className="w-full bg-white py-1 px-2 border-border_primary  focus:outline-none focus:border-border_secondary border-b"
        placeholder={placeholder}
        aria-invalid={error ? "true" : "false"}
      />
      {error && (
        <p className="text-red-500 pt-2 text-xs">This field is required</p>
      )}
    </div>
  );
};

export default TextInput;
