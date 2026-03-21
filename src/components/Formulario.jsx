import {useState} from "react";
import "../assets/css/FormStyle.css"

const Formulario = () => {

    const opcoes = ["A", "E", "I", "O", "U"];

    const [opcaoSelecionada, setOpcaoSelecionada] = useState("");

    const changeHandler = (e) => {
        setOpcaoSelecionada(e.target.value);
    }

    return (
        <div className="containerf">
            <div className="form-box">
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
            </div>
        </div>
    );
};

export default Formulario;