import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  addData(event){
    event.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(json => {
    console.log(json.title);
      this.setState({
        title: json.title,
        body: json.body,
        id: json.id,
        userId: json.userId
      });
    })
    
  }
  
  constructor(){
    super();
    this.addData = this.addData.bind(this);
    
    this.state = {
      title: "my-app",
      body: "this will change",
      id: "this is ID",
      userId: "this is userID"
    }
    
  }


  render() {
    let title = this.state.title;
    let body = this.state.body;
    let id = this.state.id;
    let userId = this.state.userId;
    return (
      <div className="App">
        <h1>{title}</h1>
        <p>{body}</p>

        <h1>{id}</h1>

        <h1>{userId}</h1>
        <button onClick={this.addData}>My button</button>
      </div>
    );
  }
}

export default App;
