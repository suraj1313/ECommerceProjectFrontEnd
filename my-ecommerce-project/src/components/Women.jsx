import React, { Component } from "react";
import axios from "axios"; 
import { Link } from "react-router-dom";
import { width } from "dom-helpers";
import Banner from "./Banner";


export default class Women extends Component{

    
    state ={
        places:[],
    };

    componentDidMount() {
         axios.get('http://localhost:8080/products/category/2')
            .then(res=>{
                console.log(res.data);
                const array= res.data;
                const length = array.length;
                // console.log(res.data);
             if(length == 0){
              console.log('No properties Found')   
            }
            else{
                const places = res.data;
                this.setState({ places });
                console.log("This is in else Statement:" + this.state.places)
            }
              })
      }
    render(){
    return(
        <>
        
           
        <Banner/>
            <div class="container" >
            <div class="row"  >
            {this.state.places.map((places, index) => (  
               
                    <div class="col-md-4" data-index={index}>
                        <div class="card" style={{margin:"10px"}}>
                            <img src={places.productImag} alt="realestate" height="150px" width="300px" style={{pading:'20px'}} class="geeks"/>
                            <div class="card-body" >
                                
                        

                            <h5 class="card-title">{places.productName}</h5>
                                <h5 class="card-title">Price: {places.productPrice}/-</h5>
                                 <h5 class="card-title">Size: {places.productSize}</h5>
                                <h5 class="card-title">Color: {places.productColour}</h5>
                                <a href="/" class="btn btn-primary" color="success" >Add To Cart</a> 
                            </div>
                        </div>
                    </div>
               
                  ))} 
                </div> <br></br>
            </div>
            
      </>      

    )
}

}