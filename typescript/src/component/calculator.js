
// import { stat } from "fs";
// import React, { useState } from "react";

// function Calclator() {

//     // const [state, setstate] = useState('')
//     const handlechange = (e) => {

//         // if (e < 9) {
//             console.log(e)
//         //     setstate(
//         //         state=e
//         //     )
//         // }

//     }
//     return (
//         <div>
//             <div>
//                 <div>
//                     <div>
//                        {/* <input type="text"></input> */}
//                     </div>

//                     <div>
//                         <button onClick={() => handlechange(1)}>1</button>
//                         <button onClick={() => handlechange(2)}>2</button>
//                         <button onClick={() => handlechange(3)}>3</button>
//                         <button onClick={() => handlechange(4)}>4</button>
//                         <button onClick={() => handlechange(5)}>5</button>
//                         <button onClick={() => handlechange(6)}>6</button>
//                         <button onClick={() => handlechange(7)}>7</button>
//                         <button onClick={() => handlechange(8)}>8</button>
//                         <button onClick={() => handlechange(9)}>9</button>
//                         <button onClick={() => handlechange(0)}>0</button>
//                         <button onClick={() => handlechange('+')}>+</button>
//                         <button onClick={() => handlechange('-')}>-</button>
//                         <button onClick={() => handlechange('*')}>*</button>
//                         <button onClick={() => handlechange('/')}>/</button>
//                         <button onClick={() => handlechange('=')}>=</button>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Calclator

import React, { useState } from "react";
import Display from "./display";
import Element from "./element";
import "./calculator.css"

function Calculator() {

    const [expression, setExpression] = useState("");


    const handleClick = (value) => {

        if (value === "=") {
            try {

                setExpression(eval(expression).toString());
            } catch (error) {
                setExpression("Error");
            }


        } else if (value === "C") {

            setExpression("");

        } else {

            setExpression((prev) => prev + value);
        }
    };

    return (
        <div className="calculator">
            {/* <div>
                <input type="text" value={expression} readOnly />
            </div>
            <div>
                <button onClick={() => handleClick("1")}>1</button>
                <button onClick={() => handleClick("2")}>2</button>
                <button onClick={() => handleClick("3")}>3</button>
                <button onClick={() => handleClick("4")}>4</button>
                <button onClick={() => handleClick("5")}>5</button>
                <button onClick={() => handleClick("6")}>6</button>
                <button onClick={() => handleClick("7")}>7</button>
                <button onClick={() => handleClick("8")}>8</button>
                <button onClick={() => handleClick("9")}>9</button>
                <button onClick={() => handleClick("0")}>0</button>
                <button onClick={() => handleClick("+")}>+</button>
                <button onClick={() => handleClick("-")}>-</button>
                <button onClick={() => handleClick("*")}>*</button>
                <button onClick={() => handleClick("/")}>/</button>
                <button onClick={() => handleClick("=")}>=</button>
                <button onClick={() => handleClick("C")}>C</button>
            </div> */}
            <div>
                <Display value={expression} />
            </div>
            <div>
                <Element handleClick={handleClick} />
            </div>
        </div>
    );
}

export default Calculator;          