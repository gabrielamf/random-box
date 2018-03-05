import React, { Component } from 'react';
import './App.css';

let bgColor =['aquamarine','tomato','burlywood','pink'];
let fonts = ['font-1', 'font-2', 'font-3'];
let fontColor = ['cornflowerblue','darkorange','gold','hotpink'];

let background = bgColor[Math.floor(Math.random() * bgColor.length)];
let styleFont = fonts[Math.floor(Math.random() * fonts.length)];
let colorFont = fontColor[Math.floor(Math.random() * fontColor.length)];

const boxRandom = { backgroundColor: background, color: colorFont }

class App extends Component {
  render() {
    return (
      <div className="App" style={boxRandom}>
        <h1 className={styleFont}>Random Box</h1>
      </div>
    );
  }
}

export default App;