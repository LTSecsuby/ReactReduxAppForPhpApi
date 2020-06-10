import {connect} from "react-redux";

import NewFriends from "./NewFriends";
import {
    createActionOpenOrCloseAddNewFriends
} from "./ReducerNewFriendPage";
import {addNewFriend} from "./addNewFriend";
import {skipNewFriend} from "./skipNewFriend";

let mapStateToProps = (state) => {
    return {newFriendPage: state.newFriendPageState.newFriendPage};
};

let mapDispatchToProps = (dispatch) => {
    return {
        onOpenNewFriendAdd: (openAddNewFriend) => {
            dispatch(createActionOpenOrCloseAddNewFriends(openAddNewFriend))
        },
        onAddNewFriend: (loginFriend) => {
            dispatch(addNewFriend(loginFriend))
        },
        onSkipNewFriend: (loginFriend) => {
            dispatch(skipNewFriend(loginFriend))
        }
    }
};

const NewFriendPageContainer = connect(mapStateToProps, mapDispatchToProps)(NewFriends);

export default NewFriendPageContainer;