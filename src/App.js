import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // css class names should be included as className instead of class
    // return (
    //   <div className="App">
    //     <h1>Hello world !! React</h1>
    //   </div>
    // );

    // Another way of rendering elements
    // return React.createElement('div', {className : 'App'}, 'Hello world');
    //The above line will create a div element with css class App and text in that div as 'Hello world'

    // Incuding two or more elements.
    // return React.createElement('div', {className : 'App'}, React.createElement('h1', 'null', 'This is h1 Text'));
     // In the above example, we've rendered two elemetns. So the pattern is first elelmet type and followed by element css class name and actual content.
     // If there is no css then you can simply mention null.


     // So finally you can create elements using react also, but the first return code block is jsx code, and second and third
     // return statements are normal react elements, it is always good practice to use jsx code.

     return (
       <div className="App">
         <h1>Hello world !! React</h1>
       </div>
     );


    // What is jsx?
    /* jsx is a react html code, which means react it self has it's own html code base. The code writeen in the jsx will be compiled and converted to normal html.
    The clear difference is, in above return statement we've used className instead of class. Becuase class is a reserved keyword in the react, we are using className.
    Behind the scence react will compile all the code and will conver to normal html. In the above code block we've div element, this is alos not a actual html element.
    This is react div element, while compiling the code, react converts this div to normal html div.

    And the other point is, we cannot return multiple div's in a single return block, whatever we've to write, need to be written in single div element.

    */
  }
}



























export default App;
