import axios from "axios";
import {createActionSkipNewFriend} from "./ReducerNewFriendPage";

export const skipNewFriend = (loginFriend) => dispatch => {

    function _skipNewFriend() {

        const token = localStorage.token;

        const url = `http://localhost:8000/user/friend/skip`;

        let body = {
            friend: loginFriend
        };

        axios.post(url, body, { headers: {"Authorization" : `Bearer ${token}`} } )
            .then((res) => {
                dispatch(createActionSkipNewFriend([res.data]));
            })
            .catch((err) => {
                console.log(err);
            });
    }

    _skipNewFriend();
};