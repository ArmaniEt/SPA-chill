import React, {Component} from 'react';
import './App.css';
import MainPage from './containers/MainPage/MainPage'
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import FindO from './containers/FindO/FindO';
import Layout from "./Layout"
import Animation from "./components/AnimatedComp/Animation"

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route path="/" exact component={MainPage}/>
                        <Route path="/game" component={FindO}/>
                        <Route path="/chill" component={Animation}/>
                    </Switch>
                </Layout>
            </BrowserRouter>

        );
    }
}

export default App;

// We have to have at least 3 components.
// Create a main page with own layout. It will be in containers dir.
// Try to use NavLink (read documentation).
// Additionally components with layout to go to (I suppose it also will be in containers dir with own state each).
// Also import BrowserRouter in App.js with other React Router components.