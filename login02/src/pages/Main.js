import React from 'react'
import {connect} from 'react-redux'

const Main = (props) => (
    <div>
      <h1>Main Page</h1>
      {props.user != null?
        <h2>{props.user.username}</h2>
        :<h2>GUEST</h2>
      }
    </div>
)

const mapStateToProps = (state) => {

  return {
    user: state.memberReducer.user
  }

}
  
export default connect(mapStateToProps)(Main)