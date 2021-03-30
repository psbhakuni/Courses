import React, { useState } from 'react'
import Course from "./Course"

const AllCourses =() => {

    const [courses, setCourses] = useState([
        {title:"Java Course", description: "Java Course Description"},
        {title:"Spring Course", description: "Spring Course Description"},
        {title:"JavaScript Course", description: "JavaScript Course Description"}
    ])

    return(
        <div>
            <h1>All Courses</h1>
            <p>List of courses:</p>
            {
                courses.length > 0 
                ? courses.map((course) =>  <Course course={course} />) 
                :"No Courses" 
            }
        </div>

    );
};

export default AllCourses;