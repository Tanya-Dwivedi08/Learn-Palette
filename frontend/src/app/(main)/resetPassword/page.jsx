"use client";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

import React, { useRef, useState } from "react";
import { useNavigate } from "next/navigation";
import toast from "react-hot-toast";

const ResetPassword = () => {
  const emailRef = useRef(null);
  const otpRef = useRef(null);

  const [verifiedUser, setVerifiedUser] = useState(null);

  const [showForm, setShowForm] = useState(false);

  const router = useRouter();

  const checkMailExists = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/Teacher/getbymail/${emailRef.current.value}`
    );
    console.log(res.status);
    const data = await res.json();
    // console.log(data);
    setVerifiedUser(data);
    return res.status === 200;
  };

  const sendOTP = async () => {
    if (!(await checkMailExists())) {
      enqueueSnackbar("Email not registered", { variant: "error" });
      return;
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/util/sendotp,
    {
      method: "POST",
      body: JSON.stringify({ email: emailRef.current.value }),
      headers: {
        "Content-Type": "application/json",
      },
    }`);

    console.log(res.status);
    if (res.status === 201) {
      toast.success("OTP sent");
    } else {
      toast.error("OTP not sent");
    }
  };

  const verifyOTP = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/util/verifyotp/${emailRef.current.value}/${otpRef.current.value}`
    );
    // console.log(res.status);
    if (res.status === 200) {
      setShowForm(true);
    } else {
      toast.error("OTP not verified");
    }
  };

  const resetForm = useFormik({
    initialValues: {
      email: "",
      password: "",
      cpassword: "",
    },
    onSubmit: (values) => {
      console.log(values);
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/student/update/${verifiedUser._id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            password: values.password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          console.log(res.status);
          if (res.status === 200) {
            toast.success("Password reset successful");
            router.push("/student-login");
          } else {
            toast.error("Password reset failed");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
  return (
    <>
      <section className="bg-[#F5F5F5] dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-black dark:text-white"
          >
            <img className="w-12 h-12 mr-2" src="" alt="" />
           Learn Palette
          </a>
          <div className="w-full p-6 bg-purple-50 rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h2 className="mb-1 text-xl justify-center text-center font-bold leading-tight tracking-tight text-black md:text-2xl dark:text-white">
              Change Password
            </h2>
            {/* <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5"> */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-black dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                ref={emailRef}
                className="bg-gray-50 border border-[#000] text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <button
                type="Submit"
                onClick={sendOTP}
                className="mt-2 radius-xl bg-[#9cd0d5] border border-[#98ded9] w-1/2 rounded-lg"
              >
                Send OTP
              </button>
            </div>
            <div>
              <input
                type="text"
                label="Enter OTP"
                ref={otpRef}
                placeholder="Enter OTP"
                className="mt-5 radius-xl"
              />
            </div>
            <div>
              <button
                onClick={verifyOTP}
                className="mt-2 radius-xl bg-[#9cd0d5] border border-[#98ded9] w-1/2 rounded-lg"
              >
                Verify OTP
              </button>
            </div>
            {showForm && (
              <form onSubmit={resetForm.handleSubmit}>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-black dark:text-white"
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    onChange={resetForm.handleChange}
                    value={resetForm.values.password}
                    className="bg-gray-50 border border-gray-300 text-[#000] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-black dark:text-white"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="cpassword"
                    onChange={resetForm.handleChange}
                    value={resetForm.values.cpassword}
                    className="bg-gray-50 border border-gray-300 text-[#000] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="newsletter"
                      aria-describedby="newsletter"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="newsletter"
                      className="font-light text-black dark:text-gray-300"
                    >
                      I accept the{" "}
                      <a
                        className="font-medium text-black hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-[#FC9B3C]  border border-[#FC9B3C] hover:text-white focus:ring-4 focus:outline-none focus:ring-[#FC9B3C] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Reset passwod
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
