
// function App(){
//     let arr = [1,2,3,4,5,6,7];
//     let obj = {
//         name:"Rohit",
//         age: 10
//     };
//     return(
//         <>
//         <h1>Arrays and Objests in JavaScript</h1>
//         <h2>{arr}</h2>;
//         <h2>{arr.map((num) =>  <h2>{num}</h2>)}</h2>
//         <h2>{obj.name}</h2>
//         </>

//     )
// }

// const rootElement=ReactDOM.createRoot(document.getElementById("root"));
// rootElement.render(<App />)

function App(){

    let cars = ["BMW","Audi","Nexa","Honda","Maruti"];
    return(
        <>
        <h1>List of Cars</h1>
        <ul>
        {cars.map((car,index) => (
            <li key={index}>{car}</li>))}
        </ul>
     
        </>

    )
}

const rootElement=ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />)

