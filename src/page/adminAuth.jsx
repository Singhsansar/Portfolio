import { Navigate } from "react-router-dom";
import InputBox from "../components/common/input.component.jsx";
import AnimationWrapper from "../components/common/animationWrapper.jsx";
import { useRef } from "react";
import { Toaster, toast } from "react-hot-toast";

const emailRegex = /^\w+([.-]?\w+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9]{2,})+$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

const AdminAuth = () => {
  const authForm = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(authForm.current);
    const formData = {};
    for (let [key, value] of form.entries()) {
      formData[key] = value;
    }

    const { email, password } = formData;

    if (!email) {
      return toast.error("Enter Email");
    }

    if (!emailRegex.test(email)) {
      return toast.error("Email is invalid");
    }

    if (!passwordRegex.test(password)) {
      return toast.error(
        "Password should be 6 to 20 characters long with numeric, lowercase, and uppercase letters"
      );
    }

    // Handle successful validation and authentication here
  };

  const access_token = undefined; // Replace this with actual authentication logic

  return (
    <>
      {access_token ? (
        <Navigate to="/" />
      ) : (
        <AnimationWrapper keyvalue="sign-in">
          <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute h-full w-full bg-slate-950">
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
            </div>

            <section className=" flexed relative z-10 w-full h-full flex items-center justify-center p-4">
              <Toaster />
              <form
                id="formElement"
                ref={authForm}
                className="w-[90%] max-w-md bg-white shadow-2xl rounded-lg p-8 space-y-6"
                onSubmit={handleSubmit}
              >
                <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
                  Welcome Nikhil
                </h1>
                <p className="text-center text-gray-600 mb-6">
                  Please sign in to continue
                </p>
                <InputBox
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  icon="fi-rr-envelope"
                />
                <InputBox
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  icon="fi-rr-key"
                />
                <button className="btn-dark w-full py-3 mt-4" type="submit">
                  Sign In
                </button>
              </form>
            </section>
          </div>
        </AnimationWrapper>
      )}
    </>
  );
};
export default AdminAuth;
