import { React, useEffect } from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';

const Home = () => {
    useEffect(()=> {
        document.title='Home';
    });

    return(
        <div>
            <Jumbotron fluid className="text-center">
                <h1>Learning React</h1>
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