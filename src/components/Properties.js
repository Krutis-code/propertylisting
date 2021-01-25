

import React, { Component } from 'react'
import {properties} from './data/data';
import Proprty from './Property'; 


class Properties extends Component {

    constructor(props){
        super(props)
        this.state={
            locality:'',
            bedroom:"",
            price:0,
            newproperties:properties,
        }
        this.ChangeHandler = this.ChangeHandler.bind(this);
    }

    ChangeHandler = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }
    
    
    SubmitHandler = (e) =>{
        // e.preventDefault();
       
    }
    

    displayProprtie = () =>{

        return this.state.newproperties.filter(property=>{
            if(this.state.locality==="" && this.state.bedroom===""){
                // console.log("con 1");
                return property
            }
            else if(property.locality.toLowerCase().includes(this.state.locality.toLowerCase())&&this.state.bedroom===""){
                // console.log("con 2");
                return property
            }
            else if(property.locality==="" && property.bedroom===this.state.bedroom){
                // console.log("con 3");
                return property
            }
            else if(property.locality.toLowerCase().includes(this.state.locality.toLowerCase())&&property.bedroom===this.state.bedroom){
                // console.log("con 4");
                return property
            }
           
            
        }).map(property=><Proprty key={property.id} property={property}></Proprty>
            )
    }   

    render() {
           
        return (
            <div class="bgcontainer">
                <div className="container">

                        <form onSubmit={this.SubmitHandler}>
                            <div className="searchcontainer">
                                
                                <div className="filterlogo">
                                    <h2><i class="fas fa-x fa-filter"></i></h2>
                                </div>

                                <div>
                                   
                                    
                                    <select value={this.state.locality} name="locality"  onChange={this.ChangeHandler}>
                                    <option  className="selectoption" value="southbopal">South Bopal</option>
                                    <option value="Satelite">Saltelite</option>
                                    <option value="Sindhubhavan">Sindhubhavan</option>
                                    <option value="bopal">bopal</option>
                                        <option value="sarkhej">Sarkhej</option>
                                    </select>
                                </div>

                        
                                <div>
                                    
                                    <select value={this.state.bedroom}  name="bedroom" onChange={this.ChangeHandler}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">3+</option>
                                    </select>
                                </div>
                       
                                
                                    <div>
                                        <button type="submit" className="btn">Reset</button>
                                    </div>
                            </div>
                        </form>
                        
                        
                 <div className="propertycontainer">   
                
                {this.displayProprtie()}
                </div>
                <div className="recentlyviewed">

                </div>
             </div>
            </div>
        )
    }
}

export default Properties

