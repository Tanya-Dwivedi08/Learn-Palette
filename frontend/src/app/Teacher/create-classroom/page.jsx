'use client';
import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import useTeacherContext from '@/app/context/TeacherContext';
import { useRouter } from 'next/navigation';



const createclass = () => {
  const router = useRouter();
  const [currentTeacher, setCurrentTeacher] = useState(JSON.parse(sessionStorage.getItem('teacher')));

  const createclassValidationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    description: Yup.string().required('Description is required'),
    tags: Yup.string().required('Tags is required'),
    cover: Yup.string().required('cover is required'),
    icon: Yup.string().required('icon is required'),

  })

  const createclassForm = useFormik({
    initialValues: {
      name: '',
      description: '',
      tags: '',
      cover: '',
      icon: '',
    },
    onSubmit: (values, { resetForm }) => {

      fetch("http://localhost:5000/class/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": currentTeacher.token,
        },
      })
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            toast.success("create successfully");
            router.push('/classroom')
            resetForm();
          } else {
            toast.error("Something went wrong");
          }
        }).catch((err) => {
          console.log(err);
        });


    },
    validationSchema: createclassValidationSchema
  })


  return (
    <div>

 
      <>
       
        <div className="h-full p-12">
          {/*Nav*/}
          <div className="w-full mt-5 container  mx-auto">
            <div className="w-full flex items-center justify-between">
              <a
                className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-4xl lg:text-6xl justify-center "
                href="#"
              >
                Learn
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 justify-center">
                  Palette
                </span>
              </a>
            </div>
          </div>
          {/*Main*/}
          <div className="container pt-12 mx-auto flex flex-wrap flex-col md:flex-row items-center justify-center ">
            {/*Left Col*/}
            <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
              <form onSubmit={createclassForm.handleSubmit}>
                <div className="mx-auto max-w-xs justify-center ">

                  <div>
                    <label htmlFor="">
                      Name
                    </label>
                    {
                      createclassForm.touched.name &&
                      <small class="text-pink-500">{createclassForm.errors.name}</small>
                    }
                    <input
                      className="w-full px-8 py-4 mb-4 rounded-lg font-medium bg-lavender-100 border border--200 placeholder-lavender-500 text-sm focus:outline-none focus:border-lavender -400 focus:bg-black"
                      type="text"
                      placeholder=" Name"
                      id="name"
                      onChange={createclassForm.handleChange}
                      value={createclassForm.values.name}

                    />
                  </div>
                  <div>
                    <label htmlFor="">
                      Description
                    </label>
                    {
                      createclassForm.touched.description &&
                      <small class="text-pink-500">{createclassForm.errors.description}</small>
                    }
                    <input
                      className="w-full px-8 py-4 mb-4 rounded-lg font-medium bg-lavender-100 border border-lavender-200 placeholder-lavender-500 text-sm focus:outline-none focus:border-lavender-400 focus:bg-black"
                      type="text"
                      placeholder=" Description"
                      id="description"
                      onChange={createclassForm.handleChange}
                      value={createclassForm.values.description}

                    />
                  </div>
                  <div>
                    <label htmlFor="">
                      Tags
                    </label>
                    {
                      createclassForm.touched.tags &&
                      <small class="text-pink-500">{createclassForm.errors.tags}</small>
                    }
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-lavender-100 border border-lavender-200 placeholder-lavender-500 text-sm focus:outline-none focus:border-lavender-400 focus:bg-black"
                      type="tags"
                      placeholder="Tags"
                      id="tags"
                      onChange={createclassForm.handleChange}
                      value={createclassForm.values.tags}

                    />
                  </div>
                 <div>
                    <label htmlFor="">
                      Cover
                    </label>
                    {
                      createclassForm.touched.cover &&
                      <small class="text-pink-500">{createclassForm.errors.cover}</small>
                    }
                    <input
                      className="w-full px-8 py-4 mb-4 rounded-lg font-medium bg-lavender-100 border border--200 placeholder-lavender-500 text-sm focus:outline-none focus:border-lavender-400 focus:bg-black"
                      type="file"
                      placeholder="Cover"
                      id="cover"
                      onChange={createclassForm.handleChange}
                      value={createclassForm.values.cover}

                    />
                  </div>
                 <div>
                    <label htmlFor="">
                      Icon
                    </label>
                    {
                      createclassForm.touched.icon &&
                      <small class="text-pink-500">{createclassForm.errors.icon}</small>
                    }
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-lavender-100 border border-lavender-200 placeholder-lavender-500 text-sm focus:outline-none focus:border-lavender-400 focus:bg-black mt-5"
                      type="file"
                      placeholder="Icon"
                      id="icon"
                      onChange={createclassForm.handleChange}
                      value={createclassForm.values.icon}

                    />
                  </div>
                  <button type="submit" className="mt-5 mb-5 tracking-wide font-semibold bg-purple-400 text-black-500 w-full py-4 rounded-lg hover:bg-purple -700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
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
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-red-500">Create </span>
                  </button>

                </div>
              </form>
           </div>
            {/*Right Col*/}
            <div className="w-full xl:w-3/5 p-12 overflow-hidden">
              <img
                className="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"
                src="https://tailwindtoolbox.github.io/Rainblur-Landing-Page/macbook.svg"
              />
            </div>
            {/*Footer*/}
          </div>
        </div>
      </>
    </div>
  )
}

export default createclass