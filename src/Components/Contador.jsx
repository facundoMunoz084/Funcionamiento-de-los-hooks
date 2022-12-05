import { useEffect, useState } from "react"

const Contador = () => {
    const[cuenta,setCuenta] = useState(100)
    const aumentar = () => {
        setCuenta(cuenta + 1);
    };

    const disminuir = () => {
        setCuenta (cuenta - 1 );
    };

    const reset = () => {
        setCuenta(cuenta * 0);
    }
     useEffect(() => {
        return console.log(`El contador va en ${cuenta}`);
}, [cuenta]);

return (
    <div>
        <center>
            <h1>{cuenta}</h1>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={disminuir}>Disminuir</button>
            <button onClick={reset}>Resetear</button>
           
        </center>
    </div>
);
}

export default Contador;