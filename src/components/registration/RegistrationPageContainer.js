import {connect} from "react-redux";
import {
    createActionOpenCreateUser, createActionSetTextLogin,
    createActionSetTextPass, createActionSetUserCreate
} from "./ReducerRegistrationPage";
import Registration from "./Registration";
import {setNewUser} from "./setNewUser";

let mapStateToProps = (state) => {
    return {registrationPage: state.registrationPageState.registrationPage};
};

let mapDispatchToProps = (dispatch) => {
    return {
        onSetTextLogin: (e) =>{
            dispatch(createActionSetTextLogin(e.target.value))
        },
        onSetTextPass: (e) => {
          dispatch(createActionSetTextPass(e.target.value))
        },
        onCreateUser: (registrationPage) => {
            dispatch(setNewUser(registrationPage))
        },
        onOpenCreateUser: (openCreateUser) => {
            dispatch(createActionOpenCreateUser(openCreateUser))
        },
        onSetUserCreate: () => {
            dispatch(createActionSetUserCreate())
        }
        /*setTextOnPost: (e) => {
            let text = e.target.value;
            dispatch(createActionSetTextPost(text));
        },
        addPost: () => {
            dispatch(createActionAddPost());
        },
        asyncMethod: () => {
            setTimeout(()=>{
                dispatch(createActionSetTextPost('async'))
            }, 2000)
        }*/
    }
};

const RegistrationPageContainer = connect(mapStateToProps, mapDispatchToProps)(Registration);

export default RegistrationPageContainer;