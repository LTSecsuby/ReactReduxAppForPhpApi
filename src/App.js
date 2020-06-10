import React from 'react';
import './App.css';
import AuthorizationPageContainer from "./components/authorization/AuthorizationPageContainer";
import NewFriendPageContainer from "./components/new-friend-form/NewFriendPageContainer";
import RequestFriendsPageContainer from "./components/send-friend-request/RequestFriendsPageContainer";
import RegistrationPageContainer from "./components/registration/RegistrationPageContainer";
import {connect} from "react-redux";
import {getProfile} from "./getProfile";
import FriendListPageContainer from "./components/friends-list/FriendListPageContainer";

class App extends React.Component {

    componentDidMount = () => {
        this.props.getProfileFetch()
    };

    render() {

        return (
            <div className="blockContentAll">
                <div className="friendsAddContent">
                    <RequestFriendsPageContainer />
                    <NewFriendPageContainer />
                </div>
                <div className="friendsListContent">
                    <FriendListPageContainer />
                </div>
                <div className="userBarLogin">
                    <AuthorizationPageContainer />
                </div>
                <div className="userBarCreate">
                    <RegistrationPageContainer />
                </div>

            </div>
        );
    }

}

const mapDispatchToProps = (dispatch) => ({
    getProfileFetch: () => dispatch(getProfile())

});

export default connect(null, mapDispatchToProps)(App);

