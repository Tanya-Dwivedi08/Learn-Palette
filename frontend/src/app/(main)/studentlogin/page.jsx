'use client';
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation';

// import useAppContext from '../../context/AppContext';


const LoginSchema = Yup.object().shape({
  email: Yup.string()
      .required('Required'),
  password: Yup.string()
      .min(8, 'Too short')
      .max(20, 'Too long')
      .required('Required'),
})
const Login = () => {
  const router = useRouter();
  // const { setLoggedIn } = useAppContext();

  //step1 : formik initialization
  const LoginForm = useFormik({
      initialValues: {

          email: '',
          password: '',
      },
      onSubmit: async (values, action) => {

          console.log(values);

          const res = await fetch('http://localhost:5000/student/authenticate', {
              method: 'POST',
              body: JSON.stringify(values),
              headers: {
                  'Content-Type': 'application/json'
              }

          });
          console.log(res.status)
          action.resetForm();

          if (res.status === 200) {
              Swal.fire({
                  icon: 'success',
                  text: 'Logged in Successfully!'
              })
        
          
          }
          else if (res.status === 400
          ) {
              Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Error!'
              })
          }

      },
      validationSchema: LoginSchema

  })


  return (
    <>
    
    <div className='flex justify-center items-center h-screen'>
<form onSubmit={LoginForm.handleSubmit}>
  <div
    className="login_form  p-10 pt-5 shadow-sm mx-auto flex rounded"
    style={{ width: 500 }}
  >
    <div className="sec flex-1">
      <img
        className="mb-3 mx-auto"
        style={{ height: 150 }}
        
        // src="https://www.fatcow.com/images/free-logos/World-Wide01.jpg"
        alt=""
      />
      <span className="flex shadow-md mb-5 text-xs">
        <span className="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">
          Email
        </span>
        <input
          className="field text-sm text-gray-600 p-2 px-3 rounded-r w-full"
          type="text"
          placeholder="seller123@gmail.com"
          onChange={LoginForm.handleChange}
          value={LoginForm.values.email}
          id="email"
        />
                            <span style={{ color: 'red', fontsize: '10', marginLeft: '50' }}>{LoginForm.touched.email && LoginForm.errors.email}</span>

      </span>
      <span className="flex shadow-md mb-5 text-xs">
        <span className="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">
          Password
        </span>
        <input
          className="field text-sm text-gray-600 p-2 px-3 rounded-r w-full"
          type="password"
          placeholder=""
          onChange={LoginForm.handleChange}
          value={LoginForm.values.password}
          id="password"
        />
        <span style={{ color: 'red', fontsize: '10', marginLeft: '50' }}>{LoginForm.touched.password && LoginForm.errors.password}</span>

      </span>
     
      <button type="submit" className="border-2 border-indigo-500 w-full hover:bg-indigo-500 hover:text-gray-100 mt-3 text-indigo-500 block text-center p-3 px-4 text-sm rounded cursor-pointer font-bold">
        Login
      </button>
    </div>
  </div>
  </form>
</div>

    
    </>
  )
}

export default Login