import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './Jumbotron.css'
// import 'bootstrap/dist/css/bootstrap.min.css';


class Jumbo extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron fluid className="jumbo-background">
                    <Container fluid>
                        <h1 className="display-3"><img src="https://brand.wisc.edu/content/uploads/2016/10/different-logo-300x200.png"></img>University of Wisconsin-Madison</h1>
                        <p className="lead">Below you will find some information and statistics which can help you make some important decisions</p>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
    
};

export default Jumbo;