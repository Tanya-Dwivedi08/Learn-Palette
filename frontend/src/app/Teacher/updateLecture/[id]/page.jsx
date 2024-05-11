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
      {LectureData && (
      <Formik
        initialValues={{
        title: LectureData.title,
        description: LectureData.description,
        duration: LectureData.duration,
        date: LectureData.date,
        }}
        onSubmit={submitForm}
      >
        {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          </div>
          <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
          ></textarea>
          </div>
          <div>
          <label htmlFor="duration">Duration</label>
          <input
            type="text"
            id="duration"
            name="duration"
            onChange={formik.handleChange}
            value={formik.values.duration}
          />
          </div>
          <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            onChange={formik.handleChange}
            value={formik.values.date}
          />
          </div>
          <div>
          <label htmlFor="file">Select File</label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={uploadFile}
          />
          </div>
          <button type="submit">Update Lecture</button>
        </form>
        )}
      </Formik>
      )}
    </div>
    )};
    export default UpdateLecture ;