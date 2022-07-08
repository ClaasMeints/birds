import './App.css';
import React, { Component, useState, useEffect } from 'react';
import { birdnames } from './birdnames'

class BirdImage extends Component {
  birdname = '';
  constructor(props) {
    super(props);
    this.birdname = props.birdname;
  }

  url() {
    return (
      "https://www.nabu.de/downloads/vogelportraets/" + this.birdname + ".jpg"
    );
  }

  render() {
    return (
      <img src={this.url()} className="Bird" alt="bird" />
    );
  }
}


class QuizButton extends Component {
  lettre = 'A';
  birdname = '';
  bird = ''
  constructor(props) {
    super(props);
    this.lettre = props.lettre;
    this.birdname = props.birdname;
    this.bird = props.bird;
    this.state = {
      bgcolor: 'slategray'
    }
  }

  capitalize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  handleOnClick = () => {
    console.log(this.bird);
    this.setState({
      bgcolor: (this.bird === this.birdname ? "green" : "red")
    })
  }

  render() {
    return (
      <button class={this.lettre} onClick={this.handleOnClick} style={{backgroundColor: this.state.bgcolor}}>{this.capitalize(this.birdname)}</button>
    );
  }
}

class Fibonacci extends Component {
  state = { fibonacci: ''}

  fetchData = () => {
    return fetch("https://k7xhurqu49.execute-api.eu-west-1.amazonaws.com/default/function")
          .then((response) => response.json())
          .then((data) => this.setState({ fibonacci: data}));
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return(
      <div>
        {this.state.fibonacci}
      </div>
    )
  }
}

function App() {
  const birds = Array.from({length: 4}, () => birdnames[Math.floor(Math.random() * birdnames.length)]).flat();
  const correctBird = birds[Math.floor(Math.random() * 4)];

  return (
    <div className="App">
      <header className="App-header">
        <div class="container">
        <Fibonacci/>
        </div>
      </header>
    </div>
  );
}

export default App;
