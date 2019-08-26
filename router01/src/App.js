import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from './views/Main';
import MyPage from './views/MyPage';
import TodoList from './views/TodoList/TodoList';

export default class App extends Component {
  constructor(){
    super()
  }

  render(){
    return(
      
    <div className="App"> 
      <h1><a href='/mypage'>MyPage</a></h1>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/mypage">mypage</Link>
            </li>
            <li>
              <Link to="/todoList/1">TodoList</Link>
            </li>
          </ul>

        </nav>
      <Route path="/" exact component={Main} />
      <Route path="/mypage" component={MyPage} />
      <Route path="/todoList/:page" component={TodoList}/>


      </Router>
      
    </div>

    )
  }

}