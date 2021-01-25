import React from 'react'
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="navcontainer">
            <ul >
                <Link to='/addproperty' style={{textDecoration:'none'}}>
                    <li className="navleft">LIST PROPERTY</li>
                </Link>
                <Link to='/findproperty'style={{textDecoration:'none'}}>
                    <li className="navright">FIND <i className="fas fa-search "></i></li>
                </Link>
            </ul>   
        </div>
    )
}

export default Navbar
