const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am an H1 Element"),
    React.createElement("h2", {}, "I am an H2 Element"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an H1 Element"),
    React.createElement("h2", {}, "I am an H2 Element"),
  ]),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
console.log( typeof root);
root.render(parent);
