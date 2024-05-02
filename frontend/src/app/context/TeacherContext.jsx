import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useState } from 'react'

const TeacherContext = createContext();

export const TeacherProvider = ({children}) => {

    const router = useRouter();

    const [currentTeacher, setCurrentTeacher] = useState(
        JSON.parse(sessionStorage.getItem('currentTeacher') || null)
    );

    const [teacherLoggedIn, setTeacherLoggedIn] = useState(currentTeacher!==null);

    const teacherLogout = () => {
        sessionStorage.removeItem('currentTeacher');
        setCurrentTeacher(null);
        setTeacherLoggedIn(false);
        router.push('/teacher-login');
    }

  return (
    <TeacherContext.Provider value={{ currentTeacher, setCurrentTeacher, teacherLoggedIn, setTeacherLoggedIn, teacherLogout }}>
        {children}
    </TeacherContext.Provider>
  )
}

const useTeacherContext = () =>  useContext(TeacherContext);
export default useTeacherContext;
