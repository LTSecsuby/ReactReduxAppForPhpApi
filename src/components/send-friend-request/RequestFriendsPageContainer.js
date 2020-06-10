import {connect} from "react-redux";
import {
    createActionOpenOrCloseAddFriends,
    createActionSetTextLoginFriends
} from "./ReducerRequestFriendsPage";
import RequestFriendsForm from "./RequestFriendsForm";
import {addFriend} from "./addFriend";

let mapStateToProps = (state) => {
    return {requestFriendsPage: state.requestFriendsPageState.requestFriendsPage};
};

let mapDispatchToProps = (dispatch) => {
    return {
        onSetTextLoginFriends: (e) => {
            dispatch(createActionSetTextLoginFriends(e.target.value))
        },
        onOpenFriendAdd: (openAddFriend) => {
            dispatch(createActionOpenOrCloseAddFriends(openAddFriend))
        },
        onAddFriend: (requestFriendsPage) => {
            dispatch(addFriend(requestFriendsPage))
        }
    }
};

const RequestFriendsPageContainer = connect(mapStateToProps, mapDispatchToProps)(RequestFriendsForm);

export default RequestFriendsPageContainer;