import axios from "axios";
import {createActionLoginUser, createActionLoginUserError} from "./ReducerAuthorizationPage";

export const loginUser = (authorizationPage) => {
        return dispatch => {

            function _loginUser() {
                const url = `http://localhost/php-server/authentication/auth.php`;

                let userBody = new FormData();
                userBody.append('login', authorizationPage.authTextLogin);
                userBody.append('password', authorizationPage.authTextPass);

                axios.post(url, userBody)
                    .then((res) => {

                        //localStorage.setItem("token", res.data.token);
                        dispatch(createActionLoginUser(res.data[0].login));
                    })
                    .catch((err) => {
                        if (err.response.status === 401) {
                            dispatch(createActionLoginUserError(err.response.data));
                        } else console.log(err);
                    });
            }

            _loginUser();
        }
};