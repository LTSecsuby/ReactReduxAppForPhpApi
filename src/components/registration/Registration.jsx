import React from 'react';

class Registration extends React.Component {

    render() {

        return (
            <div>
                {!this.props.registrationPage.onCreate ?
                    <button onClick={() => this.props.onOpenCreateUser(true)}>Create</button> :
                    <><button onClick={() => this.props.onOpenCreateUser(false)}>Hide</button>
                        {this.props.registrationPage.userCreate ? <><span className="textLabel"> You have successfully created a user <span className="textLabelUser"> {this.props.registrationPage.userLoginCreate} </span></span><button onClick={() => {this.props.onSetUserCreate();
                        this.props.onOpenCreateUser(false)}}>Ok</button></> : <>
                            <> </>
                                <input placeholder="Create a username.." onChange={this.props.onSetTextLogin} value={this.props.registrationPage.textLogin} type='text' size='25'/>
                            <> </>
                                <input placeholder="Create a password.." onChange={this.props.onSetTextPass} value={this.props.registrationPage.textPass} type='password' size='25'/>
                            <> </>
                            <button onClick={() => this.props.onCreateUser(this.props.registrationPage)}>Create</button>
                        </>}
                    <> {this.props.registrationPage.error !== '' ? <span className={'error'}>{this.props.registrationPage.error.message}</span> : null}</>
                    </>
                }
            </div>
        )
    }
}

export default Registration;