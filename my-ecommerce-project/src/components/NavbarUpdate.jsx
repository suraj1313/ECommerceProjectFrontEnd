import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {cartContext} from "../Global/cartContext";
import {
  Navbar,
  Container,
  FormControl,
  Dropdown,
  Badge,
  Button,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
class NavbarUpdate extends Component {
   
    constructor(props) {
        super(props)
        this.state = {
           users : sessionStorage.getItem("UserName"),
           isLoggedin:false,
           isLoggedOut:false
        }
        if(this.state.users == null) {
          console.log(this.state.users);
          this.state.isLoggedin=true
        }
        else{
          this.state.isLoggedOut = true
        }
 
    }

    clearSession = (e) => {
      sessionStorage.clear()
    }
    render() {
        return (
<Navbar style={{backgroundColor:'#08c8f6'}}>
    
        <Navbar.Brand>
        <ul className="left">
          <li><Link to="/" style={{color:'black',marginTop:'12px'}}>
          SagarExpo
          </Link></li>
          </ul>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 700 }}
            placeholder="Search a product"
            className="m-auto"
            
          />
        </Navbar.Text>
        <ul className="right" style={{marginLeft:'350px'}}>
  <li><Link to="/Men"><img
  src="https://image.freepik.com/free-vector/asian-men-avatar_7814-345.jpg"
  className="rounded-circle dollor"
  style={{width: '50px',border:'2px solid white', marginBottom: '12px'}}
  alt="Avatar" title="men's product"
/></Link></li>
<li><Link to="/Women"><img
  src="https://thumbs.dreamstime.com/b/businesswoman-profile-faceless-avatar-vector-illustration-graphic-design-145166895.jpg"
  className="rounded-circle dollor"
  style={{width: '50px',border:'2px solid white',marginLeft:'12px', marginBottom: '12px'}}
  alt="Avatar" title="women's product"
/></Link></li>
<li><Link to="/Kids"><img
  src="https://cdn1.iconfinder.com/data/icons/children-avatar-flat/128/children_avatar-10-512.png"
  className="rounded-circle dollor"
  style={{width: '50px',background:'white',border:'2px solid white',marginLeft:'12px' ,marginBottom: '12px'}}
  alt="Avatar" title="kids's product"
/></Link></li>

<Link to="/cart"><span className="dollor"><i className="fas fa-cart-plus" style={{color:'white',marginTop:'30px',fontSize:'35px',marginLeft:'12px'}}></i>0</span></Link>
               
               {
                   this.state.isLoggedin && 
               <li  className="dollor"><button class="btn" style={{ backgroundColor: '#000000',
               border: 'none',
               color: 'white',
               padding: '12px 16px',
               marginBottom: '12px',
               marginLeft:'12px',
               fontSize: '16px',
               cursor: 'pointer',borderRadius:'20px'}}><a href = "/Login" style={{color:'white',textDecoration:'none'}}> Login</a></button></li>
    }
    {
                  this.state.isLoggedin &&
                <li  className="dollor"><button class="btn" style={{ backgroundColor: '#000000',
               border: 'none',
               color: 'white',
               padding: '12px 16px',
              marginBottom: '12px',
               marginLeft:'12px',
               fontSize: '16px',
               cursor: 'pointer',borderRadius:'20px'}}><a href = "/SignUp" style={{color:'white',textDecoration:'none'}}> SignUp</a></button></li>
    }
    {
        <li class="nav-item ">
                            <a class="nav-link " aria-current="page" href="/" style={{color:'white'}}>{this.state.users}</a>
                          </li>
    }
    {
               this.state.isLoggedOut &&
            <li  className="dollor"><button class="btn" style={{ backgroundColor: '#000000',
               border: 'none',
               color: 'white',
               padding: '12px 16px',
               marginBottom: '12px',
               marginLeft:'12px',
               fontSize: '16px',
               cursor: 'pointer',borderRadius:'20px'}}><a href = "/Login"  onClick={this.clearSession}  style={{color:'white',textDecoration:'none'}}> Log Out</a></button></li>
    }
            </ul>
           </Navbar>
        );
    }
}

export default NavbarUpdate;

