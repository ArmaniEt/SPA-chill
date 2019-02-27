import React, {Component, Fragment} from 'react';
import './MainPage.css';
import NavBar from '../../components/NavBar/NavBar'
import axios from 'axios';
import Joke from "../../components/Joke/Joke"
import MyAlert from "../../components/Alert/Alert"
import {Row, Col} from 'reactstrap';



export default class MainPage extends Component {


    componentDidMount() {
        const N = 3;
        axios.get('http://api.icndb.com/jokes/random/' + N).then(jokes => {
            let listOfJokes = [];
            for (let i = 0; N > listOfJokes.length; i++) {
                listOfJokes.push(jokes.data.value[i].joke);

            }

            Promise.all(listOfJokes).then(jokes => {
                this.setState({jokes})
            }).catch(error => {
                console.log(error);
            });


        });


    }


    state = {
        jokes: []
    };


    render() {
        return (
            <Fragment>
                <NavBar/>
                <MyAlert/>
                <Row className="mt-4">
                    {this.state.jokes.map((joke, index) => <Joke
                        joke={joke}
                        key={index}
                    />)}
                </Row>
            </Fragment>
        )
    }
}