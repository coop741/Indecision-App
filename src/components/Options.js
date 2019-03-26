import React, { Component } from 'react';
import Option from './Option';

class Options extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this)
  }
  
  handleRemoveAll() {
    // alert('Removed All!')
    console.log(this.props.options)
  }

  render() {
    return (
      <div>
        <p>Options Component Here</p>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {this.props.options.map((option) =>
          <Option key={option} optionText={option}/>
        )}
        
      </div>
    )
  }
}

export default Options