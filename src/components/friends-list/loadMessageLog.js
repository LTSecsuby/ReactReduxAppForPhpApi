import axios from "axios";
import {createActionLoadMessageLog} from "./ReducerFriendsListPage";

export const loadMessageLog = (loginFriend) => dispatch => {

    function _loadMessageLog() {

        const token = localStorage.token;

        const url = `http://localhost:8000/user/friend/messageLog?q=${loginFriend}`;

        axios.get(url, { headers: {"Authorization" : `Bearer ${token}`} } )
            .then((res) => {
                dispatch(createActionLoadMessageLog(res.data.messages));
            })
            .catch((err) => {
                console.log(err);
            });
    }

    _loadMessageLog();
};