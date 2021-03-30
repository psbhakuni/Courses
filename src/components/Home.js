import React from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';

const Home = () => {
    return(
        <div>
            <Jumbotron fluid className="text-center">
                <h1 className="display-3" >Learning React</h1>
                <p>Sample Text</p>
                <Container fluid>
                    <p className="lead">Simple Hero Unit</p>
                    <Button color="primary">Start</Button>
                </Container>                
            </Jumbotron>

        </div>
    );
};

export default Home;