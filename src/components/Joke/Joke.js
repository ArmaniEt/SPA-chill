import React from 'react';
import {Card, CardText, Col} from 'reactstrap';


const Joke = function (props) {
    return (
        <Col xs={4}>
            <Card body>
                <CardText>{props.joke}</CardText>
            </Card>
        </Col>

    )
};

export default Joke;