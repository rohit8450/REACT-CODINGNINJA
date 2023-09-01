/** JAVASCRIPT**/
// const heading = document.createElement("h2");
//     heading.textContent="Hello World";
//     heading.className = "header";
//     document.getElementById("root").append(heading);

//     console.log("JAVASCRIPT element: ",heading);

/** REACT with JAVASCRIPT **/

// const reactHeading = React.createElement("h1", {className: "head", children: "Hello React!"});

// ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);

// console.log("React element: ",reactHeading);


/** REACT with JSX */

// const jsxHeading = <React.Fragment>
//     <h1 className="head">Hello JSX</h1>
//     <p>This is created using JSX</p>
//     </React.Fragment>

// ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);



/* Features of REACT*/

const featuresReactJSX =<React.Fragment>
    <h1>About React</h1>
    <h2>Features of React</h2>
    <ul>
    <li> easy to use </li>
    <li> fast </li>
    <li> easy to understand </li>
    <li> single page app </li>
</ul>
</React.Fragment>

ReactDOM.createRoot(document.getElementById("root")).render(featuresReactJSX);
