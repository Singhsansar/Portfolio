import { useState } from "react";

const InputBox = ({
  name,
  type,
  id,
  value,
  placeholder,
  icon,
  disable = false,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="relative w-full mb-4 z-10 bg-white">
      <input
        name={name}
        type={
          type === "password" ? (passwordVisible ? "text" : "password") : type
        }
        placeholder={placeholder ? placeholder : name}
        defaultValue={value}
        id={id}
        disabled={disable}
        className={`input-box  pl-12 ${
          name === "fullname" ? "capitalize" : ""
        }`}
      />
      <i
        className={`fi ${icon} absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500`}
      ></i>
      {type === "password" && (
        <i
          className={`fi fi-rr-eye${
            passwordVisible ? "" : "-crossed"
          } absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500`}
          onClick={() => setPasswordVisible((prev) => !prev)}
        ></i>
      )}
    </div>
  );
};

export default InputBox;
