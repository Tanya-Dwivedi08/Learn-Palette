'use client'
import useTeacherContext from "@/app/context/TeacherContext";
import { Formik } from "formik";
import { useParams, useRouter } from "next/navigation";
import  { useEffect, useState } from "react";
import toast from "react-hot-toast";

const UpdateLecture = () => {
  const [currentTeacher, setCurrentTeacher] = useState(JSON.parse(sessionStorage.getItem('teacher')));
  const { id } = useParams();
  const [LectureData, setLectureData] = useState(null);
  const [selFile, setSelFile] = useState("");
const router = useRouter();


  const fetchLectureData = async () => {
    const res = await fetch("http://localhost:5000/lecture/getbyid/" + id);
    const data = await res.json();

    console.log(data);
    setLectureData(data);
  };

  useEffect(() => {
    fetchLectureData();
  }, []);

  const submitForm = async (values) => {
    console.log(values);
    values.simage = selFile;
    const res = await fetch('http://localhost:5000/lecture/update/' + id, {
      method: 'PUT',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
        "x-auth-token" : currentTeacher.token
      }
    });
  
    console.log(res.status);

    if (res.status === 200) {
    toast("Updated successfully")
   router.push('/Teacher/manage-lecture')
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
            {LectureData !== null ? (
              <Formik initialValues={LectureData} onSubmit={submitForm}>
                {(lectureData) => (
                  <section className="bg-white dark:bg-gray-900">
                  <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                      Update Services
                    </h2>
                    <form onSubmit={lectureData.handleSubmit}>
                      <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="subject"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                          subject
                          </label>
                          <input
                            type="text"
                            name="subject"
                            id="subject"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            value={lectureData.values.subject}
                            onChange={lectureData.handleChange}
                            placeholder="Type subject"
                            required=""
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
                            value={lectureData.values.Thumbnail}
                            onChange={lectureData.handleChange}
                            placeholder="Thumbnail"/>
                             </div>
                             <div className="w-full">
                          <label
                            htmlFor="Description"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Description
                          </label>
                          <input
                            type="text"
                            name="Description"
                            id="Description"
                            value={lectureData.values.Description}
                            onChange={lectureData.handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            
                            placeholder=" Description"
                            required=""
                          />
                        </div>
                         </div>
                         <div className="w-full">
                          <label
                            htmlFor="topic"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                           Topic
                          </label>
                          <input
                            type="text"
                            name="topic"
                            id="topic"
                            value={lectureData.values.topic}
                            onChange={lectureData.handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            
                            placeholder="topic"
                            required=""
                          />
                        </div>
                         
                      <div className="flex items-center space-x-4">
                        <button
                          type="submit"
                          className="text-black bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                          Update lecture
                        </button>
                     
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
  
  export default UpdateLecture ;
