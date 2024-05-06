'use client'
import useTeacherContext from "@/app/context/TeacherContext";
import { Formik } from "formik";
import { useParams, useRouter } from "next/navigation";
import  { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Updateclassroom = () => {
  
  const { id } = useParams();
  const [currentTeacher, setCurrentTeacher] = useState(JSON.parse(sessionStorage.getItem('teacher')));
  const [classroomData, setclassroomData] = useState(null);
  const [selFile, setSelFile] = useState("");
const router = useRouter();


  const fetchclassroomData = async () => {
    const res = await fetch("http://localhost:5000/class/getbyid/" + id )
    const data = await res.json();

    console.log(data);
    setclassroomData(data);
  };

  useEffect(() => {
    fetchclassroomData();
  }, []);

  const submitForm = async (values) => {
    console.log(values);
    values.simage = selFile;
    const res = await fetch('http://localhost:5000/class/update/' + id, {
      method: 'PUT',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
              "x-auth-token": currentTeacher.token,
          
      }
    });

    console.log(res.status);
    action.resetForm();
      if (res.status === 200) {
    toast("Updated successfully")
    res.json().then((data) => {
      console.log(data);
      sessionStorage.setItem("teacher", JSON.stringify(data));
      setTeacherLoggedIn(true);
      setCurrentTeacher(data);
   router.push('/Teacher/manage-classroom')
  });
  
       
      } else if (res.status === 401){
        toast.error("Something went wrong");
      }
      
    }

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
            {classroomData !== null ? (
              <Formik initialValues={classroomData} onSubmit={submitForm}>

                {(classroomData) => (
                  <section className="bg-white dark:bg-gray-900">
                  <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                      Update Services
                    </h2>
                    <form action="#">
                      <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Teacher Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            defaultValue="“"
                            placeholder="Type Teacher name"
                            required=""
                          />
                        </div>
                        <div className="w-full">
                          <label
                            htmlFor="Subject"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Subject
                          </label>
                          <input
                            type="text"
                            name="Subject"
                            id="Subject"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            defaultValue=""
                            placeholder=" Subject"
                            required=","
                          />
                        </div>
                        
                        
                        <div>
                          <label
                            htmlFor="Thumbnail"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Thumbnail
                          </label>
                          <input
                            type="file"
                            name="pimage"
                            id="Thumbnail"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            onChange={uploadFile}
                            placeholder="Thumbnail"/>
                            
                         
                        </div>
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="description"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Description
                          </label>
                          <textarea
                            id="description"
                            rows={8}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Write a Teacher description here..."
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
                          Update Teacher
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

export default Updateclassroom;