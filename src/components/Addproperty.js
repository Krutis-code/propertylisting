import React,{Component,useState,useEffect} from 'react'
import {properties} from './data/data';


 class Addproperty extends Component {
    constructor(props){
    super(props);
        this.state={
        propertyname:'',
        description:'',
        address:'',
        locality:'',
        price:'',
        bedroom:'',
        bath:'',
        carpetarea:'',
        
    }}

    ChangeHandler = (e) =>{
        this.setState({[e.target.name]:e.target.value})
         console.log(this.state.pictues);
    }
    submitHandler=(e)=>{
        e.preventDefault();
        properties.push(this.state);
        // console.log(properties);
    }   
    render(){
    return (
        <div class="background">
        <div class="regiform">
        <div className="formcontainer ">
            
            <form onSubmit={this.submitHandler}>
            <div className="formfields">
                <div className="labelcontainer">
                <label>Property Name :</label>
                <br></br>
                <input
                type="text"
                value={this.state.propertyname}
                onChange={this.ChangeHandler}
                className="textinput"
                placeholder="name of your property"
                name="propertyname"
                />
                </div>
                {/* <div style={{ fontSize: 12, color: 'red' }} >{formErr.nameErr}</div> */}
                <div>
                <label>Description :</label>
                <br></br>
                <textarea
                type="textarea"
                rows="3"
                value={this.state.description}
                onChange={this.ChangeHandler}
                className="textinput"
                placeholder="about porperty"
                name="description"
                />
                </div>
                <div>
                <label>Address :</label>
                <br></br>
                <input
                type="text"
                value={this.state.address}
                onChange={this.ChangeHandler}
                className="textinput"
                placeholder="address"
                name="address"
                />
                </div>
                <div>
                <label>Locality :</label>
                <br></br>
                <input
                type="text"
                value={this.state.locality}
                onChange={this.ChangeHandler}
                className="textinput"
                placeholder="locality"
                name="locality"
                />
                </div>
                <div>
                <label>Price :</label>
                <br></br>
                <input
                type="text"
                value={this.state.price}
                onChange={this.ChangeHandler}
                className="textinput"
                placeholder="in Rupess"
                name="price"
                />
                </div>
                <div>
                <label>Bedroom :</label>
                <br></br>
                <input
                type="number"
                value={this.state.bedroom}
                onChange={this.ChangeHandler}
                className="textinput"
                placeholder="enter numbers only"
                name="bedroom"
                />
                </div>
                <div>
                <label>Bath :</label>
                <br></br>
                <input
                type="number"
                value={this.state.bath}
                onChange={this.ChangeHandler}
                className="textinput"
                placeholder="enter numbers only"
                name="bath"
                />
                </div>

                <div>
                <label>Carprt Area :</label>
                <br></br>
                <input
                type="number"
                value={this.state.carpetarea}
                onChange={this.ChangeHandler}
                className="textinput"
                placeholder="enter in Sq ft"
                name="carpetarea"
                />
                </div>
                <div>
                    <label>Upload Image : </label>
                    <br></br>
                    <input type="file" 
                            name="picture"
                            value={this.state.pictues}
                            onChange={this.ChangeHandler}
                    ></input>
                    <br></br>
                   
                </div>


                <div>
            <button type="submit" className="btn">Go</button>
          </div>
          </div>
            </form>
        </div>
        </div>
        </div>
    )
    }
}

export default Addproperty 