import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const CustomPhoneInput = ({ setPhone }) => {
  return (
    <div className="phone flex flex-col justify-center items-start  w-full">
      <label htmlFor="phone" className=" font-poppins text-accent-purple">
        Phone*
      </label>
      <div className="input  w-full saol-display-regular bg-white flex justify-start items-center">
        <PhoneInput
          enableSearch={true}
          inputStyle={{
            backgroundColor: "transparent",
            border: "none",
            color: "black",
          }}
          dropdownStyle={{ border: "none", color: "black" }}
          buttonStyle={{
            backgroundColor: "white",
            border: "none",
          }}
          buttonClass="hover:bg-transparent"
          country={"ae"}
          inputProps={{
            name: "phoneNumber",
            required: "Enter a number we can reach you on",
            className:
              "form-control w-full lg:w-[24.405vw] outline-none bg-transparent border-b px-0 text-black border-zinc-100",
          }}
          onChange={(phone) => {
            setPhone(phone);
          }}
          // {...register("contact.phone", { required: "Enter a number we can reach you on" })}
          placeholder="+___-___-____"
        />
      </div>
    </div>
  );
};

export default CustomPhoneInput;
