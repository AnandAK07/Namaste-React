import React from "react";
import { createRoot } from "react-dom/client";

// ReactElement(Object)==>HTML(Browser)
let heading = React.createElement(
  "h1",
  { id: "heading", xyz: "random" },
  "Hello world from React!!!"
);
console.log(heading);
// this is no developer freindly

// JSX = FB developer devloped to make to developer life easy
// JSX(transpiled before it reaches to JS engine)-- Parcel(it's manager to give the responsibilty to Babel) -- Babel(Js compiler or transpiler) it's job convert jsx to react code
let jsxHeading = (
  <h1 id="jsxHeading" className="jsxHeading" tabIndex="1">
    Namaste React using JSX
  </h1>
);
// JSX is not html inside in js
// it's html "like" syntax or XML like syntax
// heading = jsxHeading
// This code look easy then React.createElement
// JS engine doesn't understand this JSX. JS engine only understand ECMAScript
// Browser will not understand this JSX
// parcel doing this this code is transpled(converted to ) before it the js engine. JS engine receive the code that browser understand
console.log("jsxHeading", jsxHeading);
// We can prove that JSX is not HTML ex: we use class(HTML) but className(JSX)
// If we want to use Attribute in JSX it's camelCase
// if we write multi line we need to write in () bracket

// Babel it's npm package
// Babel(Js compiler or transpiler) it's job convert jsx to react code
// JSX==>React.createElement==>React Object==>HTML element(render)
// Babel will contert ES6 code to old JS that older browser understand

// React Component(Every thing in React is Component)
// 2 Types of Component
// 1.Class based component
// 2.Functional component

// Functional component(it's just JS function)
// Name it with Capital letter
// A function which return JSX is a Funcational component
// or A function which returning React element is a Functional component

const spanTitle = <span>Hello</span>;

// we can normal function also instead of array function
const Title = function () {
  return <h1>{spanTitle} This is Title Component</h1>;
};
let age = 25;

// const data = api.getValue();
// if the atacker can write js they can steal cookies it's known as Cross site scripting
// JSX this injection atack
// it will sanitize the data

const Heading = () => {
  return (
    <div id="container">
      {/* Component composition using compositing component's is know as
      Component composition */}

      {/* All are same */}
      <Title />
      <Title></Title>
      {Title()}
      {/* we can write any JS inside {} */}
      <p>{age * 2}</p>
      {console.log("Hello world", age)}
      <h1 id="heading" className="classHeading">
        Namaste react Functional Component
      </h1>
    </div>
  );
};

const Heading2 = () => <h1>Namaste react Functional Component</h1>;
// (<h1>Namaste react Functional Component</h1>) both are same

let root = createRoot(document.getElementById("root"));
// root is resposible to convert react element obj into the html that browser understand
// root.render(jsxHeading);
root.render(<Heading />);
