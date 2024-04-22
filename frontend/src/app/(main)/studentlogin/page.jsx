// 'use client';
// import * as Yup from 'yup'
// import { useFormik } from 'formik'
// import { useRouter } from 'next/navigation';

// // import useAppContext from '../../context/AppContext';


// const LoginSchema = Yup.object().shape({
//   email: Yup.string()
//       .required('Required'),
//   password: Yup.string()
//       .min(8, 'Too short')
//       .max(20, 'Too long')
//       .required('Required'),
// })
// const Login = () => {
//   const router = useRouter();
//   // const { setLoggedIn } = useAppContext();

//   //step1 : formik initialization
//   const LoginForm = useFormik({
//       initialValues: {

//           email: '',
//           password: '',
//       },
//       onSubmit: async (values, action) => {

//           console.log(values);

//           const res = await fetch('http://localhost:5000/student/authenticate', {
//               method: 'POST',
//               body: JSON.stringify(values),
//               headers: {
//                   'Content-Type': 'application/json'
//               }

//           });
//           console.log(res.status)
//           action.resetForm();

//           if (res.status === 200) {
//               Swal.fire({
//                   icon: 'success',
//                   text: 'Logged in Successfully!'
//               })
        
          
//           }
//           else if (res.status === 400
//           ) {
//               Swal.fire({
//                   icon: 'error',
//                   title: 'Oops...',
//                   text: 'Error!'
//               })
//           }

//       },
//       validationSchema: LoginSchema

//   })


//   return (
//     <>
    
//     <div className='flex justify-center items-center h-screen'>
// <form onSubmit={LoginForm.handleSubmit}>
//   <div
//     className="login_form  p-10 pt-5 shadow-sm mx-auto flex rounded"
//     style={{ width: 500 }}
//   >
//     <div className="sec flex-1">
//       <img
//         className="mb-3 mx-auto"
//         style={{ height: 150 }}
            
//         //  src="https://www.fatcow.com/images/free-logos/World-Wide01.jpg"
//         alt=""
//       />
//       <span className="flex shadow-md mb-5 text-xs">
//         <span className="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">
//           Email
//         </span>
//         <input
//           className="field text-sm text-gray-600 p-2 px-3 rounded-r w-full"
//           type="text"
//           placeholder="school@gmail.com"
//           onChange={LoginForm.handleChange}
//           value={LoginForm.values.email}
//           id="email"
//         />
//                             <span style={{ color: 'red', fontsize: '10', marginLeft: '50' }}>{LoginForm.touched.email && LoginForm.errors.email}</span>

//       </span>
//       <span className="flex shadow-md mb-5 text-xs">
//         <span className="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">
//           Password
//         </span>
//         <input
//           className="field text-sm text-gray-600 p-2 px-3 rounded-r w-full"
//           type="password"
//           placeholder="..........................."
//           onChange={LoginForm.handleChange}
//           value={LoginForm.values.password}
//           id="password"
//         />
//         <span style={{ color: 'red', fontsize: '10', marginLeft: '50' }}>{LoginForm.touched.password && LoginForm.errors.password}</span>

//       </span>
     
//       <button type="submit" className="border-2 border-indigo-500 w-full hover:bg-indigo-500 hover:text-gray-100 mt-3 text-indigo-500 block text-center p-3 px-4 text-sm rounded cursor-pointer font-bold">
//         Login
//       </button>
//     </div>
//   </div>
//   </form>
// </div>

    
//     </>
//   )
// }

// export default Login
import React from 'react'

const page = () => {
  return (
    <div>
     <>
  {/* component */}
  <div className="bg-gray-100 flex justify-center items-center h-screen">
    {/* Left: Image */}
    <div className="w-1/2 h-screen hidden lg:block">
      <img
        src=""
        alt="Placeholder Image"
        className="object-cover w-72 h-64"
      />
    </div>
    {/* Right: Login Form */}
    <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
      <h1 className="text-2xl font-semibold mb-4">Login</h1>
      <form action="#" method="POST">
        {/* Username Input */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            autoComplete="off"
          />
        </div>
        {/* Password Input */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            autoComplete="off"
          />
        </div>
        {/* Remember Me Checkbox */}
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="remember"
            name="remember"
            className="text-blue-500"
          />
          <label htmlFor="remember" className="text-gray-600 ml-2">
            Remember Me
          </label>
        </div>
        {/* Forgot Password Link */}
        <div className="mb-6 text-blue-500">
          <a href="#" className="hover:underline">
            Forgot Password?
          </a>
        </div>
        {/* Login Button */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
        >
          Login
        </button>
      </form>
      {/* Sign up  Link */}
      <div className="mt-6 text-blue-500 text-center">
        <a href="#" className="hover:underline">
          Sign up Here
        </a>
      </div>
    </div>
  </div>
</>
 
    </div>
  )
}

export default page
