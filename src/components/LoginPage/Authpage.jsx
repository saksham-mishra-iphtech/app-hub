import React, { useState } from "react";
import { Logo } from "./Logo";
import { AuthForm } from "./AuthForm";
import SignUpForm from "./SignUpForm";


export const Authpage = () => {
  const [isLogin,setisLogin] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 md:p-4 ">
      <div className="flex flex-col md:flex-row bg-white w-full max-w-5xl overflow-hidden rounded-2xl shadow-2xl shadow-gray-900/90 ">
        {/* Left Section */}
        <div className="md:w-1/2 bg-gradient-to-b from-blue-900 to-blue-400 flex flex-col items-center justify-around md:pb-20 p-8 text-white">
          <div className="hidden md:block font-bold text-2xl md:text-3xl mb-4">
            Welcome to
          </div>
          <Logo />
          <p className="hidden md:block text-center mt-4 md:text-base">
            We specialize in creating excellent web and mobile applications that
            drive growth and innovation. From ideation to execution, our expert
            team delivers reflexive, high-performance solutions designed to meet
            your unique business necessities.
          </p>
        </div>

        {/* Right Section (Form) */}
        <div className="md:w-1/2 p-5 md:pl-5 flex flex-col justify-center">
        {isLogin ? (<AuthForm toggleform ={()=>setisLogin(false)}/>) : (<SignUpForm toggleform={() => setisLogin(true)} onSignupSuccess={() => setisLogin(true)} />
) } 
        </div>
      </div>
    </div>
  );
};
