import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../Login/login.scss'

const Registration = (props) => {

    const checkLoginBeforeLRegister = (login, pass) => {
        const users = JSON.parse(localStorage.getItem('users'));
        const alreadyIsTaken = users.find(user => user.login === login);
        const { setLogged } = props;

        if (alreadyIsTaken) {
            alert('Login is already taken. Please, choose another login');
        } else {
            if (login.length > 2 && pass.length > 2) {
                const newUser = {
                    login: login,
                    password: pass
                }

                const newUsers = [...users];
                newUsers.push(newUser);

                localStorage.setItem('users', JSON.stringify(newUsers))

                alert('You successfully registered and loggen in. Now you have permission to all pages.')

                return setLogged(true);
            } else {
                alert('Minimal size of password and login is 2 sybloms. Please, choose another login or password');
            }
        }
    }

    const submitForm = (e) => {
        e.preventDefault();
        checkLoginBeforeLRegister(e.target.login.value, e.target.password.value);
    }

    return (
        <div className="Regist">
            <h2>Зарегистрируйтесь, пожалуйста</h2>
            <form className="form" onSubmit={submitForm}>
                <input type="text" name="login" placeholder="Введите логин"/>
                <input type="text" name="password" placeholder="Введите пароль"/>

                <button>Зарегистрироваться</button>
                <p>Уже зарегистрированы? <Link to="/login">Войдите</Link></p>
            </form>
        </div>
    )
}
export default withRouter(Registration)
