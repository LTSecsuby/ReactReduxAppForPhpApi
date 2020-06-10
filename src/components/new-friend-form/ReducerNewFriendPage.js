let initialState = {
    newFriendPage: {
        currentUser: [],
        openAddNewFriend: false

    }
};

const OPEN_ADD_NEW_FRIENDS = 'OPEN_ADD_NEW_FRIENDS';
export let createActionOpenOrCloseAddNewFriends = (openAddNewFriend) => {
    return { type: OPEN_ADD_NEW_FRIENDS, openAddNewFriend: openAddNewFriend }
};

const ADD_NEW_FRIEND = 'ADD_NEW_FRIEND';
export let createActionAddNewFriend = (currentUser) => {
    return { type: ADD_NEW_FRIEND, currentUser: currentUser }
};

const SKIP_NEW_FRIEND = 'SKIP_NEW_FRIEND';
export let createActionSkipNewFriend = (currentUser) => {
    return { type: SKIP_NEW_FRIEND, currentUser: currentUser }
};

const LOGIN_USER = 'LOGIN_USER';
export let createActionUserFriendPage = (currentUser) => {
    return { type: LOGIN_USER, currentUser: currentUser }
};

let ReducerNewFriendPage = (state=initialState, action) => {

    switch (action.type) {

        case ADD_NEW_FRIEND:
            return {...state, newFriendPage: {...state.newFriendPage, openAddNewFriend: false, currentUser: action.currentUser}};

        case OPEN_ADD_NEW_FRIENDS:
            return {...state, newFriendPage: {...state.newFriendPage, openAddNewFriend: action.openAddNewFriend}};

        case SKIP_NEW_FRIEND:
            return {...state, newFriendPage: {...state.newFriendPage, openAddNewFriend: false, currentUser: action.currentUser}};

        case LOGIN_USER:
            return {...state, newFriendPage: {...state.newFriendPage, currentUser: action.currentUser}};

        default:
            return state;
    }
};
export default ReducerNewFriendPage;