import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import ReducerRegistrationPage from "./components/registration/ReducerRegistrationPage";
import ReducerAuthorizationPage from "./components/authorization/ReducerAuthorizationPage";
import ReducerRequestFriendsPage from "./components/send-friend-request/ReducerRequestFriendsPage";
import ReducerNewFriendPage from "./components/new-friend-form/ReducerNewFriendPage";
import ReducerFriendsListPage from "./components/friends-list/ReducerFriendsListPage";

let reducers = combineReducers({
    registrationPageState: ReducerRegistrationPage,
    authorizationPageState: ReducerAuthorizationPage,
    requestFriendsPageState: ReducerRequestFriendsPage,
    newFriendPageState: ReducerNewFriendPage,
    listFriendsPageState: ReducerFriendsListPage
});

let store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
