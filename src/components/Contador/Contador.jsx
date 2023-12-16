import { Button } from "antd";
import { useState } from "react";

const Contador = () => {
    const [contador, setContador] = useState(0)

    const suma = () => {
        contador < 1 && setContador(contador +1)
    }
    const resta = () => {
        contador > 0 && setContador(contador -1)
    }
    return(
        <>
            <Button onClick={resta}>-</Button>
            <p>{contador}</p>
            <Button onClick={suma}>+</Button>
        </>
    )
}

export default Contador