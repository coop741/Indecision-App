import React, { Component } from 'react';
import Option from './Option';

class Options extends Component {
  

  render() {
    return (
      <div>
        <p>Options Component Here</p>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {this.props.options.map((option) =>
          <Option key={option} optionText={option}/>
        )}
        
      </div>
    )
  }
}

export default Options