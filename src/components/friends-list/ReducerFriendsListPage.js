let initialState = {
    listFriendsPage: {
        currentUser: [],
        friendsList: [],
        messagesFriend: [],
        messageLog: [],
        onShowTextAreaFriendMessage: '',
        textMessageFriend: ''
    }
};


const DELETE_NEW_FRIEND = 'DELETE_NEW_FRIEND';
export let createActionDeleteFriend = (currentUser) => {
    return { type: DELETE_NEW_FRIEND, currentUser: currentUser }
};

const LOGIN_USER = 'LOGIN_USER';
export let createActionUserFriendsListPage = (currentUser) => {
    return { type: LOGIN_USER, currentUser: currentUser }
};

const GET_FRIENDS = 'GET_FRIENDS';
export let createActionGetFriends = (friendsList) => {
    return { type: GET_FRIENDS, friendsList: friendsList }
};

const ON_SHOW_MESSAGE_FRIEND = 'ON_SHOW_MESSAGE_FRIEND';
export let createActionOnShowMessageFriend = (showTextAreaFriendMessage) => {
    return { type: ON_SHOW_MESSAGE_FRIEND, showTextAreaFriendMessage: showTextAreaFriendMessage }
};

const SET_TEXT_MESSAGE = 'SET_TEXT_MESSAGE';
export let createActionSetTextOnMessageFriend = (text) => {
    return { type: SET_TEXT_MESSAGE, text: text }
};

const ADD_TEXT_MESSAGE = 'ADD_TEXT_MESSAGE';
export let createActionAddMessageFriend = (currentUser) => {
    return { type: ADD_TEXT_MESSAGE, currentUser: currentUser }
};

const LOAD_MESSAGE_FRIEND = 'LOAD_MESSAGE_FRIEND';
export let createActionLoadMessageFriend = (messages) => {
    return { type: LOAD_MESSAGE_FRIEND, messages: messages }
};

const LOAD_MESSAGE_LOG = 'LOAD_MESSAGE_LOG';
export let createActionLoadMessageLog = (messages) => {
    return { type: LOAD_MESSAGE_LOG, messages: messages }
};

const LOGIN_USER_FRIENDS_LIST_ERROR = 'LOGIN_USER_FRIENDS_LIST_ERROR';
export let createActionLoginUserFriendsListPageError = () => {
    return { type: LOGIN_USER_FRIENDS_LIST_ERROR }
};

let ReducerFriendsListPage = (state=initialState, action) => {

    switch (action.type) {

        case DELETE_NEW_FRIEND:
            return {...state, listFriendsPage: {...state.listFriendsPage, currentUser: action.currentUser}};

        case LOGIN_USER:
            return {...state, listFriendsPage: {...state.listFriendsPage, currentUser: action.currentUser}};

        case LOGIN_USER_FRIENDS_LIST_ERROR:
            return {...state, listFriendsPage: {...state.listFriendsPage, currentUser: [], messagesFriend: [], messageLog: [], onShowTextAreaFriendMessage: '', friendsList: []}};

        case GET_FRIENDS:
            return {...state, listFriendsPage: {...state.listFriendsPage, friendsList: action.friendsList}};

        case LOAD_MESSAGE_FRIEND:
            return {...state, listFriendsPage: {...state.listFriendsPage, messagesFriend: action.messages}};

        case LOAD_MESSAGE_LOG:
            return {...state, listFriendsPage: {...state.listFriendsPage, messageLog: action.messages}};

        case ON_SHOW_MESSAGE_FRIEND:
            return {...state, listFriendsPage: {...state.listFriendsPage, onShowTextAreaFriendMessage: action.showTextAreaFriendMessage}};

        case SET_TEXT_MESSAGE:
            return {...state, listFriendsPage: {...state.listFriendsPage, textMessageFriend: action.text}};

        case ADD_TEXT_MESSAGE:
            return {...state, listFriendsPage: {...state.listFriendsPage, currentUser: action.currentUser, textMessageFriend: ''}};

        default:
            return state;
    }
};
export default ReducerFriendsListPage;