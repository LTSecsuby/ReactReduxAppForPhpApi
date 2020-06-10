let initialState = {
    registrationPage: {
        textLogin: '',
        textPass: '',
        error: '',
        onCreate: false,
        userLoginCreate: '',
        userCreate: false
    }
};

const SET_TEXT_LOGIN = 'SET_TEXT_LOGIN';
export let createActionSetTextLogin = (textLogin) => {
    return { type: SET_TEXT_LOGIN, textLogin: textLogin }
};

const SET_TEXT_PASS = 'SET_TEXT_PASS';
export let createActionSetTextPass = (textPass) => {
    return { type: SET_TEXT_PASS, textPass: textPass }
};

const ADD_NEW_USER = 'ADD_NEW_USER';
export let createActionAddNewUser = (userLoginCreate) => {
    return { type: ADD_NEW_USER, userLoginCreate: userLoginCreate}
};

const ERROR_USER = 'ERROR_USER';
export let createActionUserError = (error) => {
    return { type: ERROR_USER, error: error }
};

const ON_CREATE_USER = 'ON_CREATE_USER';
export let createActionOpenCreateUser = (onCreate) => {
    return { type: ON_CREATE_USER, onCreate: onCreate }
};

const ON_SET_USER_CREATE = 'ON_SET_USER_CREATE';
export let createActionSetUserCreate = () => {
    return { type: ON_SET_USER_CREATE }
};

let ReducerRegistrationPage = (state=initialState, action) => {

    switch (action.type) {

        case SET_TEXT_LOGIN:
            return {...state, registrationPage: {...state.registrationPage, textLogin: action.textLogin}};

        case SET_TEXT_PASS:
            return {...state, registrationPage: {...state.registrationPage, textPass: action.textPass}};

        case ADD_NEW_USER:
            return {...state, registrationPage: {...state.registrationPage, userCreate: true, userLoginCreate: action.userLoginCreate}};

        case ERROR_USER:
            return {...state, registrationPage: {...state.registrationPage, error: action.error}};

        case ON_CREATE_USER:
            return {...state, registrationPage: {...state.registrationPage, onCreate: action.onCreate, error: '', textLogin: '', textPass: '', userLoginCreate: ''}};

        case ON_SET_USER_CREATE:
            return {...state, registrationPage: {...state.registrationPage, userCreate: false}};
        default:
            return state;
    }
};
export default ReducerRegistrationPage;