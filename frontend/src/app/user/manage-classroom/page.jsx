import React from 'react'

const page = () => {
  return (
    <div>
     
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Classroom Management</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n        /* Basic styling */\n        body {\n            font-family: Arial, sans-serif;\n            margin: 0;\n            padding: 0;\n        }\n        .container {\n            max-width: 600px;\n            margin: 20px auto;\n            padding: 20px;\n            border: 1px solid #ccc;\n            border-radius: 5px;\n        }\n        input[type="text"], input[type="submit"] {\n            padding: 10px;\n            margin: 5px 0;\n            width: 100%;\n            box-sizing: border-box;\n        }\n        ul {\n            list-style-type: none;\n            padding: 0;\n        }\n        li {\n            padding: 10px;\n            border-bottom: 1px solid #ccc;\n        }\n    '
    }}
  />
  <div className="container">
    <h2>Classroom Management</h2>
    <form id="addStudentForm">
      <input
        type="text"
        id="studentName"
        placeholder="Enter student name"
        required=""
      />
      <input type="submit" defaultValue="Add Student" />
    </form>
    <h3>Students in the Classroom</h3>
    <ul id="studentList">{/* Student list will be populated here */}</ul>
  </div>

    </div>
  )
}

export default page
