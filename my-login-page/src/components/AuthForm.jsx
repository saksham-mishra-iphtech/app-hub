import React, { useState } from "react";
import { InputField } from "./InputField";
import { Button } from "./Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const AuthForm = ({ onLogin }) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, seterrors] = useState({});
  const [showPassword, setshowPassword] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!name.trim()) {
      newErrors.name = "Required";
    }
    if (!email.trim()) {
      newErrors.email = "Required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!password.trim()) {
      newErrors.password = "Required";
    } else if (
      password.length < 8 ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      !/[\W_]/.test(password) ||
      !/[0-9]/.test(password)
    ) {
      newErrors.password =
        "Password must include at least 8 characters with one lowercase, uppercase, number, and special symbol";
    }
    if (!termsAccepted) {
      newErrors.terms = "Required";
    }
    seterrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      onLogin();
      console.log("Form submitted: ", { name, email, password });
    }
  };

  return (
    <div className="bg-white px-6 w-full max-w-[90%] sm:max-w-md mx-auto">
      <h2 className="text-center text-2xl font-bold text-black pb-9 mt-10">
        Login to Your Account
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mt-4 space-y-3 text-gray-700">
          {/* Name Input */}
          <div className="flex flex-col">
            <InputField
              label="Name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(event) => setname(event.target.value)}
            />
            <div className="min-h-[20px] text-sm text-red-500">
              {errors.name && errors.name}
            </div>
          </div>

          {/* Email Input */}
          <div className="flex flex-col">
            <InputField
              label="E-mail Address"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setemail(event.target.value)}
            />
            <div className="min-h-[20px] text-sm text-red-500">
              {errors.email && errors.email}
            </div>
          </div>

          {/* Password Input */}
          <div className="flex flex-col relative">
            <InputField
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setpassword(event.target.value)}
            />
            <button
              type="button"
              onClick={() => setshowPassword(!showPassword)}
              className="absolute right-3 top-13 transform -translate-y-1/2 text-gray-600"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
            <div className="min-h-[20px] text-sm text-red-500">
              {errors.password && errors.password}
            </div>
          </div>
        </div>

        {/* Terms & Conditions Checkbox */}
        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            id="terms"
            className="mr-2"
            checked={termsAccepted}
            onChange={(event) => setTermsAccepted(event.target.checked)}
          />
          <label htmlFor="terms" className="text-[7px] md:text-sm text-gray-600">
            By Logging in, I agree with{" "}
            <a href="#" className="text-blue-500">Terms & Conditions</a>
          </label>
        </div>
        <div className="min-h-[20px] text-sm text-red-500">
          {errors.terms && errors.terms}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex space-x-4">
          <Button text="Log in" isPrimary onClick={handleSubmit} />
          <Button text="Sign Up" />
        </div>
      </form>
    </div>
  );
};
