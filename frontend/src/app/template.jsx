'use client';
import React from 'react';
import { TeacherProvider } from './context/TeacherContext';
import { StudentProvider } from './context/StudentContext';


const Template = ({children}) => {

    
  return (
    <TeacherProvider>
      <StudentProvider>{children}</StudentProvider></TeacherProvider>
  )
}

export default Template