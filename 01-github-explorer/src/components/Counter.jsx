import { useState } from "react";
//toda função react que começar com "use" é chamada de hook

export function Counter() {
    const [counter, setCounter] = useState(0)
    //useState retorna um array: [0]=valor, [1]=função que atualiza o valor
    
    function increment() {
        setCounter(counter + 1)
    }
    return(
        <> 
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>Increment</button>
        </>
        //react fragment => tag sem valor que não é renderizada em tela
    );
}