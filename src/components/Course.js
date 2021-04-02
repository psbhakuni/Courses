import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, Button, Container
  } from 'reactstrap';

const Course = ({course}) => {
    return (
        <Card className="text-center">
            <CardBody>
                <CardTitle tag="h5">{course.title}</CardTitle>                
                <CardText>{course.description}</CardText>                
                <Container className="text-center"> 
                    <Button color="danger" size="sm">Delete</Button>{' '}
                    <Button color="primary" size="sm">Update</Button>
                </Container>                
            </CardBody>         
        </Card>
    );
};

export default Course;