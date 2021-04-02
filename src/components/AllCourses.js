import React, { useState, useEffect } from 'react'
import Course from "./Course"
import base_url from ".././api/bootapi.js";
import axios from 'axios';
import { toast } from 'react-toastify';


const AllCourses =() => {

    useEffect(() =>{
        document.title = "All Courses";

    }, []);

    // Function to load data
    const getAllCourses= ()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                console.log('success');
                console.log(response.data)
                setCourses(response.data);
                toast.success("Data loaded.", {
                    position:'bottom-right'
                });
            },
            (error)=>{
                console.log("erorr while fetching data");
                toast.error("Error while loading data.", {
                    position:'bottom-right'
                });
            }
        ) 
    }

    useEffect(() =>{
        getAllCourses();
    }, []);



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
                ? courses.map((course) =>  <Course key={course.id} course={course} />) 
                :"No Courses" 
            }
        </div>

    );
};

export default AllCourses;