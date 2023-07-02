import React from "react";
import { NavLink } from "react-router-dom";

import Footer from "./Footer";
import NavBar from "../components/NavBar";
import { useFormik } from "formik";
import { basicSchema } from "../schema/yup";

const onSubmit = () => {
  console.log("submitted");
};
function Login() {
  const { values, handleBlur, errors, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <section className="">
      <NavBar />
      <div className=" bg-kc md:justify-center flex flex-col md:flex-row md:items-center md:mx-auto space-y-0 md:space-y-0 space-x-3">
        {/* left items */}
        <div className=" mt-[100px] container px-6  flex flex-col  md:w-1/2">
          <h4 className=" font-bold text-[30px] mt-12">Welcome back</h4>

          <form onSubmit={handleSubmit}>
            <p className=" font-semibold text-[16px] mt-6">EMAIL</p>
            <input
              value={values.email}
              onChange={handleChange}
              type="email"
              id="email"
              onBlur={handleBlur}
              className={` rounded-sm text-[13px] mt-3 md:w-[300px] w-[260px] py-2 pl-2 outline-none border border-cat ${
                errors.email && touched.email ? "border-2 border-red-700" : ""
              }`}
              placeholder="Enter your registered email"
            ></input>

            {errors.email && touched.email && (
              <p className=" text-[14px] text-red-500 ">{errors.email}</p>
            )}

            <p className=" font-semibold text-[16px] mt-6">PASSWORD</p>
            <input
              value={values.password}
              onChange={handleChange}
              type="password"
              id="password"
              onBlur={handleBlur}
              className={` rounded-sm text-[13px] mt-3 md:w-[300px] w-[260px] py-2 pl-2 outline-none border border-cat ${
                errors.password && touched.password
                  ? "border-2 border-red-700"
                  : ""
              }`}
              placeholder="Enter your password"
            ></input>

            {errors.password && touched.password && (
              <p className=" text-[14px] text-red-500">{errors.password}</p>
            )}
          </form>
          <NavLink to="/" className=" text-[14px] text-car mt-1 opacity-50">
            Forgot Password?
          </NavLink>

          <NavLink
              className="btn relative inline-flex md:w-[300px] w-[260px] mt-3 px-6 py-2 items-center justify-start overflow-hidden transition-all bg-car rounded hover:bg-car group"
              to="/2"
            >
              {/* purple box */}
              <span className="w-0 h-0 rounded bg-blue-900 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
              <span className="w-full text-white transition-colors duration-300 ease-in-out text-center group-hover:text-white z-10">
                Login
              </span>
            </NavLink>

          <p className=" mb-6 mt-4 text-[15px] font-medium">
            Don’t have an account?{" "}
            <NavLink
              className=" font-medium text-car hover:text-blue-900  transition-all duration-300"
              style={({ isActive }) => {
                return isActive ? { color: "white" } : {};
              }}
              to="/register"
            >
              Register
            </NavLink>
          </p>
        </div>

        {/* right item */}
        <div className=" flex flex-col px-3 md:px-0">
          <button
            type="password"
            className=" md:mt-3 hover:bg-gray-300 transition-all duration-300 mt-3 rounded-sm font-bold text-center bg-light text-[18px] md:w-[300px] w-[260px] py-2 pl-2 outline-none border border-cat"
          >
            Continue with Google
          </button>

          <button
            type="password"
            className=" rounded-sm hover:bg-gray-300 transition-all duration-300 mt-2 font-bold text-center bg-light text-[18px] md:w-[300px] w-[260px] py-2 pl-2 outline-none border border-cat"
          >
            Continue with Apple
          </button>

          <button
            type="password"
            className=" rounded-sm hover:bg-gray-300 transition-all duration-300 mt-2 font-bold text-center bg-light text-[18px] md:w-[300px] w-[260px] py-2 pl-2 outline-none border border-cat"
          >
            Continue with Facebook
          </button>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </section>
  );
}

export default Login;
