/*import React, {useState} from "react";

 const State = () => {
     const [text,setText] = useState('No click');

     return(
         <div className="container">
             <button onClick={() => setText(!text)}>click me</button>
             <p>{text ? 'click' : 'No click'}</p>
         </div>
     )
 }
 export default State;*/



/*1) Создать любой компонент.Создать для этого компонента новое состояние,
    и две кнопки, одна прибавляет значение на 1, а другая уменьшает на 1.*/
/*import React, { useState } from 'react';

function State() {
    const [text, setText] = useState(0);

    return (
        <div>
            <p>{text}</p>
            <button onClick={() => setText(text + 1)}>
                +1
            </button>
            <button onClick={() => setText(text - 1)}>
                -1
            </button>
        </div>
    );
}
export default State*/

/*2) Создать любой компонент.
    Создать для этого компонента новое состояние, и три кнопки,
    одна увеличивает на 1, другая на 5, третья на 10.*/

import React, { useState } from 'react';

function State() {
    const [text, setText] = useState(0);

    return (
        <div>
            <p>{text}</p>
            <button onClick={() => setText(text + 1)}>
                +1
            </button>
            <button onClick={() => setText(text + 5)}>
                +5
            </button>
            <button onClick={() => setText(text + 10)}>
                +10
            </button>
        </div>
    );
}
export default State


