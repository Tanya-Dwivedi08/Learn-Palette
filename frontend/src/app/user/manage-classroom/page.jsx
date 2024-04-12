import React from 'react'

const page = () => {
  return (
    <div>
   
  <title>Classroom Management</title>
  <link rel="stylesheet" href="style.css" />
  <h1>Classroom Management</h1>
  <div className="container">
    <div className="student-list">
      <h2>Student List</h2>
      <ul>
        <li>John Doe</li>
        <li>Jane Doe</li>
        <li>Peter Parker</li>
        <li>Mary Jane Watson</li>
      </ul>
    </div>
    <div className="attendance">
      <h2>Attendance</h2>
      <table>
        <thead>
          <tr>
            <th>Student</th>
            <th>Present</th>
            <th>Absent</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>
              <input type="checkbox" defaultChecked="" />
            </td>
            <td>
              <input type="checkbox" />
            </td>
          </tr>
          <tr>
            <td>Jane Doe</td>
            <td>
              <input type="checkbox" defaultChecked="" />
            </td>
            <td>
              <input type="checkbox" />
            </td>
          </tr>
          <tr>
            <td>Peter Parker</td>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <input type="checkbox" defaultChecked="" />
            </td>
          </tr>
          <tr>
            <td>Mary Jane Watson</td>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <input type="checkbox" defaultChecked="" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>


    </div>
  )
}

export default page
