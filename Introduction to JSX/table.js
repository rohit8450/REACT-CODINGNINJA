// function App(){
//     let students = [
//         {
//             name: "Rohit",
//             age:25,
//             marks:50
//         },
//         {
//             name: "Ankit",
//             age:24,
//             marks:60
//         },
//         {
//             name: "Tipu",
//             age:26,
//             marks:65
//         },
//         {
//             name: "Kartik",
//             age:23,
//             marks:70
//         }
//     ];
//     return(
//         <>
//     <h1>Students Details</h1>
//     <table>
//         <thead>
//         <tr>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Marks</th>
//             </tr>
//         </thead>
//        <tbody>
//        {students.map((student,index) => (
//                  <tr key={index}>
//                  <td>{student.name}</td>
//                  <td>{student.age}</td>
//                  <td>{student.marks}</td>
//              </tr>
//             ))}
//        </tbody>
           
           
//     </table>
//         </>
//     )
// }

// const rootElement=ReactDOM.createRoot(document.getElementById("root"));
// rootElement.render(<App />)


// Car details

function App(){
    // declare variables
    let cars = [
        {
        name: "BMW",
        average:15,
        colour:"Blue",
        img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Fpremium-psd%2Fsport-car-transparent-background-3d-rendering-illustration_494250-40917.jpg&tbnid=l25vX8yEh8WycM&vet=12ahUKEwiEuZucm4GBAxWbS2wGHS6VD18QMygAegQIARAz..i&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fcar-png&docid=k2gkn4X8_mLNaM&w=626&h=501&q=car%20image%20.png&ved=2ahUKEwiEuZucm4GBAxWbS2wGHS6VD18QMygAegQIARAz"
        },
        {
            name : "Audi",
            average:12,
            colour: "Black"
        },
        {
            name:"RR",
            average:10,
            colour:"White"

        }
    ];
    return(
        <>
        <h1>Cars Details</h1>
        <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Average</th>
            <th>Colour</th>
        </tr>
        </thead>
        <tbody>
        {cars.map((car,index) => (
            <tr key={index}>
                 <td>{car.name}</td>
                 <td>{car.average}</td>
                 <td>{car.colour}</td>
                 <td><img src={car.img}/></td>
            </tr>
           
        )) }
        </tbody>
        </table>
        </>

    )
}

const rootElement=ReactDOM.createRoot(document.getElementById("root"));
rootElement.render( <App />)