"use client";
import { useFormik } from "formik";
// import toast from "react-hot-toast";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Signup = () => {
  // const addUserSchema = Yup.object().shape({});
  const router = useRouter();

  const addUserForm = useFormik({
    initialValues: {
      teachername: "",
      subject: "",
      email: "",
      password: "",
    },

    onSubmit: async (values, action) => {
      // values.image = selFile;
      console.log(values);
      const res = await fetch("http://localhost:5000/teacher/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      });
      console.log(res.status);
      action.resetForm();
      if (res.status === 200) {
        toast.success("SignUp successfully");
        router.push('/teacher-login')
      } else {
        toast.success("Something went wrong");
      }
    },
    // validationSchema: addUserSchema,
  });

  return (
    <>
      <div
        className="container-fluid flex items-center justify-center bg-[#F5F5F5]"
        style={{ height: "100vh" }}
      >
        <div className=" w-3/4 --tw-shadow-color: #000;  ">
          <div className="grid grid-cols-2 h-3/4">
            <div className="w-full h-auto">
              <img
              src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-online-registration_516790-1808.jpg"
                // src="https://www.pngplay.com/wp-content/uploads/6/E-Commerce-Shopping-PNG-Clipart-Background.png"
                alt=""
                className="px-5 py-4 "
              />
            </div>
            <div>
              <form onSubmit={addUserForm.handleSubmit}>
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight  text-black">
                  Teacher Register Here !
                </h2>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                  <div className="flex flex-wrap">
                    <div className="w-1/2 pe-2">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium leading-6  text-black"
                      >
                        Teacher Name
                      </label>

                      <div className="mt-1">
                        <input
                          id="teachername"
                          type="text"
                          onChange={addUserForm.handleChange}
                          value={addUserForm.values.teachername}
                          required
                          className="block w-full rounded-md border-0 py-1.5 px-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-[#ffffff]"
                        />
                      </div>
                    </div>
                    <div className="w-1/2 ">
                      <label
                        htmlFor="subject"
                        className="block text-sm  font-medium leading-6  text-black"
                      >
                        Subject
                      </label>

                      <div className="mt-1">
                        <input
                          id="subject"
                          type="text"
                          onChange={addUserForm.handleChange}
                          value={addUserForm.values.subject}
                          required
                          className="block w-full rounded-md border-0 py-1.5 px-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 bg-[#ffffff]"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm mt-3 font-medium leading-6  text-black"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        type="email"
                        onChange={addUserForm.handleChange}
                        value={addUserForm.values.email}
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 px-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 bg-[#ffffff]"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6  mt-3 text-black"
                      >
                        Password
                      </label>
                    </div>
                    <div className="mt-1">
                      <input
                        id="password"
                        type="password"
                        onChange={addUserForm.handleChange}
                        value={addUserForm.values.password}
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 px-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 bg-[#ffffff]"
                      />
                    </div>
                  </div>

                  <div className="mt-10">
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-[#FC9B3C] mt-6 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-text-[#D4A056] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign in
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;