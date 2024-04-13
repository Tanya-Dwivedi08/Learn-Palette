import React from 'react'

const manageclassroom = () => {
  return (
    <div>
      
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Classroom Management System</title>
  {/* You can link your CSS file here */}
  <link rel="stylesheet" href="styles.css" />
  <header>
    <h1>Classroom Management System</h1>
  </header>
  <nav>
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Students</a>
      </li>
      <li>
        <a href="#">Teachers</a>
      </li>
      <li>
        <a href="#">Assignments</a>
      </li>
      {/* Add more navigation links as needed */}
    </ul>
  </nav>
  <main>
    {/* Your main content goes here */}
    <section id="welcome">
      <h2>Welcome to the Classroom Management System</h2>
      <p>
        This system helps manage students, teachers, and assignments
        efficiently.
      </p>
    </section>
  </main>
  <footer>
    <p>© 2024 Classroom Management System. All rights reserved.</p>
  </footer>
  {/* You can link your JavaScript file here */}


    </div>
  )
}

export default manageclassroom
