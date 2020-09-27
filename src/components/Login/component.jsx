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
        return (
            <div className="Login">
                <h2>Войдите, пожалуйста</h2>
                <form className="form" onSubmit={this.submitForm}>
                    <input type="text" name="login" placeholder="Введите логин"/>
                    <input type="text" name="password" placeholder="Введите пароль"/>
    
                    <button>Войти</button>
                </form>
                <p>Не зарегистрированы? <Link to="/registration">Зерегистрируйтесь!</Link></p>
            </div>
        )
    }
}
export default withRouter(Login)