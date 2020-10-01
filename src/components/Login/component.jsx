import React from 'react';
import { withRouter, Link} from 'react-router-dom';
import './login.scss'

class Login extends React.Component {

    componentDidMount() {
        this.props.fetchUsersList();
    }

    checkDataBeforeLogging = (login, pass) => {
        const { loginUser, isLogged, users } = this.props;
        const neededUser = users.find(user => {
            return user.login === login && user.password === pass
        });
        
        if (isLogged) {
            alert('You already logged.');
        } else {
            if (neededUser) {
                alert('You successfully logged');
                loginUser(login, pass);
                this.props.history.push('/home')
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
export default withRouter(Login)