import axios from "axios";
import {createActionAddNewFriend} from "./ReducerNewFriendPage";
import {createActionUserFriendsListPage} from "../friends-list/ReducerFriendsListPage";

export const addNewFriend = (loginFriend) => dispatch => {

    function _addNewFriend() {

        const token = localStorage.token;

        const url = `http://localhost:8000/user/friend/add`;

        let body = {
            friend: loginFriend
        };

        axios.post(url, body, { headers: {"Authorization" : `Bearer ${token}`} } )
            .then((res) => {
                dispatch(createActionAddNewFriend([res.data]));
                dispatch(createActionUserFriendsListPage([res.data]));
            })
            .catch((err) => {
                console.log(err);
            });
    }

    _addNewFriend();
};