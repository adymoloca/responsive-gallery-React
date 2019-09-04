import React, { Component } from 'react';
import { ImageBox } from './components/image-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      images: []
    };
  }

  componentDidMount() {
    fetch('https://picsum.photos/v2/list')
      .then(response => response.json())
      .then(image => this.setState({images: image}))
      .catch(err => console.log(err));
  }

  render() {
    return ( 
      <div>
        <ImageBox images={this.state.images}/>
      </div>
    );
  }
}

export default App;
