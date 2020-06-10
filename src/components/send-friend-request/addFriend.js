import axios from "axios";
import {createActionAddFriend, createActionFriendNotFound} from "./ReducerRequestFriendsPage";

export const addFriend = (requestFriendsPage) => dispatch => {

    function _addFriend() {

        const token = localStorage.token;
        const url = `http://localhost:8000/user/friend`;

        let body = {
            friend: requestFriendsPage.textLoginFriends
        };

        axios.post(url, body, { headers: {"Authorization" : `Bearer ${token}`} } )
            .then((res) => {
                dispatch(createActionAddFriend(res));
            })
            .catch((err) => {
                if ( err.message === "Request failed with status code 401") {
                    dispatch(createActionFriendNotFound('Auth failed'));
                } else dispatch(createActionFriendNotFound('user not exist'));

            });
    }

    _addFriend();
};