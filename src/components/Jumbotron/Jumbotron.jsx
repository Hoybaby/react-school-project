import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './Jumbotron.css'

const Jumbo = (props) => {
    return (
        <div>
            <Jumbotron fluid className='jumbo-background'>
                <Container fluid>
                    <h1 className="display-3">Univeristy of Wisconsin-Madison</h1>
                    <p className="lead">Below you will find some information and statistics about this specific University</p>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Jumbo;