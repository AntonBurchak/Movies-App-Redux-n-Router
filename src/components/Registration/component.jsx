import React, { useCallback } from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../login/login.scss'

class Registration extends React.Component {

    componentDidMount() {
        this.props.fetchUsersList()
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
                alert('You successfully registered and loggen in. Now you have permission to all pages.')
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
        return (
            <div className="Regist">
                <h2>Зарегистрируйтесь, пожалуйста</h2>
                <form className="form" onSubmit={this.submitForm}>
                    <input type="text" name="login" placeholder="Введите логин"/>
                    <input type="text" name="password" placeholder="Введите пароль"/>
    
                    <button>Зарегистрироваться</button>
                    <p>Уже зарегистрированы? <Link to="/login">Войдите</Link></p>
                </form>
            </div>
        )
    }
}
export default withRouter(Registration)
