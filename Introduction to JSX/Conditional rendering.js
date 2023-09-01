
// Conditional Operator using Terinary opertor
// function App(){
//     let loggedIn = true;
//     let Surname = true;
//     return(
//         <>
//         <h1>Hello {loggedIn?"Alexa":"User"}</h1>
//         <h2>Rohit{Surname? "Singh":"Thakur"}</h2>
//         </>

//     )
// }


// Conditional Operator using && AND Operator

function App(){
    let loggedIn = true;
    let name = "Rohit"
    let lastname = "Thakur"
    return(
        <>
    <h1>Hello {loggedIn? lastname || name:"Alexa"}!</h1>
    {loggedIn && <p>Welcome to the Portal</p>}
        </>
    )
}

// Conditional Operator using || OR operator



const rootElement=ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);