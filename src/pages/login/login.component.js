import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./login.component.css";

export default class Login extends Component {
    constructor(props) {
    super(props);

    this.state = { email:"", password:"", result:[] }
}
    
    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
      }

      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }

      handleSubmit = event => {
        event.preventDefault();
        
        fetch('http://localhost:5012/api/catalogs/1')
        .then(response => response.json())
        .then(response => this.setState({ result:response.data }));
      }   

      render() {
        return (
          <div className="Login">
          <div className="login-header">
          <span>Login</span> 
          </div>
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId="email" bsSize="large">
                <ControlLabel>Email</ControlLabel>
                <FormControl autoFocus type="email" value={this.state.email} onChange={this.handleChange} />
              </FormGroup>
              <FormGroup controlId="password" bsSize="large">
                <ControlLabel>Password</ControlLabel>
                <FormControl value={this.state.password} onChange={this.handleChange} type="password" />               
              </FormGroup>
              <Button block bsSize="large" disabled={!this.validateForm()} type="submit">Login</Button>  
            </form>
           
            <ul>          
              <li>
                <p>{this.state.result.type}</p>
              </li>       
           </ul>

          </div>
        );
      }
}

