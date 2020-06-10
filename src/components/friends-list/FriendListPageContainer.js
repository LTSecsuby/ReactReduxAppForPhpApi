import {connect} from "react-redux";

import FriendsList from "./FriendsList";
import {deleteFriend} from "./deleteFriend";
import {createActionOnShowMessageFriend, createActionSetTextOnMessageFriend} from "./ReducerFriendsListPage";
import {addMessageFriend} from "./addMessageFriend";
import {loadMessagesFriend} from "./loadMessagesFriend"
import {loadMessageLog} from "./loadMessageLog";

let mapStateToProps = (state) => {
    return {listFriendsPage: state.listFriendsPageState.listFriendsPage};
};

let mapDispatchToProps = (dispatch) => {
    return {
        onDeleteFriend: (loginFriend) => {
            dispatch(deleteFriend(loginFriend))
        },
        onMessagesFriend: (showTextAreaFriendMessage) => {
            dispatch(createActionOnShowMessageFriend(showTextAreaFriendMessage))
        },
        onMessagesFriendLoad: (loginFriend) => {
            dispatch(loadMessagesFriend(loginFriend))
        },
        onMessageLogLoad: (loginFriend) => {
            dispatch(loadMessageLog(loginFriend))
        },
        setTextOnMessage: (e) => {
            let text = e.target.value;
            dispatch(createActionSetTextOnMessageFriend(text));
        },
        onAddMessageFriend: (loginFriend, textMessage) => {
            dispatch(addMessageFriend(loginFriend, textMessage))
        }
    }
};

const FriendListPageContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsList);

export default FriendListPageContainer;