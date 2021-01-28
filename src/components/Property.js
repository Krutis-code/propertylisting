import React, { Component } from 'react'


class Property extends Component {
    constructor(props){
        super(props)
        this.state={
            unit:"Sq-ft",
            ncarpetarea:props.property.carpetarea
        }
    }


    displayarea = (e) =>{
        if(this.state.unit==="Sq-ft")
        {
            return this.state.ncarpetarea
        }
        if(this.state.unit==="Sq-yrd")
        {
            return (this.state.ncarpetarea*0.1)
        }
        if(this.state.unit==="Sq-m")
        {
            return (this.state.ncarpetarea*0.09)
        }
    }
    ChangeHandler = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }

    render() {
        const {propertyname,description,address,locality,price,bedroom,bath,carpetarea,pictures}=this.props.property;
        
        return (
            <div >
                <div>
                <div className="flexcontainer">
                    <div className="flexright">

                    <img src={process.env.PUBLIC_URL + pictures} alt="picture"  className="homeimg"></img>
                    </div>
                    <div className="flexleft">
                        <h4 className="price">{price}</h4>
                        <h5>{propertyname}</h5>
                        <p></p>
                        {/* <h5>Price :</h5> */}
                        <p>Description :{description} </p>
                        <p></p>
                        <p>Locality :{locality} </p>
                        <p></p>
                        <p>Address :{address}</p>
                        <p></p>
                        <p>Carprt Area: <span>{this.displayarea ()}</span>
                            <select value={this.state.unit} 
                                    name="unit"
                                    className="unitdropdown"
                                     onChange={this.ChangeHandler} >
                                <option value="Sq-ft">Sq-ft</option>
                                <option value="Sq-yrd">Sq-yrd</option>
                                <option value="Sq-m">Sq-m</option>
                            </select>
                        </p>
                        <p></p>
                        <p>Bedroom : {bedroom}</p>
                        <p></p>
                        <p>Bath:{bath}</p>
                        <p></p>
                        {/* <i class="fas fa-star"></i> */}
                    </div>
                    
                
                </div>
            </div>
            </div>
        )
    }
}

export default Property
