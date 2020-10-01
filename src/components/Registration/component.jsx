import React, { createRef } from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../login/login.scss'

class Registration extends React.Component {

    h2Ref = createRef();

    componentDidMount() {
        this.props.fetchUsersList();
        console.log(this.h2Ref)
    }

    checkLoginBeforeLRegister = (login, pass) => {
        const { registerUser, users } = this.props;
        const alreadyIsTaken = users.find(user => user.login === login);

        if (alreadyIsTaken) {
            alert('Login is already taken. Please, choose another login');
        } else {
            if (login.length > 2 && pass.length > 2) {
                const newUser = {
                    login: login,
                    password: pass
                }

                registerUser(newUser);
                alert('You successfully registered and loggen in. Now you have permission to all pages.');
                return this.props.history.push('/home');
            } else {
                alert('Minimal size of password and login is 2 sybloms. Please, choose another login or password');
            }
        }
    }

    submitForm = (event) => {
        event.preventDefault();
        this.checkLoginBeforeLRegister(event.target.login.value, event.target.password.value);
    }

    render() {
        const { props } = this;

        return (
            <div className="Regist">
                <h2 ref={this.h2Ref}>{props['app-register-title']}</h2>
                <form className="form" onSubmit={this.submitForm}>
                    <input type="text" name="login" placeholder={props['app-register-log-placeholder']}/>
                    <input type="text" name="password" placeholder={props['app-register-pass-placeholder']}/>

                    <button>{props['app-register-button']}</button>
                    <p>{props['app-register-prompt']} <Link to="/login">{props['app-register-reglink']}</Link></p>
                </form>
            </div>
        )
    }
}
export default withRouter(Registration)
