import * as yup from 'yup';

export const passwordRules = '' ;

export const basicSchema = yup.object().shape({
  
    fullName: yup.string().ensure("please fullName is required").required(" please your full name is required"),

    email: yup.string().email("please enter a valid email").required(" your email is required"),
    
    password: yup.string().min(5).matches( passwordRules,  {message: "please create a stronger password"} ).required("your password is required"),
    
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "passwords must match").required("your confirm password is required"),
});