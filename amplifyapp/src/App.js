import './App.css';
import React, { Component } from 'react';
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

function App() {
  const birds = Array.from({length: 4}, () => birdnames[Math.floor(Math.random() * birdnames.length)]).flat();
  const correctBird = birds[Math.floor(Math.random() * 4)];

  return (
    <div className="App">
      <header className="App-header">
        <div class="container">
          <QuizButton lettre = 'A' birdname = {birds[0]} bird = {correctBird}/>
          <QuizButton lettre = 'B' birdname = {birds[1]} bird = {correctBird}/>
          <QuizButton lettre = 'C' birdname = {birds[2]} bird = {correctBird}/>
          <QuizButton lettre = 'D' birdname = {birds[3]} bird = {correctBird}/>
          <BirdImage birdname = {correctBird}/>
          <button class='Next' onClick={() => window.location.reload(false)} >Next Bird</button>
        </div>
      </header>
    </div>
  );
}

export default App;
