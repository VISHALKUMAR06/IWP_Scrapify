import React from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'
import img from '../utils/recycle.png'
function Navbar(){
    return(
        <div className='Navbar'>
            <div className='logo'><img src={img} alt="" /></div>
            <div className='searchField'>
                <FaSearch className='searchicon'/>
                <input type="text" name="" id="" placeholder='Search items and collections'/>
            </div>
            <div className="options">
                <a href="/">About Us</a>
                <a href="/">FAQ</a>
                <Link to='/login'><button>Login</button></Link>
                <Link to='/Register'><button>Register</button></Link>
                
            </div>
            
        </div>
    )
}

export default Navbar;
