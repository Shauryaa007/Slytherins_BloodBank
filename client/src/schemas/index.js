import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const loginSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please enter a stronger password" })
    .required("Required"),
});

export const registerSchema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  phone: yup
    .number()
    .positive()
    .integer()
    .min(10, { message: "Invalid phone number" })
    .required("Required"),
  adhaar: yup
    .number()
    .positive()
    .integer()
    .min(13, { message: "Invalid Adhaar number" })
    .required("Required"),
  dob: yup.date().required("Required"),

  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please enter a stronger password" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("Required"),
});
