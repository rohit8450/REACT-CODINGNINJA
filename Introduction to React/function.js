/* created using function component */

// function App(){
//     return(
//       <>
//       <h1 className="head">Hello JSX</h1>
//       <h1 className="head"> React Project</h1>
        
//         <p> Skills used to make this project</p>
        
//         <ol>
//         <li>HTML</li>
//         <li>javaScript</li>
//         <li>CSS</li>
//           </ol>

//       </>
// )
// };

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

/* created using arrow function component */

// const App = () => (
//     <>
//      <h1 className="head">Hello JSX</h1>
//       <h1 className="head"> React Project</h1>
        
//         <p> Skills used to make this project</p>
        
//         <ol>
//         <li>HTML</li>
//         <li>JavaScript</li>
//         <li>CSS</li>
//           </ol>
//     </>
// );

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

/* created using arrow function component MORE THEN ONE COMPONENTS */

function Name(){
    return(
        <>
        <h1 className="head">Hello JSX</h1>
         <h1 className="head"> React Project</h1>
           
           <p> Skills used to make this project</p>
           
           <ol>
           <li>HTML</li>
           <li>JavaScript</li>
           <li>CSS</li>
             </ol>
       </>
    )
}

const App = () => (
    <>
     <h1 className="head">Hello JSX</h1>
      <h1 className="head"> React Project</h1>
        
        <p> Skills used to make this project</p>
        
    </>
)

ReactDOM.createRoot(document.getElementById("root")).render(<><App /><Name /></>);