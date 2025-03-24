import React, { useState } from "react";
import { InputField } from "./InputField";
import { Button } from "./Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PopupModal from "../PopUpModal";
import { useDispatch, useSelector } from "react-redux";
import { login2 } from "../../features/login/LoginSlice";

export const AuthForm = ({ toggleform }) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, seterrors] = useState({});
  const [showPassword, setshowPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");


  const dispatch = useDispatch();
  const currentUser = useSelector((state)=>state.login.currentUser);

  const navigate = useNavigate();

  const showModal = (message) => {
    setModalMessage(message);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Invalid Email";
    }
    if (!password.trim()) {
      newErrors.password = "Required";
    }
    if(!termsAccepted){
      newErrors.termsAccepted = "Required"
    }

    if (Object.keys(newErrors).length > 0) {
      seterrors(newErrors);
      return;
    }

    dispatch(login2({ email, password }));
    if(currentUser){
      navigate("/dashboard");
    }
    else{
      showModal("Invalid Credentials");
    }

    // const users = JSON.parse(localStorage.getItem("users")) || [];
    // console.log(users)
    // const foundUser = users.find(user => user.email === email);
  
    // if (!foundUser) {
    //   showModal("Invalid Credentials");
    //   return;
    // }
    // if (foundUser.password !== password) {
    //   showModal("Incorrect password. Please try again.");
    //   return;
    // }
    // navigate("/dashboard");
  };
  

  return (
    <div className="bg-white px-6 w-full max-w-[90%] sm:max-w-md mx-auto">
      <h2 className="text-center text-2xl font-bold text-black pb-9 mt-10">
        Login to Your Account
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mt-4 mb-6 space-y-7 text-gray-700">
          {/* Name Input */}
          {/* <div className="flex flex-col">
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
          </div> */}

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
          <label htmlFor="terms" className="text-[8px] md:text-sm text-gray-600">
            By Logging in, I agree with{" "}
            <a href="#" className="text-blue-500">Terms & Conditions</a>
          </label>
        </div>
        <div className="min-h-[20px] text-sm text-red-500">
          {errors.termsAccepted}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex md:gap-5 mb-25 ">
          <Button text="Login" isPrimary type="submit" />
          <Button text="Sign Up" onclick={toggleform} />
        </div>
      </form>

      {/* Popup Modal */}
      {isModalOpen && <PopupModal message={modalMessage} onClose={closeModal} />}
    </div>
  );
};
