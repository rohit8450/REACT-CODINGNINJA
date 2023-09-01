
function sum(){
    let a =10+5;
  
    return a ;     
}

const header = <h1>JSX Expression</h1>


function App(){
    // declare variable
    var name ="Rohit";
    var age = 24;
    let demo1 = null;
    let demo2 = undefined;
    const bool = true;
    return(
        <>
    <h1>JS inside JSX{name}</h1>
    {header}
    <p>Name:{name}</p>
    <p>Age:{age}</p>
    <p>Null value:{demo1}</p>
    <p>undefined value:{demo2}</p>
    <p>boolean value:{bool}</p>
    <p>Sum of a is:{sum()}</p> 
      
        </>
        
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);