import React, { Component } from 'react';
import Intro from './Intro/Intro'
import './App.css';


class App extends Component {

  state = {
    series: [

    ]
  }

  componentDidMount () {
    const series = ["Vikings", "Game of Thrones"];

    setTimeout(() =>{
      this.setState ({series})
    }, 2000
    );
  }

  render() {
    return (
      <div className="App">
        <Intro msg= "Welcome to Movie Mart!"/>
        <p> The length of the series array - {this.state.series.length}</p>
      </div>
    );
  }
}

export default App;
