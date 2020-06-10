import React from 'react';
import style from './FriendsList.module.css';

class FriendsList extends React.Component {

    render() {

        let arrayFriendReq = null;

        if(this.props.listFriendsPage !== undefined) {
            if(this.props.listFriendsPage.currentUser[0] !== undefined) {
                if(this.props.listFriendsPage.currentUser[0].addedFriends !== undefined) {
                    arrayFriendReq = this.props.listFriendsPage.currentUser[0].addedFriends.map(m => {
                        return <div key={m.login}>{
                                <p key={m.login}>
                                    <div><button onClick={() => {this.props.onMessagesFriend(m.login);
                                        this.props.onMessagesFriendLoad(m.login);
                                        this.props.onMessageLogLoad(m.login)}}>{m.login}</button>
                                    <span>  </span>
                                    <button onClick={() => this.props.onDeleteFriend(m.login)}>delete</button></div>
                                </p>}
                        </div>
                    })
                }
            }
        }

        return (
            <>
                <div>{this.props.listFriendsPage.friendsList.length === 0 &&
                <div className={style.friendsListContent}><div className={style.loginFriendContent}><h4 className="textLabelGroup">Your friends</h4>{arrayFriendReq}</div>
                    <div className={style.messageFriendContent}><h4 className="textLabelGroup">Chat with <span className="textLabelFriend"> {this.props.listFriendsPage.onShowTextAreaFriendMessage} </span></h4>
                        <div>{this.props.listFriendsPage.onShowTextAreaFriendMessage !== '' ?
                            <div>{this.returnNewArray(this.props.listFriendsPage.messagesFriend, this.props.listFriendsPage.messageLog, this.props.listFriendsPage.currentUser[0].login)}<p><textarea placeholder=" Write a message.." cols="28" rows="5" value={this.props.listFriendsPage.textMessageFriend} onChange={this.props.setTextOnMessage}/></p>
                                <p><button onClick={() => this.props.onAddMessageFriend(this.props.listFriendsPage.onShowTextAreaFriendMessage, this.props.listFriendsPage.textMessageFriend)}>Send</button></p></div>
                            : null}</div>
                    </div>
                </div>
                }</div>
            </>
        )
    }

    returnNewArray(arrayMessagesToFriends, arrayMessagesToUser, userLogin) {

        const arrayAll = arrayMessagesToFriends.concat(arrayMessagesToUser);

        function sortByDate(arr) {
            arr.sort((a, b) => a.created > b.created ? 1 : -1);
        }

        sortByDate(arrayAll);


        let arrayFriendMsg = null;
        if(arrayAll.length > 0) {
                arrayFriendMsg = arrayAll.map(m => {
                    return <div>
                        <p className="textLabel"> {m.ownerLogin === userLogin ? <span className="textLabelUser"> {m.ownerLogin}: </span> : <span className="textLabelFriend"> {m.ownerLogin}: </span>} {m.text} <p className="timeLabel">{this.newDate(m.created)}</p></p>
                    </div>
                })
        }
        return arrayFriendMsg;
    }

    newDate(oldDate) {
        let d = new Date(oldDate);
        return d.toLocaleString('ru')
    }
}

export default FriendsList;