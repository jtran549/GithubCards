import React from 'react';
import Card from './Card';
import CardList from './CardList';
import Form from './Form';
import '../css/App.css';

const testData = [
  {name: "Jimmy Tran", company: "Facebook"},
  {name: "DJ Herier", company: "Speedway"},
  {name: "David Williams", company: "KMK Law"}    
]

class App extends React.Component {
  render () {
    return (
      <div className="App-header">
        {this.props.title}
        <Form />
        <CardList profiles={testData}/>
      </div>
    );
  }
}
export default App;
