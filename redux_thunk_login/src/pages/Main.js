import React from 'react'
import {connect} from 'react-redux'

const Main = (props) => (
    <div>
      <h1>Main Page</h1>
      <h2>{props.user ? props.user.username: 'GUEST'}</h2>
    </div>
  )

const mapStateToProps = ({memberReducer}) => {
    return {user: memberReducer.user }
}
  
export default connect(mapStateToProps)(Main)
  
