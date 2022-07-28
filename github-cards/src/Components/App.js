import React from 'react';
import Card from './Card';
import CardList from './CardList';
import '../css/App.css';

class App extends React.Component {
  render () {
    return (
      <div className="App-header">
        {this.props.title}
        <CardList />
      </div>
    );
  }
}
export default App;
