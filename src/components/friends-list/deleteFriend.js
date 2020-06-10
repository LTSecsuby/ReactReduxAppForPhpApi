import axios from "axios";
import {createActionDeleteFriend} from "./ReducerFriendsListPage";

export const deleteFriend = (loginFriend) => dispatch => {

    function _deleteFriend() {

        const token = localStorage.token;

        const url = `http://localhost:8000/user/friend?q=${loginFriend}`;

        axios.delete(url, { headers: {"Authorization" : `Bearer ${token}`} } )
            .then((res) => {
                dispatch(createActionDeleteFriend([res.data]));
            })
            .catch((err) => {
                console.log(err);
            });
    }

    _deleteFriend();
};