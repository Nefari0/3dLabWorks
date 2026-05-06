import React, { Component } from 'react';
import './Loading.css'
import { LoadingSpinnerOverlay } from './loading.styles';

class Loading extends Component {
  render() {
    return (
      <LoadingSpinnerOverlay>
        <div className='load-box'>
          <div className='load-background'></div>
          <div className='load'></div>
        </div>
      </LoadingSpinnerOverlay>
    )
  }
}

export default Loading;