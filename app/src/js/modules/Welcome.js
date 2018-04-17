import React from 'React';
import ReactDOM from 'react-dom';

class Welcome extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        };
    }
    render(){
        const message = `Welcome to ${this.props.AppName}!`;
        return (
            <div>
                <h3 onClick = {() => {this.props.handleClick(message)}}> {message} </h3>
            </div>
        )
    }
}

export default Welcome;