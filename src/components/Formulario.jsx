import {useState} from "react";

const Formulario = () => {

    const opcoes = ["A", "B", "C"];

    const [opcaoSelecionada, setOpcaoSelecionada] = useState("");

    const changeHandler = (e) => {
        setOpcaoSelecionada(e.target.value);
    }

    return (
        <>
            <h1>Opções</h1>
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
            <p>A nossa opção selecionada é: {opcaoSelecionada}</p>
        </>
    )
}

export default Formulario;