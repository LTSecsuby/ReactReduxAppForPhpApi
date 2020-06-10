import axios from "axios";
import {createActionGetFriends} from "./ReducerFriendsListPage";

export const getFriendsList = () => {
    return dispatch => {
        
        const token = localStorage.token;

        function _getFriendsList() {
            const url = `http://localhost:8000/user/friends`;

            axios.get(url, { headers: {"Authorization" : `Bearer ${token}`} })
                .then((res) => {
                    dispatch(createActionGetFriends(res.data.friends))
                })
                .catch((err) => {

                });
        }

        if (token) {
            _getFriendsList();
        }
    }
};