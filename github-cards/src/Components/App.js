import React from 'react';
import Card from './Card';
import '../css/App.css';

class App extends React.Component {
  render () {
    return (
      <div className="App-header">
        {this.props.title}
        <Card />
      </div>
    );
  }
}
export default App;
