import { data } from 'browserslist';
import React, { Component } from 'react';
import Cards from "./Cards"


class App extends Component {

  state = {
    dataArr: [],
    flipped: false
  }

  componentDidMount() {
    fetch(`http://localhost:3000/cards`)
    .then(res => res.json())
    .then(dataArr => 
      this.setState({dataArr: dataArr})
    )}

  render () {
    let memoryCards = this.state.dataArr.map(memoryCard =>  <Cards memoryCard={memoryCard} flipped={this.state.flipped}/>)
    return (
      <div className="App">
  
       <h2>Test</h2>
      {memoryCards}
      </div>
    );
  }
 
  }

export default App;
