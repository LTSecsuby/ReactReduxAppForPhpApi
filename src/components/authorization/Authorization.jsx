import React from 'react';

class Authorization extends React.Component {

    render() {

        return (
            <div>{this.props.authorizationPage.userLogin ?
                <button onClick={this.props.onLogoutUser}>{this.props.authorizationPage.currentUser}, exit?</button> :
                <div>
                    {!this.props.authorizationPage.openLoginUser &&
                        <div>
                            <button onClick={() => this.props.onOpenLoginUser(true)}>Auth</button>
                        </div>
                    }
                    {this.props.authorizationPage.openLoginUser &&
                    <div>
                        <button onClick={() => this.props.onOpenLoginUser(false)}>Hide</button>
                        <> </>
                                <input placeholder="Enter your login.." onChange={this.props.onSetTextLogin} value={this.props.authorizationPage.authTextLogin} type='text' size='25'/>
                        <> </>
                                <input placeholder="Enter your password.." onChange={this.props.onSetTextPass} value={this.props.authorizationPage.authTextPass} type='password' size='25'/>
                            <> </>
                            <button onClick={() => this.props.onLoginUser(this.props.authorizationPage)}>Login</button>
                            <> </>
                            {this.props.authorizationPage.userLoginError ?
                                <span className={'error'}>{this.props.authorizationPage.error.message}</span> :
                                <></>}

                    </div>
                    }
                </div>
                }
            </div>
        )
    }
}

export default Authorization;