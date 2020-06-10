import axios from "axios";
import {createActionAddNewUser, createActionUserError} from "./ReducerRegistrationPage";

export const setNewUser = (registrationPage) => {
       return dispatch => {

            function _setNewUser() {
                const url = `http://localhost/php-server/registration/reg.php`;

                let userBody = new FormData();
                userBody.append('login', registrationPage.textLogin);
                userBody.append('password', registrationPage.textPass);

                axios.post(url, userBody)
                    .then((res) => {
                        //localStorage.setItem("token", res.data.token);
                        dispatch(createActionAddNewUser(res.data[0].login));
                    })
                    .catch(err => {
                        dispatch(createActionUserError(err.response.data));
                    });
            }

            _setNewUser();
        }
};