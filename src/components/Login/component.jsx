import React from 'react';
import { withRouter, Link} from 'react-router-dom';
import './login.scss'

const Login = (props) => {

    const checkDataBeforeLogging = (login, pass) => {
        const users = JSON.parse(localStorage.getItem('users'));
        const { setLogged, isLogged } = props;

        const neededUser = users.find(user => {
            return user.login === login && user.password === pass
        });
        

        if (isLogged) {
            alert('You already logged.');
        } else {
            if (neededUser) {
                alert('You successfully logged');
                setLogged(true);
                props.history.push('/home');
            } else {
                alert('Login or password is incorrect.');
            }
        }
    }

    const submitForm = (e) => {
        e.preventDefault();
        
        checkDataBeforeLogging(e.target.login.value, e.target.password.value);
    }

    return (
        <div className="Login">
            <h2>Войдите, пожалуйста</h2>
            <form className="form" onSubmit={submitForm}>
                <input type="text" name="login" placeholder="Введите логин"/>
                <input type="text" name="password" placeholder="Введите пароль"/>

                <button>Войти</button>
            </form>
            <p>Не зарегистрированы? <Link to="/registration">Зерегистрируйтесь!</Link></p>
        </div>
    )
}
export default withRouter(Login)