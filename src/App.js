import React, { Component } from 'react';
import './App.css';

// const app = {
//   title: "Indecision App",
//   subtitle: "Subtitles",
//   options: ['one', 'two', 'three']
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">  
          <div id="part1">
            <h1>
            {app.title}
          </h1>
          {app.subtitle && <p>{app.subtitle}</p>}
          <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
          <ol>
            {app.options[0] && <li>{app.options[0]}</li>}
            {app.options[3] && <li>{app.options[3]}</li>}
          </ol>
        </div> 
        </header>
      </div>
    );
  }
}

export default App;
