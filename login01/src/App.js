import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom'
import './App.css';
import Main from './pages/Main';
import MyPage from './pages/MyPage';
import Login from './pages/Login';
import Todo from './pages/Todo';

export default class App extends Component{
  constructor(){
    super()
    this.state = {user:null}
  }

  doLogin = (userObj)=>{
    console.log(userObj)
    this.setState({user:userObj})
  }

  render(){
    console.log(this.state.user)
    return (
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li><Link to="/">Main</Link></li>

              {this.state.user===null? 
              <li><Link to="/mypage">mypage</Link></li>
              :
              <div></div>
              }

              <li><Link to="/login">login</Link></li>
              <li><Link to="/todo">todo</Link></li>
            </ul>
          </nav>
      <Route path="/" exact component={Main}></Route>
      <Route path="/mypage" exact render={()=>
        this.state.user !=null?
      <MyPage></MyPage>
      :
      <Redirect to ="/login"></Redirect>
      }></Route>
      <Route path="/login" component={()=><Login doLogin={this.doLogin}></Login>}></Route>
      <Route path="/todo" component = {Todo}></Route>
        </div>

      </Router>
    )
    
  }
}

