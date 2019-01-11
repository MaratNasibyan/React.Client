import React from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./login.component.css";

class LoginForms extends React.Component{    
        render() {                    
            return (
                <form onSubmit={this.props.handleSubmit}>
                <FormGroup controlId="email" bsSize="large">
                  <ControlLabel>Email</ControlLabel>
                  <FormControl autoFocus type="email" value= {this.props.email} onChange={this.props.handleChange}/>
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                  <ControlLabel>Password</ControlLabel>
                  <FormControl value={this.props.password} type="password" onChange={this.props.handleChange}/>               
                </FormGroup>
                <Button block bsSize="large" type="submit">Login</Button>  
              </form>
        );
    }
} 

class ResultList extends React.Component{
    render(){
        return(
            <ul>          
                <li>
                    <p>{this.props.result}</p>
                </li>       
            </ul>
        );
    }
}

class Login extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = { email:"", password:"", result:[] }
    }

    handleSubmit = event => {
        event.preventDefault();

        fetch(`http://localhost:5012/${this.state.email}/${this.state.password}`)
          .then(response => response.json())
          .then(response => this.setState({ result:response.message }));
      }   

      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }
    
    render() {           
      return (        
          <div className="login">
            <h3>Login</h3>            
            <LoginForms email = {this.state.email} 
                        password = {this.state.password} 
                        handleSubmit = {this.handleSubmit}
                        handleChange = {this.handleChange} />
            <ResultList result = {this.state.result} />
        </div>
      );
    }
}

export default Login;
