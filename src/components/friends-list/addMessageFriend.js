import axios from "axios";
import {createActionAddMessageFriend} from "./ReducerFriendsListPage";
import {loadMessageLog} from "./loadMessageLog";
import {loadMessagesFriend} from "./loadMessagesFriend";

export const addMessageFriend = (loginFriend, textMessage) => dispatch => {

    function _addMessageFriend() {

        const token = localStorage.token;

        const url = `http://localhost:8000/user/friend/message?q=${loginFriend}`;

        let body = {
            message: textMessage
        };

        axios.post(url, body, { headers: {"Authorization" : `Bearer ${token}`} } )
            .then((res) => {
                dispatch(createActionAddMessageFriend([res.data]));
                dispatch(loadMessageLog(loginFriend));
                dispatch(loadMessagesFriend(loginFriend))
            })
            .catch((err) => {
                console.log(err);
            });
    }

    _addMessageFriend();
};