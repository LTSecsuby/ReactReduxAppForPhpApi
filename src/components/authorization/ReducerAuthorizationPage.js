let initialState = {
    authorizationPage: {
        authTextLogin: '',
        authTextPass: '',
        currentUser: [],
        error: '',
        openLoginUser: false,
        isOnline: false,
        userLoginError: false
    }
};


const SET_TEXT_LOGIN = 'SET_TEXT_LOGIN';
export let createActionSetTextLogin = (authTextLogin) => {
    return { type: SET_TEXT_LOGIN, authTextLogin: authTextLogin }
};

const SET_TEXT_PASS = 'SET_TEXT_PASS';
export let createActionSetTextPass = (authTextPass) => {
    return { type: SET_TEXT_PASS, authTextPass: authTextPass }
};

const LOGIN_USER = 'LOGIN_USER';
export let createActionLoginUser = (currentUser) => {
    return { type: LOGIN_USER, currentUser: currentUser }
};

const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
export let createActionLoginUserError = (error) => {
    return { type: LOGIN_USER_ERROR, error: error}
};

const LOGOUT_USER = 'LOGOUT_USER';
export let createActionLogoutUser = () => {
    return { type: LOGOUT_USER }
};

const ON_LOGIN_USER = 'ON_LOGIN_USER';
export let createActionOpenLoginUser = (onLogin) => {
    return { type: ON_LOGIN_USER, onLogin: onLogin}
};

let ReducerAuthorizationPage = (state=initialState, action) => {

    switch (action.type) {
        case SET_TEXT_LOGIN:
            return {...state, authorizationPage: {...state.authorizationPage, authTextLogin: action.authTextLogin}};

        case SET_TEXT_PASS:
            return {...state, authorizationPage: {...state.authorizationPage, authTextPass: action.authTextPass}};

        case LOGIN_USER:
            return {...state, authorizationPage: {...state.authorizationPage, currentUser: [...action.currentUser], userLogin: true, userLoginError: false}};

        case LOGIN_USER_ERROR:
            return {...state, authorizationPage: {...state.authorizationPage, error: action.error, userLoginError: true, authTextLogin: '', authTextPass: ''}};

        case LOGOUT_USER:
            return {...state, authorizationPage: {...state.authorizationPage, openLoginUser: false , currentUser: [null], userLogin: false, authTextLogin: '', authTextPass: ''}};

        case ON_LOGIN_USER:
            return {...state, authorizationPage: {...state.authorizationPage, openLoginUser: action.onLogin, error: '', authTextLogin: '', authTextPass: ''}};

        default:
            return state;
    }
};
export default ReducerAuthorizationPage;