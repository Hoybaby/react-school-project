import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Jumbo = (props) => {
    return (
        <div>
            <Jumbotron fluid className="jumbo-background">
                <Container fluid>
                    <h1 className="display-3">Univeristy of Wisconsin-Madison</h1>
                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Jumbo;