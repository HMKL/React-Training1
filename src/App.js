import React, { Component } from 'react';
import MyHeader from './components/Header'; 
import ColorChooser from './components/ColorChooser';
import './App.css';


class App extends Component {
  state = {
    selectedColor: ""
  }

  onColorChange = (event) => {
    this.setState({
      selectedColor: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
      <MyHeader 
      title={"Hello React-Demo" }
      color={this.state.selectedColor}
      />
      <div>
        <ColorChooser 
        selectedColor={this.state.selectedColor}
        onColorChange={this.onColorChange}
        />
      </div>
      </div>
    );
  }
}

export default App;