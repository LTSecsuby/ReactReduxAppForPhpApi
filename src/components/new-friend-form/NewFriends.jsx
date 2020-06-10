import React from 'react';

class NewFriends extends React.Component {

    render() {

        let arrayFriendReq = null;

        if(this.props.newFriendPage !== undefined) {

            if(this.props.newFriendPage.currentUser[0] !== undefined) {
                if(this.props.newFriendPage.currentUser[0].friendRequest !== undefined) {
                    arrayFriendReq = this.props.newFriendPage.currentUser[0].friendRequest.map(m => {
                        return <>
                        <p><span className="textLabel"><b>{m.login}</b> wants to add as friend, add?</span></p>
                            <button onClick={() => this.props.onAddNewFriend(m.login)}>Add</button>
                            <> </>
                            <button onClick={() => this.props.onSkipNewFriend(m.login)}>Skip</button>
                        </>
                    })
                }
            }
        }

        return (
            <div><p>
                {this.props.newFriendPage.openAddNewFriend ? <>
                    <button onClick={() => this.props.onOpenNewFriendAdd(false)}>Hide</button>
                    {arrayFriendReq}
                </> : <><button onClick={() => this.props.onOpenNewFriendAdd(true)}>Requests</button></>}
            </p></div>
        )
    }
}

export default NewFriends;