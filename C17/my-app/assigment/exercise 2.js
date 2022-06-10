import React from 'react';

const {useState} = React;

function App (){
    const[count,setCount] = useState(0);

    return(
        <div className="app">
            <h1>{count}</h1>
        <div className={button}>
            <buton onClick={()=>setCount(count-1)}>-</buton>
            <button onClick={{()=>setCount(count+1)}}>+</buttononClick>
        </div>
        </div>

    );
}

ReactDOM.renser(<App />>, document.getElementById("root"));