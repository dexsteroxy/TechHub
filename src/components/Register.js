import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "../components/NavBar";
import { useFormik } from "formik";
import { basicSchema } from "../schema/yup";

const onSubmit = () => {
  console.log("submitted");
};

function Register() {
  const { values, handleBlur, errors, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },

      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <section>
      <NavBar />
      <div>
        <div className=" bg-kc md:justify-center flex flex-col md:flex-row md:items-center md:mx-auto space-y-0 md:space-y-0 space-x-3">
          {/* left items */}
          <div className=" mt-[100px] md:container px-6  flex flex-col  md:w-1/2">
            <h4 className=" font-bold text-[30px] mt-12">Register</h4>
            <form onSubmit={handleSubmit} className="">
              <p className=" font-semibold text-[16px] mt-6">FULL NAME</p>
              <input
                type="text"
                id="fullName"
                autoFocus
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`rounded-sm text-[15px] mt-3 md:w-[400px] w-[260px] py-2 pl-2 outline-none border border-cat  ${
                  errors.fullName && touched.fullName
                    ? "border-2 border-red-700"
                    : ""
                } `}
                placeholder="Enter your full name"
              ></input>
              {errors.fullName && touched.fullName && (
                <p className=" text-[14px] text-red-500">{errors.fullName}</p>
              )}

              <p className=" font-semibold text-[16px] mt-4">EMAIL</p>
              <input
                type="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={` rounded-sm text-[15px] mt-3 md:w-[400px] w-[260px] py-2 pl-2 outline-none border border-cat ${
                  errors.email && touched.email ? "border-2 border-red-700" : ""
                }`}
                placeholder="Enter your email"
              ></input>
              {errors.email && touched.email && (
                <p className=" text-[14px] text-red-500">{errors.email}</p>
              )}

              <p className=" font-semibold text-[16px] mt-4">PASSWORD</p>

              <input
                type="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={` rounded-sm text-[15px] mt-3 md:w-[400px] w-[260px] py-2 pl-2 outline-none border border-cat ${
                  errors.password && touched.password
                    ? "border-2 border-red-700"
                    : ""
                }`}
                placeholder="Create a password"
              ></input>
              {errors.password && touched.password && (
                <p className=" text-[14px] text-red-500">{errors.password}</p>
              )}
              <p className=" text-[12px] opacity-50 mt-1">
                Minimum of 5 characters
              </p>

              <p className=" font-semibold text-[16px] mt-4">
                CONFIRM PASSWORD
              </p>

              <input
                type="password"
                id="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Repeat password"
                className={`rounded-sm text-[15px] mt-3 md:w-[400px] w-[260px] py-2 pl-2 outline-none border border-cat ${
                  errors.confirmPassword && touched.confirmPassword
                    ? "border-2 border-red-700"
                    : ""
                }`}
              ></input>
              {errors.confirmPassword && touched.confirmPassword && (
                <p className=" text-[14px] text-red-500">
                  {errors.confirmPassword}
                </p>
              )}
              <p className=" text-[12px] opacity-50 mt-1">
                Minimum of 5 characters
              </p>
            </form>
            <NavLink
              className="btn relative inline-flex md:w-[400px] w-[260px] mt-3 px-6 py-2 items-center justify-start overflow-hidden transition-all bg-car rounded hover:bg-car group"
              to="/register/welcome"
            >
              {/* purple box */}
              <span className="w-0 h-0 rounded bg-blue-900 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
              <span className="w-full text-white transition-colors duration-300 ease-in-out text-center group-hover:text-white z-10">
                Register
              </span>
            </NavLink>
            <p className=" mb-2 mt-4 lg:ml-20 text-[15px] font-medium">
              Already have an account?
              <NavLink
                className=" font-medium pl-1 text-car hover:text-blue-900  transition-all duration-300"
                style={({ isActive }) => {
                  return isActive ? { color: "white" } : {};
                }}
                to="/login"
              >
                Log in
              </NavLink>
            </p>
            <p className=" text-[13px] md:mb-16 mb-4">
              By registering, you agree to Techie hub{" "}
              <span className=" text-car">Terms</span> of Use and{" "}
              <span className=" text-car">Privacy Policy</span>
            </p>
          </div>

          {/* right item */}
          <div className=" flex flex-col px-4 md:px-0">
            <button
              type="password"
              className=" md:mt-8 hover:bg-gray-300 transition-all duration-300 mt-3 rounded-sm font-bold md:text-center bg-light text-[18px] md:w-[400px] w-[260px] py-2 pl-2 outline-none border border-cat"
            >
              Continue with Google
            </button>

            <button
              type="password"
              className=" rounded-sm hover:bg-gray-300 transition-all duration-300 mt-12 font-bold md:text-center bg-light text-[18px] md:w-[400px] w-[260px] py-2 pl-2 outline-none border border-cat"
            >
              Continue with Facebook
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Register;
