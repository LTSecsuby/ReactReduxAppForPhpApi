import axios from "axios";
import {createActionLoadMessageFriend} from "./ReducerFriendsListPage";

export const loadMessagesFriend = (loginFriend) => dispatch => {

    function _loadMessagesFriend() {

        const token = localStorage.token;

        const url = `http://localhost:8000/user/friend/messages?q=${loginFriend}`;

        axios.get(url, { headers: {"Authorization" : `Bearer ${token}`} } )
            .then((res) => {
                dispatch(createActionLoadMessageFriend(res.data.messages));
            })
            .catch((err) => {
                console.log(err);
            });
    }

    _loadMessagesFriend();
};