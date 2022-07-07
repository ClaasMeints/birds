import './App.css';
import React, { Component } from 'react';


class BirdImage extends Component {
  birdnames = new FileReader().readAsText(new File([''], 'birdnames.txt'))?.split("\n");

  url(birdname) {
    console.log('birds:' + this.birdnames);
    return (
      "https://www.nabu.de/downloads/vogelportraets/" + (this.birdnames ? this.birdnames : 'amsel') + ".jpg"
    );
  }

  render() {
    return (
      <img src={this.url(this.birdnames?.at(Math.random() * this.birdnames?.lenght))} className="Bird" alt="bird" />
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BirdImage/>
      </header>
    </div>
  );
}

export default App;
