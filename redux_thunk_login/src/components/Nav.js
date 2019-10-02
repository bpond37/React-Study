import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

function Nav(props) {

    const headerText =  props.user != null? props.user.username: "Login..please"

    return(
        <div>
            <h3>Navigation</h3>
            <h4>{headerText}</h4>
            <Link to="/">Main</Link> 

            {props.user == null ? 
              <Link to="/login">Login</Link> 
            :<div></div>}

            
            <Link to="/about">About</Link>
        </div>
    )

}

const mapStateToProps = ({memberReducer}) => {

    //console.log(memberReducer)

    return {user: memberReducer.user }
}

export default connect(mapStateToProps)(Nav)


