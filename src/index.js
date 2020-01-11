import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import {applyMiddleware, compose, createStore} from 'redux'
import reducers from'./reducers/index'
import thunk from "redux-thunk";
import * as serviceWorker from './serviceWorker';
import getMovieByName from './movieApi/movieApi';
import {Chat} from "./components/Chat";
import Log from './components/Log';
import {BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';


//Console.log Film matrix
getMovieByName();


//MIDDLEWARE
const loggerMiddleware = store => next => action => {
    console.log(action);

    return next(action)
};

export const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk, loggerMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);



ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/chat">Chat</Link>
                        </li>
                        <li>
                            <Link to="/">Login</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path="/" component={Log}/>
                    <Route exact path="/chat" component={Chat} />
                </Switch>
            </div>
        </Router>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
