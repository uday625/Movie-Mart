import React, { Component } from 'react';
import Intro from './Intro/Intro'
import ShowList from './ShowList/ShowList';
import './App.css';



class App extends Component {

  state = {
    series: [

    ]
  }

  // componentDidMount () {
  //  fetch("http://api.tvmaze.com/search/shows?q=Vikings")
  //  .then(response => response.json())
  //  .then(json => this.setState({series:json}))
  // }

  showSearchHandler = (event) =>{
    fetch(`http://api.tvmaze.com/search/shows?q=${event.target.value}`)
    .then(response => response.json())
    .then(json => this.setState({series:json}))

    // console.log(event);
    // console.log(event.target.value);
  }

  render() {
    return (
      <div className="App">
        <Intro msg= "Welcome to Movie Mart!"/>
        <p> The length of the series array - {this.state.series.length}</p>
        <input type="Text" onChange ={this.showSearchHandler}/>
        <ShowList showList = {this.state.series}/>
      </div>
    );
  }
}

export default App;
