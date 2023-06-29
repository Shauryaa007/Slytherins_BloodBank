import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/actions/auth";
import { CustomInputComponent } from "../components/index";
import { registerInputs } from "../constant";
import { registerSchema } from "../schemas";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.auth.error);
  const handleSubmit = (values, actions) => {
    const { name, email, phone, adhaar, dob, password } = values;
    try {
      dispatch(register(name, email, phone, adhaar, dob, password));
      if (error === null) {
        navigate("/profile-setup");
        actions.resetForm();
      }
    } catch (error) {
      actions.setSubmitting(false);
    }
  };

  return (
    <div className="bg-white font-Inter mt-4 shadow-lg">
      <div className="w-full  flex flex-wrap">
        <div className="w-full md:w-1/2 flex flex-col overflow-y-scroll [&::-webkit-scrollbar]:hidden">
          <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-4 md:px-10 lg:px-26">
            <p className="text-center text-3xl mt-10 font-bold">Join Us.</p>
            <Formik
              initialValues={{
                name: "",
                email: "",
                phone: "",
                adhaar: "",
                dob: "",
                address: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={registerSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="flex flex-col pt-3 md:pt-8">
                  {registerInputs.map((input, i) => (
                    <div key={i}>
                      <CustomInputComponent
                        label={input.label}
                        name={input.name}
                        type={input.type}
                        placeholder={input.placeholder}
                      />
                    </div>
                  ))}

                  <CustomInputComponent
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                  <CustomInputComponent
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    placeholder="Password"
                  />
                  <button
                    onClick={() => console.log("clicked")}
                    type="submit"
                    className="bg-black flex justify-center items-center text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8 w-full"
                  >
                    {isSubmitting && loading ? (
                      <AiOutlineLoading3Quarters className="animate-spin text-white text-4xl" />
                    ) : (
                      "Register"
                    )}
                  </button>
                </Form>
              )}
            </Formik>
            <div className="text-center pt-12 pb-12">
              <p>
                Already have an account?{" "}
                <Link to={"/auth/login"} className="underline font-semibold">
                  Log in here.
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="w-1/2 shadow-2xl">
          <img
            className="object-cover hidden md:block h-full"
            src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            alt="Background"
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
