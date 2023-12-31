 // using Arrow function
let score = 0;
let wicket = 0;

function addOne(){
    score += 1;
    // console.log(score);
    // re-render the component again to display the score updates
    rootElement.render(<App/>);
}
function addTwo(){
    score += 2;
    // console.log(score);
    // re-render the component again to display the score updates
    rootElement.render(<App/>);
}
function addScore(num){
    if(wicket < 10){
    score += num;
    // console.log(score);
    // re-render the component again to display the score updates
    rootElement.render(<App/>);
}
}


function addWicket(){
    if(wicket < 10)
    wicket += 1;
    rootElement.render(<App/>);
}


 const App = () => (
    <>
<h1>SCORE KEEPER</h1>
<h2>SCORE : {score}/{wicket}</h2>
<div>
    <button onClick = {addOne}>1</button>
    <button onClick = {addTwo}>2</button>
    <button onClick = {() => addScore(3)}>3</button> 
    <button onClick = {() => addScore(4)}>4</button>
    <button onClick = {() => addScore(5)}>5</button>
    <button onClick = {() => addScore(6)}>6</button>
    <button onClick = {addWicket}>wicket</button>

</div>
    </>
 )

 const rootElement = ReactDOM.createRoot(document.getElementById("root"));
 rootElement.render(<App/>);