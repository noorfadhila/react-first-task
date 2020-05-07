import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import './App.css';

class App extends Component {
  state = {
    user: [
      {username : 'Jessie'},
      {username : 'Ben'}
    ]
  }

  userOutputHandler(newUserName){
    this.setState({
      user: [
        {username : newUserName},
        {username : 'Ben'}
      ]
    })
  }

  userInputHandler = (event) =>{
    this.setState({
      user: [
        {username : event.target.value},
        {username : 'Ben'}
      ]
    })
  }
  
  render(){
    const style = {
      padding: '5px',
      backgroundColor: '#eee',
      width: '70%',
      textAlign: 'center',
      margin: 'auto'
    }
    return (
      <div className="App">
        <h1 style={style}>Hi</h1>
        <UserOutput username={this.state.user[0].username}/>
        <UserOutput username={this.state.user[1].username}>He is 2 years old</UserOutput>
        <UserInput changed={this.userInputHandler} username={this.state.user[0].username}/>
      </div>
    );
  }
  
}

export default App;
