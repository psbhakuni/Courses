import React, { Fragment, useState } from 'react';
import {Form, Button, Container, FormGroup, Input, Label} from 'reactstrap';
import axios from "axios";
import base_url from '../api/bootapi';

const AddCourse = () => {
    const [course, setCourse] = useState({});
    const handleInputChange = e => {
        console.log(course);
        setCourse({ ...course, [e.target.name]: e.target.value });
    };
    const handleFinalSubmit = e => {
        console.log(course);
        postData(course);
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
            <Form >
                <FormGroup key="id">
                    <Label for="id">Course Id</Label>
                    <Input
                        id="id"
                        name="id"
                        placeholder="Course Id"
                        onChange={handleInputChange}
                    />
                </FormGroup>
                <FormGroup key="title">
                    <Label for="title">Course Title</Label>
                    <Input
                        id="title"
                        name="title"
                        placeholder="Course Title"
                        onChange={handleInputChange}
                    />
                </FormGroup>
                <FormGroup key="description">
                    <Label for="description">Course Title</Label>
                    <Input
                        id="description"
                        name="description"
                        placeholder="Course description"
                        onChange={handleInputChange}
                    />                
                </FormGroup>
                
                <Container className="text-center">
                    <Button onClick={handleFinalSubmit}>Submit</Button>
                    <Button color="secondary ml-2">Clear</Button>
                </Container>
            </Form> 
        </Fragment>
    );
};


export default AddCourse;