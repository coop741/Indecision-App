import React, { Component } from 'react';
import Option from './Option';

class Options extends Component {
  render() {
    return (
      <div>
        <p>Options Component Here</p>
        {this.props.options.map((option) =>
          <Option key={option} optionText={option}/>
        )}
        
      </div>
    )
  }
}

export default Options