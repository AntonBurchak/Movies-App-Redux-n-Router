import React from 'react';
import { withRouter, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser, fetchUsersList } from '../../core/actions';
import { compose } from 'redux';
import './login.scss';
import translation from '../../hocs/translation';

class Login extends React.Component {
    componentDidMount() {
        this.props.fetchUsersList();
    }

    checkDataBeforeLogging = (login, pass) => {
        const neededUser = this.props.users.find(user => user.login === login && user.password === pass);
        
        if (this.props.isLogged) {
            alert('You already logged.');
        } else {
            if (neededUser) {
                alert('You successfully logged');
                this.props.loginUser(login, pass);
                this.props.history.push('/home');
            } else {
                alert('Login or password is incorrect.');
            }
        }
    }

    submitForm = (event) => {
        event.preventDefault();
        this.checkDataBeforeLogging(event.target.login.value, event.target.password.value);
    }

    render() {
        const { props } = this;
        return (
            <div className="Login">
                <h2>{props['app-login-title']}</h2>
                <form className="form" onSubmit={this.submitForm}>
                    <input type="text" name="login" placeholder={props['app-login-log-placeholder']}/>
                    <input type="text" name="password" placeholder={props['app-login-pass-placeholder']}/>
    
                    <button>{props['app-login-button']}</button>
                </form>
                <p>{props['app-login-prompt']} <Link to="/registration">{props['app-login-reglink']}</Link></p>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isLogged: state.usersReducer.isLogged,
    users: state.usersReducer.users
});
const mapDispatchToProps = { loginUser, fetchUsersList };
const withStore = connect(mapStateToProps, mapDispatchToProps);
const withTranslation = translation([
    'app-login-title',
    'app-login-log-placeholder',
    'app-login-pass-placeholder',
    'app-login-button',
    'app-login-prompt',
    'app-login-reglink',
])

// export default withRouter(withTranslation(withStore(Login)));
export default compose(
    withRouter,
    withTranslation,
    withStore
)(Login)