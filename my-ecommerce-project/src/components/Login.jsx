import React from 'react';
import axios from "axios";

import { Link } from 'react-router-dom';
  


class Login extends React.Component {
  state = {
    userName:'',
    password:'',
  };
  handleSubmit = event => {
    event.preventDefault();
    const user = {
      userName:this.state.userName,
      
      password: this.state.password,
    }
    console.log(user);
    axios.post('http://localhost:8080/addlogin', user)
    .then(res=>{
        console.log(res);
        console.log(res.data);
        console.log(res.data.status);
        if(res.data.status === 200){
           
        }
        sessionStorage.setItem('UserName', user.userName);
        window.location = "http://localhost:3000/"
            
      
      })
      .catch((error)=>{
        alert("invalid user")
      })
     
  }
  handleChange = event =>{
    this.setState({ userName: event.target.value});
  }
  handleChangee = event =>{
    this.setState({ password: event.target.value});
  }

  render() {
    return (
        <>
       
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid"
          alt="Sample image"/>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1" style={{backgroundColor:'#fff ',padding:'20px'}}>
        <form onSubmit={this.handleSubmit}>
        <center><h1 style = {{fontSize: '30px'}}>Log In</h1></center>
       <br/>

          <div class="form-outline mb-4">
          <label class="form-label" for="form3Example3">UserName:</label>
            <input type="text" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid user Name:"  onChange={this.handleChange} required/>
            
          </div>

          <div class="form-outline mb-3">
          <label class="form-label" for="form3Example4">Password</label>
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter password" onChange={this.handleChangee} required/>
            
          </div>

          <div class="d-flex justify-content-between align-items-center">
            
            <div class="form-check mb-0">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label class="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href = "/Forgotpassword" class="text-body">Forgot password?</a>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="submit" class="btn btn-primary btn-lg"
              style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}>Login</button>
            <p class="small fw-bold mt-2 pt-1 mb-0"><Link to = "/SignUp">Don't have an account? </Link><a href="#!"
                class="link-danger">Register</a></p>
          </div>

        </form>
      </div>
    </div>
  </div>
  

</section>
      </>
     
    );
  }
}
  

export default Login;