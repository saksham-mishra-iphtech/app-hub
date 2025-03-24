import React from "react";
import { useState } from "react";
import { InputField } from "./InputField";
import { Button } from "./Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../../features/login/LoginSlice";

const SignUpForm = ({ toggleform, onSignupSuccess }) => {


  const dispatch = useDispatch();
  
  const navigate = useNavigate();
  const [showPassword, setshowPassword] = useState(false);
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      dob: "",
      gender: "",
      termsAccepted: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required").max(20, " "),
      email: Yup.string().email("Invalid Email").required("Required"),
      password: Yup.string()
        .matches(
          passwordRegex,
          "Password must include at least 8 characters with one lowercase, uppercase, number, and special symbol"
        )
        .required("Required"),
      dob: Yup.date()
        .max(new Date(), "DOB can not be in future")
        .max(
          new Date(new Date().setFullYear(new Date().getFullYear() - 18)),
          "Age must be atleast 18 year old"
        )
        .required("Required"),
      gender: Yup.string()
        .oneOf(["male", "female", "other"], "Invalid gender")
        .required("Required"),
      termsAccepted: Yup.boolean()
        .oneOf([true], "Required")
        .required("Required"),
    }),
    onSubmit: (values) => {

      const newUser ={ name, email, password };
      dispatch(signup(values));

      // const existingUser = JSON.parse(localStorage.getItem("users")) || [];
      // if (existingUser && existingUser.email === values.email) {
      //   alert("user already exists you can login");
      //   return;
      // }
      // existingUser.push(values);
      // localStorage.setItem("users", JSON.stringify(existingUser));
      // // alert("signup Successfully , you can Log in now")
      onSignupSuccess();
      navigate("/dashboard");
    },
  });

  return (
    <div className="bg-white px-6 w-full max-w-[90%] sm:max-w-md mx-auto">
      <h2 className="text-center text-2xl font-bold text-black pb-9 mt-10">
        Create Your Account
      </h2>
      <form onSubmit={formik.handleSubmit}>
        <div className=" text-gray-700">
          {/* Name Input */}
          <div className="flex flex-col">
            <InputField
              label="Name"
              name="name"
              type="text"
              placeholder="Enter your name"
              value={formik.values.name}
              onChange={(e) => {
                if (e.target.value.length <= 20) {
                  formik.handleChange(e);
                }
              }}
              onBlur={formik.handleBlur}
            />
            <div className="min-h-[20px] text-sm text-red-500">
              {formik.touched.name && formik.errors.name && (
                <p>{formik.errors.name}</p>
              )}
            </div>
          </div>

          {/* Email Input */}
          <div className="flex flex-col">
            <InputField
              label="E-mail Address"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="min-h-[20px] text-sm text-red-500">
              {formik.touched.email && formik.errors.email && (
                <p>{formik.errors.email}</p>
              )}
            </div>
          </div>

          {/* Password Input */}
          <div className="flex flex-col relative">
            <InputField
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <button
              type="button"
              onClick={() => setshowPassword(!showPassword)}
              className="absolute right-3 top-13 transform -translate-y-1/2 text-gray-600"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
            <div className="min-h-[20px] text-sm text-red-500">
              {formik.touched.password && formik.errors.password && (
                <p>{formik.errors.password}</p>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          {/* dob input feild */}
          <InputField
            type="date"
            name="dob"
            value={formik.values.dob}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full p-2 border border-gray-300 rounded-md cursor-pointer"
            onFocus={(e) => e.target.showPicker()}  
          />
          <div className="min-h-[20px] text-sm text-red-500">
            {formik.touched.dob && formik.errors.dob && (
              <p>{formik.errors.dob}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-1" htmlFor="gender">
            Gender
          </label>
          <select
            id="Gender"
            name="gender"
            value={formik.values.gender}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="bordor border-b-2 border-blue-500 rounded-md focus:outline-non focus:ring-2 focus:ring-blue-400 placeholder-gray-500 placeholder:text-[14px]"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <div className="min-h-[20px] text-sm text-red-500">
            {formik.touched.gender && formik.errors.gender && (
              <p>{formik.errors.gender}</p>
            )}
          </div>
        </div>

        {/* Terms & Conditions Checkbox */}
        <div className="flex items-center mt-1">
          <input
            type="checkbox"
            name="termsAccepted"
            id="terms"
            className="mr-2"
            checked={formik.values.termsAccepted}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label
            htmlFor="terms"
            className="text-[7px] md:text-sm text-gray-600"
          >
            By Signing Up, I agree with{" "}
            <a href="#" className="text-blue-500">
              Terms & Conditions
            </a>
          </label>
        </div>
        <div className="min-h-[20px] text-sm text-red-500">
          {formik.touched.termsAccepted && formik.errors.termsAccepted && (
            <p>{formik.errors.termsAccepted}</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex md:gap-5">
          <Button
            text="Create"
            isPrimary
            onClick={formik.handleSubmit}
            type="submit"
          />
          <Button
            text="Login"
            type="button"
            isPrimary
            onclick={toggleform}
      
          />
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
