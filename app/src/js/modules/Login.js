import React from 'react';
import ReactDOM from 'react-dom';

class Login extends React.Component{
    render(){
        return (
            <form onSubmit={this.props.handleSubmit}>
                <label htmlFor="name">
                    Name: <input type="text" name="name" value={this.props.login.name} onChange={this.props.handleLoginNameChange}/>
                </label> 
                <br/>
                <label htmlFor="password">
                    Password: <input type="password" name="password" value={this.props.login.password} onChange={this.props.handlePasswordChange}/>
                </label>
                <br/>
                <input type="submit" value="Login"/>
            </form>
        );
    }
}

export default Login;