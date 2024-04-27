'use client';
import React from 'react';
import { TeacherProvider } from './context/TeacherContext';


const Template = ({children}) => {

    
  return (
    <TeacherProvider>{children}</TeacherProvider>
  )
}

export default Template