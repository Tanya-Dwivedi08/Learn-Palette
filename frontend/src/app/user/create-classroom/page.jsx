


'use client';
import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';



const createclass = () => {
  const createclassValidationSchema = Yup.object().shape({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    name: Yup.string().required('Name is required'),
    password: Yup.string().required('Password is required').min(6, 'Too short')
      .matches(/[a-z]/, 'password must contain lowercase letter')
      .matches(/[A-Z]/, 'password must contain uppercase letter')
      .matches(/[0-9]/, 'password must contain number')
      .matches(/\W/, 'password must contain special symbol'),
    cpassword: Yup.string().required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
  })

  const createclassForm = useFormik({
    initialValues: {
      fname: '',
      lname: '',
      email: '',
      password: '',
      cpassword: ''
    },
    onSubmit: (values, { resetForm }) => {

      const res = fetch("http://localhost:5000/teacher/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          console.log(response.status);
          if (res.status === 200) {
            toast.success("SignUp successfully");
            action.resetForm();
          } else {
            toast.success("Something went wrong");
          }
        }).catch((err) => {

        });


    },
    validationSchema: createclassValidationSchema
  })


  return (
    <div>

      <>
        {/* source:https://codepen.io/owaiswiz/pen/jOPvEPB */}
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
          <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
            <div className="lg:w-1/2 xl:w-6/10 p-6 sm:p-1">

              <div className="mt-12 flex flex-col items-center">
                <div className="w-full flex-1 mt-8">
                  <div className="flex flex-col items-center">
                    <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-green-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                      <div className="bg-white p-2 rounded-full">
                        <svg className="w-4" viewBox="0 0 533.5 544.3">
                          <path
                            d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                            fill="#4285f4"
                          />
                          <path
                            d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                            fill="#34a853"
                          />
                          <path
                            d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                            fill="#fbbc04"
                          />
                          <path
                            d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                            fill="#ea4335"
                          />
                        </svg>
                      </div>
                      <span className="ml-4">Sign In with Google</span>
                    </button>
                  </div>
                  <div className="my-12 border-b text-center">
                    <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                      Or sign In with Cartesian E-mail
                    </div>
                  </div>

                  <form onSubmit={createclassForm.handleSubmit}>
                    <div className="mx-auto max-w-xs">

                      {
                        createclassForm.touched.name &&
                        <small class="text-red-500">{createclassForm.errors.name}</small>
                      }
                      <input
                        className="w-full px-8 py-4 mb-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="text"
                        placeholder=" First Name"
                        id="name"
                        onChange={createclassForm.handleChange}
                        value={createclassForm.values.fname}

                      />
                      {
                        createclassForm.touched.name &&
                        <small class="text-red-500">{createclassForm.errors.name}</small>
                      }
                      <input
                        className="w-full px-8 py-4 mb-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="text"
                        placeholder=" Last Name"
                        id="name"
                        onChange={createclassForm.handleChange}
                        value={createclassForm.values.lname}

                      />

                      {
                        createclassForm.touched.email &&
                        <small class="text-red-500">{createclassForm.errors.email}</small>
                      }
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="email"
                        placeholder="Email"
                        id="email"
                        onChange={createclassForm.handleChange}
                        value={createclassForm.values.email}

                      />
                      {
                        createclassForm.touched.password &&
                        <small class="text-red-500">{createclassForm.errors.password}</small>
                      }
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        type="password"
                        placeholder="Password"
                        id="password"
                        onChange={createclassForm.handleChange}
                        value={createclassForm.values.password}

                      />
                      {
                        createclassForm.touched.cpassword &&
                        <small class="text-red-500">{createclassForm.errors.cpassword}</small>
                      }
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        type="cpassword"
                        placeholder="confirm Password"
                        id="cpassword"
                        onChange={createclassForm.handleChange}
                        value={createclassForm.values.cpassword}

                      />
                      <button type="submit" className="mt-5 mb-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                        <svg
                          className="w-6 h-6 -ml-2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                          <circle cx="8.5" cy={7} r={4} />
                          <path d="M20 8v6M23 11h-6" />
                        </svg>
                        <span className="ml-">Sign In</span>
                      </button>

                    </div>
                  </form>

                </div>
              </div>
            </div>
            <div className="flex-1 bg-green-100 text-center hidden lg:flex">
              <div
                className="m-12 xl:m-16 w-full h-auto bg-contain bg-center bg-no-repeat"
              ><img src="/class.jpeg" alt="" /></div>
            </div>
          </div>
        </div>
      </>

    </div>
  )
}

export default createclass