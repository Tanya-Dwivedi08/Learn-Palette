// 'use client';
// import{useStudentContext} from '@/app/context/StudentContext';
// import { Formik } from "formik";
// import { useParams, useRouter } from "next/navigation";
// import  { useEffect, useState } from "react";
// import toast from "react-hot-toast";

// const UpdateStudent = () => {
  
//   const { id } = useParams();
//   const [currentStudent, setCurrentStudent] = useState(JSON.parse(sessionStorage.getItem('Student')));
//   const [StudentData, setStudentData] = useState(null);
//   const [selFile, setSelFile] = useState("");
// const router = useRouter();


//   const fetchStudentData = async () => {
//     const res = await fetch("http://localhost:5000/student/getbyid/" + id )
//     const data = await res.json();

//     console.log(data);
//     setStudentData(data);
//   };

//   useEffect(() => {
//     fetchStudentData();
//   }, []);

//   const submitForm = async (values) => {
//     console.log(values);
//     values.simage = selFile;
//     const res = await fetch('http://localhost:5000/student/update/' + id, {
//       method: 'PUT',
//       body: JSON.stringify(values),
//       headers: {
//         'Content-Type': 'application/json',
//               "x-auth-token": currentStudent.token,
          
//       }
//     });

//     console.log(res.status);
//     action.resetForm();
//       if (res.status === 200) {
//     toast("Updated successfully")
//     res.json().then((data) => {
//       console.log(data);
//       sessionStorage.setItem("Student", JSON.stringify(data));
//       setStudentLoggedIn(true);
//       setCurrentStudent(data);
//    router.push('/student/manage-Student')
//   });
  
       
//       } else if (res.status === 401){
//         toast.error("Something went wrong");
//       }
      
//     }

//   const uploadFile = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     setSelFile(file.name);
//     const fd = new FormData();
//     fd.append("myfile", file);
//     fetch("http://localhost:5000/util/uploadfile", {
//       method: "POST",
//       body: fd,
//     }).then((res) => {
//       if (res.status === 200) {
//         console.log("file uploaded");
//       }
//     });
//   };
'use client'
import usestudentContext from "@/app/context/studentContext";
import { Formik } from "formik";
import { useParams, useRouter } from "next/navigation";
import  { useEffect, useState } from "react";
import toast from "react-hot-toast";

const updatestudent = () => {
  const [currentStudent, setCurrentStudent] = useState(JSON.parse(sessionStorage.getItem('student')));
  const { id } = useParams();
  const [StudentData, setStudentData] = useState(null);
  const [selFile, setSelFile] = useState("");
const router = useRouter();


  const fetchStudentData = async () => {
    const res = await fetch("http://localhost:5000/student/getbyid/" + id);
    const data = await res.json();

    console.log(data);
    setStudentData(data);
  };

  useEffect(() => {
    fetchStudentData();
  }, []);

  const submitForm = async (values) => {
    console.log(values);
    values.simage = selFile;
    const res = await fetch('http://localhost:5000/student/update/' + id, {
      method: 'PUT',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
        "x-auth-token" : currentStudent.token
      }
    });
  
    console.log(res.status);

    if (res.status === 200) {
    toast("Updated successfully")
   router.push('/Teacher/manage-student')
    }
  };

  const uploadFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setSelFile(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    });
  };

  return (
    <div>
      <div className="col-md-3 mx-auto pt-5">
        <div className="card">
          <div className="card-body">
            <h3 className="text-center my-5"></h3>
            {StudentData !== null ? (
              <Formik initialValues={StudentData} onSubmit={submitForm}>

                {(StudentData) => (
                  <section className="bg-white dark:bg-gray-900">
                  <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                      Update Services
                    </h2>
                    <form action="#">
                      <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="fname"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            F.Name
                          </label>
                          <input
                            type="text"
                            name="fname"
                            id="fname"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            defaultValue="“"
                            placeholder="Type first name"
                            required=""
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="lname"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            L.Name
                          </label>
                          <input
                            type="text"
                            name="lname"
                            id="lname"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            defaultValue="“"
                            placeholder="Type last name"
                            required=""
                          />
                        </div>
                        <div className="w-full">
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                           email
                          </label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            defaultValue=""
                            placeholder="email"
                            required=","
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            password
                          </label>
                          <textarea
                            id="password"
                            rows={8}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="update password here..."
                            defaultValue={
                              ""
                            }
                          />
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <button
                          type="submit"
                          className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                          Update Student
                        </button>
                        <div className="text-center mt-6">
                        <button
                          id="UpdateBtn"
                          className="bg-yellow-300 text-black text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                          type="submit"
                          style={{ transition: "all 0.15s ease 0s" }}
                        >
                          Submit
                        </button>
                      </div>
                      </div>
                    </form>
                  </div>
                </section>
                
 )}
              </Formik>
            ) : (
              <h1 className="text-center my-5">Loading ... </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default updatestudent;