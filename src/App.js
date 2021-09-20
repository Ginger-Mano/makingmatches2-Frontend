import { data } from 'browserslist';
import React, { Component } from 'react';


class App extends Component {

  state = {
    dataArr: []
  }

  componentDidMount() {
    fetch(`http://localhost:3000/cards`)
    .then(res => res.json())
    .then(dataArr => console.log(dataArr))
  }

  render () {
    return (
      <div className="App">
  
       <h2>Test</h2>

      </div>
    );
  }
  }

export default App;
