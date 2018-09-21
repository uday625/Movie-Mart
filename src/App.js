import React, { Component } from 'react';
import Intro from './Intro/Intro'
import ShowList from './ShowList/ShowList';
import './App.css';



class App extends Component {

  state = {
    series: [

    ],
    seriesName: "",
    isFetching: false
  }

  // componentDidMount () {
  //  fetch("http://api.tvmaze.com/search/shows?q=Vikings")
  //  .then(response => response.json())
  //  .then(json => this.setState({series:json}))
  // }

  showSearchHandler = (event) =>{
    this.setState ({seriesName:event.target.value, isFetching:true})

    fetch(`http://api.tvmaze.com/search/shows?q=${event.target.value}`)
    .then(response => response.json())
    .then(json => this.setState({series:json, isFetching:false}))

    // console.log(event);
    // console.log(event.target.value);
  }

  render() {
    const {series, seriesName, isFetching} = this.state;

    return (
      <div className="App">
        <Intro msg= "Welcome to Movie Mart!"/>
        <p> The length of the series array - {this.state.series.length}</p>
        <input type="Text" value= {seriesName} onChange ={this.showSearchHandler}/>
        {
          isFetching && <p> Loading ...</p>
        }
        {
          !isFetching && <ShowList showList = {series} seriesname ={seriesName}/>
        }
        
      </div>
    );
  }
}

export default App;
