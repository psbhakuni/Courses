import React, { Fragment } from 'react';
import {Button, Container, Form, FormGroup, Input, Label} from 'reactstrap';


const AddCourse = () => {
    return (
        <Fragment>
            <h1 className="text-center my-3">Fill Course Details:</h1>
            <Form>
                <FormGroup>
                    <Label for="courseId">Course Id</Label>
                    <Input type="text" name="courseId" id="courseId" placeholder="Course Id" />
                </FormGroup>
                <FormGroup>
                    <Label for="courseTitle">Course Title</Label>
                    <Input type="text" name="courseTitle" id="courseTitle" placeholder="Course Title"></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input type="textarea" name="description" id="description" placeholder="Course Description" style={{height:150}}></Input>
                </FormGroup>
                <Container styleClass="text-center">
                    <Button color="primary">Add Course</Button>
                    <Button color="secondary ml-2">Clear</Button>
                </Container>
            </Form> 
        </Fragment>
    );
};


export default AddCourse;