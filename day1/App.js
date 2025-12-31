/***
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm an h1 tag</h1>
 *      </div>
 * </div>
 * ReactElement(Object)==>HTML(Browser)
 * **/ 

let parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h2", { id: "heading" }, "Heading nested"),
    React.createElement("h3", { id: "heading3" }, "Heading nested2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h2", { id: "heading" }, "Heading nested"),
    React.createElement("h3", { id: "heading3" }, "Heading nested2"),
  ]),
]);
// this is not making our life better it's making our life worse JSX
let heading = React.createElement(
  "h1",
  { id: "heading", xyz: "random" },
  "Hello world from React!!!"
);
console.log(parent);
let root = ReactDOM.createRoot(document.getElementById("root"));
// root is resposible to convert react element obj into the html that browser understand
root.render(parent);
