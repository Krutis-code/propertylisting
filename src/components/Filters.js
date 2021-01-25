import React, { Component } from 'react'

class Filters extends Component {

    constructor(props){
        super(props)
        this.state={
            locality:'',
            bedroom:'',
            
        }
        this.ChangeHandler = this.ChangeHandler.bind(this);
    }
     
    ChangeHandler = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }
    
    render() {

        
        
        return (
            <div>
                <form>
                <div>
                    <h2>Search by:</h2>
                    <label>Locality :</label>
                    <select value={this.state.locality} name="locality" onChange={this.ChangeHandler}>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Satelite">Saltelite</option>
                        <option value="Sindhubahavan">Sindhubhavan</option>
                        
                    </select>
                </div>

                <br></br>
                <div>
                    <h2>Search by:</h2>
                    <label>NO of Bedroom:</label>
                    <select value={this.state.bedroom} name="bedroom" onChange={this.ChangeHandler}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    </select>
                </div>
                </form>
            </div>
        )
    }
}

export default Filters
