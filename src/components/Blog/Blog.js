import React from 'react';
import './Blog.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import Accordion from 'react-bootstrap/Accordion';

function BasicExample() {
    return (
        <div className='accrodian'>

            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <h3>How does react work?</h3>
                    </Accordion.Header>
                    <Accordion.Body>
                        <h5>
                            ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.
                        </h5>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">

                    <Accordion.Header>
                        <h3>What difference between state and props in react?</h3>
                    </Accordion.Header>
                    <Accordion.Body>
                        <h5>
                            Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component.
                        </h5>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">

                    <Accordion.Header>
                        <h3>What is the use of UseEffect without data load?</h3>
                    </Accordion.Header>
                    <Accordion.Body>
                        <h5>
                            useEffect is a hook for encapsulating code that has 'side effects,' and is like a combination of componentDidMount , componentDidUpdate , and componentWillUnmount . Previously, functional components didn't have access to the component life cycle, but with useEffect you can tap into it.23.1.2019
                        </h5>
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </div>
    );
}

export default BasicExample;



