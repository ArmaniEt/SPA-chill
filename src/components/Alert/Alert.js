import React from 'react';
import {Alert} from 'reactstrap';

const myAlert = (props) => {
    return (
        <div className="mt-3">
            <Alert color="primary">
                <h4 className="alert-heading">Well done!</h4>
                <p>
                    Aww yeah, you successfully read this important message cause you are on my page. I am greeting you
                    with some jokes which i got from jokes API, enjoy!
                </p>
                <hr/>
                <p className="mb-1">
                    Click the links above to have fun!
                </p>
            </Alert>
        </div>
    );
};

export default myAlert;