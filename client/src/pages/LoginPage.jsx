import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import { CustomInputComponent, Error } from "../components/index";
import { loginSchema } from "../schemas/index";
import { login } from "../redux/actions/auth";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.auth.error);
  const [errorMessage, setErrorMessage] = useState(null);
  const loading = useSelector((state) => state.loading);
  useEffect(() => {
    if (error) setErrorMessage("Invalid Email or Password");
    else {
      setErrorMessage(null);
    }
  }, [error]);

  const handleSubmit = (values, actions) => {
    const { email, password } = values;
    try {
      dispatch(login(email, password));
      if (error === null) {
        navigate("/dashboard");
        actions.resetForm();
      }
    } catch (error) {
      actions.setSubmitting(false);
    }
  };

  return (
    <div className="bg-white font-Inter mt-4 shadow-lg ">
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-6 md:px-10 lg:px-26">
            <p className="text-center text-3xl font-bold">Welcome.</p>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={loginSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="flex flex-col pt-3 md:pt-8">
                  <CustomInputComponent
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                  />

                  <CustomInputComponent
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Password"
                  />

                  <button
                    type="submit"
                    className="bg-black flex justify-center items-center text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8 w-full"
                  >
                    {isSubmitting && loading ? (
                      <AiOutlineLoading3Quarters className="animate-spin text-white text-4xl" />
                    ) : (
                      "Log In"
                    )}
                  </button>
                  {error && errorMessage && <Error error={errorMessage} />}
                </Form>
              )}
            </Formik>

            <div className="text-center pt-12 pb-12">
              <p>
                Don't have an account?{" "}
                <Link to="/auth/register" className="underline font-semibold">
                  Register here.
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="w-1/2 shadow-2xl">
          <img
            className="object-cover w-full hidden md:block"
            src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
