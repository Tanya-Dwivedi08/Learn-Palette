import React, { useState } from 'react';

function ClassroomManager() {
  // State for storing student information
  const [students, setStudents] = useState([]);
  const [newStudentName, setNewStudentName] = useState('');

  // Function to add a new student
  const addStudent = () => {
    if (newStudentName.trim() !== '') {
      setStudents([...students, { id: Date.now(), name: newStudentName }]);
      setNewStudentName('');
    }
  };

  // Function to remove a student
  const removeStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    <div>
      <h2>Classroom Manager</h2>
      <div>
        <input
          type="text"
          placeholder="Enter student name"
          value={newStudentName}
          onChange={(e) => setNewStudentName(e.target.value)}
        />
        <button onClick={addStudent}>Add Student</button>
      </div>
      <div>
        <h3>Students:</h3>
        <ul>
          {students.map(student => (
            <li key={student.id}>
              {student.name}
              <button onClick={() => removeStudent(student.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ClassroomManager;
