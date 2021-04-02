import React, { Fragment, useEffect, useState } from 'react';
import {Form, Button, Container, FormGroup, Input, Label} from 'reactstrap';
import axios from "axios";
import base_url from '../api/bootapi';

const AddCourse = () => {
    useEffect(()=>{
        document.title='Add Course';
    }, []);

    const [course, setCourse] = useState({});

    //const handleChange = (event) => {
     //   //alert("hi");
     ///   setCourse(event.target.value);
      //  console.log(course);
      ///  alert(event.target.value);
    //};

    const handleSubmit = (event) => {
        alert("hi");
        console.log(course);
        postData(course);
        event.preventDefault();
        
    };

    const postData = (course) =>{
        axios.post(`${base_url}/courses`, course).then(
            (response) => {
                console.log(response);
                console.log('success');
            },
            (error) => {
                console.log('error');
            }
        )
    };

    return (
        <Fragment>
            <h1 className="text-center my-3">Fill Course Details:</h1>
            <Form onSubimt={handleSubmit}>
                <FormGroup>
                    <Label for="id">Course Id</Label>
                    <Input type="text" name="id" id="id" 
                        placeholder="Course Id" 
                        onChange={(e) => {
                            console.log(e.target.value);
                            setCourse({...course, id: e.target.value});
                        }}                            
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="title">Course Title</Label>
                    <Input type="text" name="title" id="title" 
                        placeholder="Course Title" 
                        onChange={(e) => {
                            console.log(e.target.value);
                            setCourse({...course, title: e.target.value});
                        }}                            
                    ></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input type="textarea" name="description" id="description" 
                            placeholder="Course Description" style={{height:150}}                            
                            onChange={(e) => {
                                console.log(e.target.value);
                                setCourse({...course, description: e.target.value});
                            }}                            
                    ></Input>
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="primary">Add Course</Button>
                    <Button color="secondary ml-2">Clear</Button>
                </Container>
            </Form> 
        </Fragment>
    );
};


export default AddCourse;