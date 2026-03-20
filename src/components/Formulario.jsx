import {useState} from "react";

const Formulario = () => {

    const opcoes = ["A", "E", "I", "O", "U"];

    const [opcaoSelecionada, setOpcaoSelecionada] = useState("");

    const changeHandler = (e) => {
        setOpcaoSelecionada(e.target.value);
    }

    return (
        <>
            <h1>Qual a melhor vogal de todas?</h1>
            {
                opcoes.map
                (o =>
                    <>
                        <label>
                            <input
                                name="grp1"
                                type="radio"
                                value={o}
                                onChange={changeHandler}
                            />{o}
                        </label>
                        <br/>
                    </>
                )
            }
            <button onClick={() => alert("A melhor vogal de todos os tempos é " + opcaoSelecionada)}>Submeter</button>
        </>
    )
}

export default Formulario;