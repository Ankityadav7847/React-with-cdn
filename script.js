// if we want to create more items in root

// const heading = React.createElement("h1", {
//             // here in this object we can pass these ids or any attribute we want
//             id: "title"
//         }, "Create DOM element in React");

const heading = React.createElement("h1", { id: "title" }, "Heading1");

const heading2 = React.createElement("h2", { id: "title" }, "Heading1");

const container = React.createElement("div", { id: "container" }, [
  heading,
  heading2,
]);

// React is nothing but an object at the end of the day
console.log(heading);

// React would need to know where we put these stuff so we need {root}, so we create it, this is the single place where we are injecting our react app, Everything we will build will build inside it
const root = ReactDOM.createRoot(document.getElementById("root"));

//  Commonly we have only one root and 1 render method
// Passsing a React element inside the root
// root.render(heading);
root.render(container);
