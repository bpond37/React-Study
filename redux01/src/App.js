import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import CountDisplay from './ex01/CountDisplay';
import CountReduxButton from './ex02/CountReduxButton';
import CountReduxDisplay from './ex02/CountReduxDisplay';
import ControlPanel from './ex03/ControlPanel';
import APage from './ex03/APage';
import BPage from './ex03/BPage';
import CPage from './ex03/CPage';

function App() {
  return (
    <div className="App">
      {/* <CountDisplay></CountDisplay> */}
      {/* <CountReduxDisplay></CountReduxDisplay>
      <CountReduxButton></CountReduxButton> */}
      <ControlPanel></ControlPanel>
      <APage></APage>
      <BPage></BPage>
      <CPage></CPage>
    </div>
  );
}

export default App;
