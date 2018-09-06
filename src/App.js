import React, { Component } from 'react';
import Button from './Button.js';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { color: [186, 218, 85] };
    this.handleClick = this.handleClick.bind(this);
  };

  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  handleClick() {
    this.setState({ color : this.chooseColor() });
  }

  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random()*256));
    }
    return random;
  }

  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }

  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a,b) => a+b) < 127 * 3;
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  render() {
    return (
      <div>
        <h1 className={this.isLight() ? 'white' : 'black'}>
          Your color is {this.formatColor(this.state.color)}.
        </h1>
        <Button onClick={this.handleClick} light={this.isLight()} />
      </div>
    );
  }
}

export default App;
