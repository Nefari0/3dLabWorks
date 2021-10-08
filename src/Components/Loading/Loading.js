import React, { Component } from 'react';
import './Loading.css'

class Loading extends Component {
  render() {
    return (
      <div className='load-box'>
      <div className='load-background'></div>
      <div className='load'></div>
    </div>
    )
  }
}

export default Loading;