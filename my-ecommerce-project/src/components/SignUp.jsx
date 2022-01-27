import React from 'react';
import axios from "axios";

import { Link } from 'react-router-dom';
  
class SignUp extends React.Component {
  state = {
    firstName: '',
    lastName:'',
    email: '',
    userName: '',
    phone_no:'',
    password:'',
    confirm_pass: '',
    

  };
handleSubmit = event => {
event.preventDefault();
    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      userName: this.state.userName,
      phone_no: this.state.phone_no,
      password: this.state.password,
      confirm_password: this.state.confirm_password
    }
    
    axios.post('http://localhost:8080/adduser', user)
  .then(res=>{
      console.log(res);
      console.log(res.data);
      console.log(res.data.userId)
      
      window.location="/LogIn";
    })
  }
  handleChange = event =>{
    this.setState({ firstName: event.target.value});
  }
  handleChangee = event =>{
    this.setState({ lastName: event.target.value});
  }
  handleChangeee = event =>{
    this.setState({ email: event.target.value});
  }
  handleChangeeee = event =>{
    this.setState({ userName: event.target.value});
  }
  handleChangeeeee = event =>{
    this.setState({ phone_no: event.target.value});
  }
  handleChangeeeeee = event =>{
    this.setState({ password: event.target.value});
  }
  handleChangeeeeeee = event =>{
    this.setState({ confirm_password: event.target.value});
  }
  
  

  

  
  
  
     
  render() {
    return (
      <>
      <div style={{padding:'150px'}}>
         
      <center><h1>SIGN UP</h1></center>
     <br/>
      <form onSubmit={this.handleSubmit}>
      
        <div class="form-group">
          <label for="firstName" style = {{fontSize: '16px'}}>First Name:</label>
          <input 
            type="text" 
            name="firstName" 
            autofill="none"
            onChange={this.handleChangee}
            class="form-control" 
            placeholder="Enter your first name" 
            id="firstName" required/>

            <div className="text-danger"></div>
        </div>
          <br/>
          <div class="form-group">
          <label for="lastName" style = {{fontSize: '16px'}}>Last Name:</label>
          <input 
            type="text" 
            name="lastName" 
            autofill="none"
            onChange={this.handleChange}
            class="form-control" 
            placeholder="Enter your last name" 
            id="lastName" required/>

            <div className="text-danger"></div>
        </div>
          <br/>
          <div class="form-group">
          <label for="phone_no" style = {{fontSize: '16px'}}>Phone_No:</label>
          <input 
            type="text" 
            name="phone_no" 
           onChange={this.handleChangeeeee}
            class="form-control" 
            placeholder="Enter phone no" 
            id="phone_no"  maxlength = "10" required/>

              <div className="text-danger"></div>
        </div>
        <br/>
        <div class="form-group">
          <label for="email" style = {{fontSize: '16px'}}>Email Address:</label>
          <input 
            type="text" 
            name="email" 
            
            onChange={this.handleChangeee}
            class="form-control" 
            placeholder="Enter email" 
            id="email"  required/>

            <div className="text-danger"></div>
        </div>
        <br/>
        <div class="form-group">
          <label for="userName" style = {{fontSize: '16px'}}>Enter your User Name:</label>
          <input 
            type="text" 
            name="userName" 
            
            onChange={this.handleChangeeee}
            class="form-control" 
            placeholder="Enter email" 
            id="userName"  required/>

            <div className="text-danger"></div>
        </div>
      <br/>
        <div class="form-group">
          <label for="password" style = {{fontSize: '16px'}}>Password:</label>
          <input style = {{width: '100%', padding: '15px'}}
            type="password" 
            name="password" 
           
            onChange={this.handleChangeeeeee}
            class="form-control" 
            placeholder="Enter password" 
            id="password" required />
             <span className="password__show" onClick={this.showHide}></span>
    <span className="password__strength" />
            

            <div className="text-danger"></div>
        </div>
      <br/>
        <div class="form-group">
          <label for="password" style = {{fontSize: '16px'}}>Confirm Password:</label>
          <input style = {{width: '100%', padding: '15px'}}
            type="password" 
            name="confirm_password" 
            onChange={this.handleChangeeeeeee}
            class="form-control" 
            placeholder="Enter confirm password" 
            id="confirm_password" required/>
             <span className="password__show" onClick={this.showHide}></span>
    <span className="password__strength" />
            

            <div className="text-danger"></div>
        </div>
          <br/><br/> 
          <div class="form-group">
    <div class="col-xs-8 col-xs-offset-4">
      <p><label class="checkbox-inline" style = {{fontSize: '14px'}}><input type="checkbox" required="required"/> I accept the <a href="/TermsandC">Terms & Conditions</a> &amp; <a href="/Privacy">Privacy Policy</a>.</label></p>
      <button type="submit" class="btn btn-primary btn-lg" value="Continue">Sign Up</button>
    </div>  
  </div>	
      
      </form>
      <div class="text-center">Already have an account? <a href="/Login" style = {{fontSize: '16px'}}>Login here</a></div>
    </div>
 

<br/>
<br/>
<br/>
<br/>
<br/>


   </>
  );
}
       
}
  
export default SignUp;