import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Welcome';
import Login from './Login';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            appName: 'React',
            login: {
                name: 'lht8010',
                password: '123456'
            }
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleLoginNameChange = this.handleLoginNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick(message){
        alert(message);
        e.preventDefault();
    }

    handleLoginNameChange(e){
        let newState = Object.assign({}, this.state);
        newState.login.name = e.target.value;
        this.setState(newState);
        e.preventDefault();
    }

    handlePasswordChange(e){
        let newState = Object.assign({}, this.state);
        newState.login.password = e.target.value;
        this.setState(newState);
        e.preventDefault();
    }

    handleSubmit(e){
        alert(`${this.state.login.name} has been Logined, the password is ${this.state.login.password}`);
        e.preventDefault();
    }

    render(){
        return (
            <div>
                <Welcome AppName = {this.state.appName} handleClick = {this.handleClick}/>
                <Login login={this.state.login} 
                handleLoginNameChange = {this.handleLoginNameChange} 
                handlePasswordChange = {this.handlePasswordChange}
                handleSubmit = {this.handleSubmit}
                />
            </div>
        )
    }
}

export default App;