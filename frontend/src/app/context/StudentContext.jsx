import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useState } from 'react'

const StudentContext = createContext();

export const StudentProvider = ({children}) => {

    const router = useRouter();

    const [currentStudent, setCurrentStudent] = useState(
        JSON.parse(sessionStorage.getItem('currentStudent') || null)
    );

    const [StudentLoggedIn, setStudentLoggedIn] = useState(currentStudent!==null);

    const StudentLogout = () => {
        sessionStorage.removeItem('currentStudent');
        setCurrentStudent(null);
        setStudentLoggedIn(false);
        router.push('/Student-login');
    }

  return (
    <StudentContext.Provider value={{ currentStudent, setCurrentStudent, StudentLoggedIn, setStudentLoggedIn, StudentLogout }}>
        {children}
    </StudentContext.Provider>
  )
}

const useStudentContext = () =>  useContext(StudentContext);
export default useStudentContext;