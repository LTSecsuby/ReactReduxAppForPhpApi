import axios from "axios";
import {createActionLoginUser, createActionLoginUserError} from "./components/authorization/ReducerAuthorizationPage";

import {createActionUserRequestFriendsPage} from "./components/send-friend-request/ReducerRequestFriendsPage";
import {createActionUserFriendPage} from "./components/new-friend-form/ReducerNewFriendPage";
import {createActionUserFriendsListPage} from "./components/friends-list/ReducerFriendsListPage";

export const getProfile = () => {
    return dispatch => {

        const token = localStorage.token;

        function _getProfile() {
            const url = `http://localhost:8000/user/profile`;

            axios.get(url, { headers: {"Authorization" : `Bearer ${token}`} })
                .then((res) => {
                    dispatch(createActionLoginUser([res.data.user]));
                    dispatch(createActionUserRequestFriendsPage([res.data.user]));
                    dispatch(createActionUserFriendPage([res.data.user]));
                    dispatch(createActionUserFriendsListPage([res.data.user]));
                })
                .catch((err) => {
                    dispatch(createActionLoginUserError([err.response.data]));
                    localStorage.removeItem("token")
                });
        }

        if (token) {
            _getProfile();
        }
    }
};