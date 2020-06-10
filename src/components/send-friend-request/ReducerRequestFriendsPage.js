let initialState = {
    requestFriendsPage: {
        textLoginFriends: '',
        friend: [],
        currentUser: [],
        notFoundUser: '',
        openAddFriend: false
    }
};



const SET_TEXT_LOGIN_FRIENDS = 'SET_TEXT_LOGIN_FRIENDS';
export let createActionSetTextLoginFriends = (textLoginFriends) => {
    return { type: SET_TEXT_LOGIN_FRIENDS, textLoginFriends: textLoginFriends }
};

const OPEN_ADD_FRIENDS = 'OPEN_ADD_FRIENDS';
export let createActionOpenOrCloseAddFriends = (openAddFriend) => {
    return { type: OPEN_ADD_FRIENDS, openAddFriend: openAddFriend }
};

const NOT_FOUND_USER = 'NOT_FOUND_USER';
export let createActionFriendNotFound = (err) => {
    return { type: NOT_FOUND_USER, err: err}
};

const ADD_FRIEND = 'ADD_FRIEND';
export let createActionAddFriend = (friend) => {
    return { type: ADD_FRIEND, friend: friend}
};

const LOGIN_USER = 'LOGIN_USER';
export let createActionUserRequestFriendsPage = (currentUser) => {
    return { type: LOGIN_USER, currentUser: currentUser }
};

let ReducerRequestFriendsPage = (state=initialState, action) => {

    switch (action.type) {
        case SET_TEXT_LOGIN_FRIENDS:
            return {...state, requestFriendsPage: {...state.requestFriendsPage, textLoginFriends: action.textLoginFriends}};

        case OPEN_ADD_FRIENDS:
            return {...state, requestFriendsPage: {...state.requestFriendsPage, openAddFriend: action.openAddFriend, notFoundUser: '', friend: []}};

        case NOT_FOUND_USER:
            return {...state, requestFriendsPage: {...state.requestFriendsPage, notFoundUser: action.err, textLoginFriends: ''}};

        case ADD_FRIEND:
            return {...state, requestFriendsPage: {...state.requestFriendsPage, notFoundUser: '', textLoginFriends: '', friend: [action.friend]}};

        case LOGIN_USER:
            return {...state, requestFriendsPage: {...state.requestFriendsPage, currentUser: [...action.currentUser]}};

        default:
            return state;
    }
};
export default ReducerRequestFriendsPage;