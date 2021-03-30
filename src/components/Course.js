import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container
  } from 'reactstrap';

const Course = () => {
    return (
        <Card>
            <CardBody>
                <CardTitle>Java</CardTitle>
                <CardSubtitle>Java Basics</CardSubtitle>
                <CardText>This course provides instruction through video lectures and materials which will teach (you) the student how to program in Java from the very basic level to an intermediate level of programming.</CardText>                
                <Container>
                    <Button>Delete</Button>
                    <Button>Update</Button>
                </Container>                
            </CardBody>         
        </Card>
    );
};

export default Course;