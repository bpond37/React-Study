import React from 'react'
import {Link} from 'react-router-dom'

function Nav(props) {
    return(
        <div>
            <h1>Navigation</h1>
            <Link to="/">Main</Link> 
            <Link to="/login">Login</Link> 
            <Link to="/about">About</Link> 
        </div>
    )
}
export default Nav