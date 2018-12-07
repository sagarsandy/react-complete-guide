import React from 'react';

// Remember this is a function component not class component


const person = (props) => {

  // Static html code
  // return <p> I'm a person</p>

  // Including basic js function in the jsx, so you can include dynamic codebase inside {} just like {{}} in other twig files
  // return <p> I am a person with age {Math.floor(Math.random() * 50)} years </p>


  // Using function arguments, you will get only one argument object. You can name it whatever you want, but the conventional name is props.
  // return <p> I am a {props.name} with age {props.age} years </p>


  // Rendering multiple elemetns and childrens of the props.
  return (
    <div>
      <p> I am {props.name} with age {props.age} </p>

      <p> {props.children} </p>
    </div>
  )

  // In the above example we've rendered props.children, props.children is nothing but what ever we've mentioned with in the Person component while calling it from other components.
  // FOr now just check the App.js there we've mentioned three person components, but only middle one have extra content. For that component only this props.children block eill be rendered.


};

export default person;



/*
This a Component, remember we need to import react in every file, because we are writing jsx code, so inorder to compile it
to normal html code, we need to import react.
*/

/*

What is a component?

A component is a simple function which returns jsx code.

*/

/*
person is a method here, and it's syntax is in ES6, just remember closures  :D
*/


// Inside the person class we are rendering and returning jsx code

// Finally we need to export this person, so that we can use this in other js files.

// Usage in other files:
// 1. Wherever you are using this componenet, first you need to import this componenet, check app.js for now in this commit.
// 2. You just need to mention <Person> </Person> to render this element, so that it will be rendered. In a shorter way you can just mention <Person />
