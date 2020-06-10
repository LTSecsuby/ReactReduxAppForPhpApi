import {connect} from "react-redux";
import {
    createActionLogoutUser, createActionOpenLoginUser,
    createActionSetTextLogin,
    createActionSetTextPass
} from "./ReducerAuthorizationPage";
import Authorization from "./Authorization";
import {loginUser} from "./loginUser";
import {createActionLoginUserFriendsListPageError} from "../friends-list/ReducerFriendsListPage";

let mapStateToProps = (state) => {
    return {authorizationPage: state.authorizationPageState.authorizationPage};
};

let mapDispatchToProps = (dispatch) => {
    return {
        onSetTextLogin: (e) => {
            dispatch(createActionSetTextLogin(e.target.value))
        },
        onSetTextPass: (e) => {
          dispatch(createActionSetTextPass(e.target.value))
        },
        onLoginUser: (authorizationPage) => {
            dispatch(loginUser(authorizationPage))
        },
        onLogoutUser: () => {
            localStorage.removeItem("token");
            dispatch(createActionLogoutUser());
            dispatch(createActionLoginUserFriendsListPageError());
        },
        onOpenLoginUser: (openLoginUser) => {
            dispatch(createActionOpenLoginUser(openLoginUser))
        }
    }
};

const AuthorizationPageContainer = connect(mapStateToProps, mapDispatchToProps)(Authorization);

export default AuthorizationPageContainer;