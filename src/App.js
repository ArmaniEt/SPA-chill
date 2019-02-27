import React, {Component} from 'react';
import './App.css';
import MainPage from './containers/MainPage/MainPage'
import {Route, Switch, BrowserRouter} from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={MainPage}/>
                </Switch>
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