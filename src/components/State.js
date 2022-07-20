import React, {useState} from "react";

const State = () => {

    let [text, setText] = useState('No click');

    const check = () => {
        if (text === "No click") {
            setText("click");
        } else {
            setText('No click');
        }
    }

    return (
        <div className="container">
            <button onClick={check}>Click me</button>
            <p>{text}</p>
        </div>
    );
}

export default State;



/*
import React, {useState} from "react";

 const State = () => {
     const [text,setText] = useState('No click');

     return(
         <div className="container">
             <button onClick={() => setText(!text)}>click me</button>
             <p>{text ? 'click' : 'No click'}</p>
         </div>
     )
 }
 export default State;
 */



/*
1) Создать любой компонент.Создать для этого компонента новое состояние,
    и две кнопки, одна прибавляет значение на 1, а другая уменьшает на 1.
*/

/*
import React, { useState } from 'react';

function State() {
    const [number, setNumber] = useState(0);

    return (
        <div>
            <p>{number}</p>
            <button onClick={() => setNumber(number + 1)}>
                +1
            </button>
            <button onClick={() => setNumber(number - 1)}>
                -1
            </button>
        </div>
    );
}
export default State
*/

/*
2) Создать любой компонент.
    Создать для этого компонента новое состояние, и три кнопки,
    одна увеличивает на 1, другая на 5, третья на 10.
*/

/*
import React, { useState } from 'react';

function State() {
    const [number, setNumber] = useState(0);

    return (
        <div>
            <p>{number}</p>
            <button onClick={() => setNumber(number + 1)}>
                +1
            </button>
            <button onClick={() => setNumber(number + 5)}>
                +5
            </button>
            <button onClick={() => setNumber(number + 10)}>
                +10
            </button>
            <button onClick={() => setNumber(0)}>Clear</button>
        </div>
    );
}
export default State
*/


