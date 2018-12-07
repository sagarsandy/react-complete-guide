import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  // State is a javascript object, so that we can use it in render part to render dynamic content.
  state = {
    person : [
      {name : "SS Sagar", age : 22},
      {name : "SS Sandy", age : 23}
    ]
  }


  render() {
    return (
      <div className="App">
        <h1>Hello world !! React</h1>
        <Person name="Sagar" age="28"> </Person>
        <Person name="Sandy" age="10"> <h1>Hey i am just facebook user name </h1></Person>
        <Person name="Naveen" age="18"> </Person>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}> </Person>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}> </Person>
      </div>

      // If we don't have any content to pass for the person object then we can simply call it as <Person />

    );
  }
}

export default App;
