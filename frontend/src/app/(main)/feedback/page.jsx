'use client'
import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

const feedback = () => {
  const feedbackform = useFormik({
    initialValues: {
   suggestion:'',
      email: '',
  
    },
    onSubmit: (values, { resetForm }) => {

      const response = fetch("http://localhost:5000/feedback/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            toast.success("feedback successfully");
            action.resetForm();
          } else {
            toast.success("Something went wrong");
          }
        }).catch((err) => {
          console.log(err);
        });


    },
   
  })


  return (
    <div>
      <>
  {/* component */}
  <section>
    <div className="bg-black text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row my-6 md:my-24">
        <div className="flex flex-col w-full lg:w-1/3 p-8 text-center">
          <p className="ml-6 text-yellow-300 text-lg uppercase tracking-loose">
            REVIEW
          </p>
          <p className="text-3xl md:text-5xl my-4 leading-relaxed md:leading-snug">
            Leave us a feedback!
          </p>
          <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
            Please provide your valuable feedback and something something ...
          </p>
        </div>
        <div className="flex flex-col w-full lg:w-2/3 justify-center">
          <div className="container w-full px-4">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl mb-4 text-black font-semibold">
                      Have a suggestion?
                    </h4>
                    <form onSubmit={feedbackform.handleSubmit}
>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          onChange={feedbackform.handleChange}
                        value={feedbackform.values.email}

                          className="border-0 px-3 py-3 rounded text-sm shadow w-full
              bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400"
                          placeholder="email "
                          style={{ transition: "all 0.15s ease 0s" }}
                          
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="Message"
                        >
                         Suggestion
                        </label>
                        <textarea
                          maxLength={300}
                          name="feedback"
                          id="feedback"
                          rows={4}
                          cols={80}
                          className="border-0 px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full"
                          placeholder="message"
                         
                          defaultValue={""}
                          onChange={feedbackform.handleChange}
                        value={feedbackform.values.message}

                        />
                      </div>
                      <div className="text-center mt-6">
                        <button
                          id="feedbackBtn"
                          className="bg-yellow-300 text-black text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                          type="submit"
                          style={{ transition: "all 0.15s ease 0s" }}
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

    </div>
  )
}

export default feedback
