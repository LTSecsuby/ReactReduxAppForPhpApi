import React from 'react';

class RequestFriendsForm extends React.Component {

    render() {

        return (
            <div>
                {this.props.requestFriendsPage.openAddFriend ? <>
                    <button onClick={() => this.props.onOpenFriendAdd(false)}>Hide</button>
                        <input placeholder="Enter friend's login.." onChange={this.props.onSetTextLoginFriends} value={this.props.requestFriendsPage.textLoginFriends} type='text' size='25'/>
                    <button onClick={() => this.props.onAddFriend(this.props.requestFriendsPage)}>Find</button>
                    {this.props.requestFriendsPage.notFoundUser !== '' ? <span className={'error'}> {this.props.requestFriendsPage.notFoundUser} </span> : <> </>}
                </> : <div><button onClick={() => this.props.onOpenFriendAdd(true)}>Find friends</button></div>}
                <> { this.props.requestFriendsPage.friend.length > 0 && this.props.requestFriendsPage.openAddFriend ? <span className="textLabel"> Friend request sent to <b>{ this.props.requestFriendsPage.friend[0].data.login }</b> </span> : <> </>} </>
            </div>
        )
    }
}

export default RequestFriendsForm;