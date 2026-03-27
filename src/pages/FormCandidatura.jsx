import React, { useState } from 'react';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const FormCandidatura = () => {
    const palavrasObscenas = ["alcoviteiro", "biltre", "beocio", "beócio", "calhorda", "energúmeno", "energumeno", "janota", "mentecapto",
    "mequetrefe", "mocorongo", "paspalho", "palerma", "patife", "pulha", "purgante", "sacripanta"];

    const [comentario, setComentario] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handlePalavrasObscenas = (e) => {
        const novoTexto = e.target.value;
        setComentario(novoTexto);

        const lowerCase = novoTexto.toLowerCase();

        const plvrObscenaEncontrada =
            palavrasObscenas.filter((word) => lowerCase.includes(word.toLowerCase()));

        setMensagem("Modere a sua linguagem. Precisa de pimenta na língua!");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Dados do formulário submetidos!");
    };

    return (
        <>
            <Header/>
            <div className="container">
            <div id="box0-container">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="nome">Nome:</label><br/>
                        <input type="text" name="nome" id="nome"/>
                        <br/><br/>

                        <label htmlFor="indicativo">Telemóvel:</label><br/>
                        <div id="phone-container">
                            <select name="indicativo" id="indicativo">
                                <option value="+351">+351 (Portugal)</option>
                                <option value="+34">+34 (Espanha)</option>
                                <option value="+33">+33 (França)</option>
                            </select>

                            <input type="tel" name="telemovel" id="telemovel"
                                   pattern="[0-9]{9}"
                                   placeholder="9 dígitos"
                            />
                        </div>
                        <br/>

                        <label htmlFor="email">Email:</label><br/>
                        <input type="email" name="email" id="email"/>
                        <br/><br/>

                        <label htmlFor="data_inicio">Data de início:</label><br/>
                        <input type="datetime-local" name="data_inicio" id="data_inicio"/>
                        <br/><br/>

                        <label htmlFor="data_fim">Data fim:</label><br/>
                        <input type="datetime-local" name="data_fim" id="data_fim"/>
                        <br/><br/>
                    </div>

                    <label>Tarefa a realizar</label>
                    <fieldset>
                        <label><input type="radio" name="gr1" value="agua"/>Distribuir águas</label><br/>
                        <label><input type="radio" name="gr1" value="peitorais"/>Entregar os peitorais</label><br/>
                        <label><input type="radio" name="gr1" value="medalhas"/>Entregar medalhas na meta</label><br/>
                        <label><input type="radio" name="gr1" value="limpezas"/>Apoiar nas limpezas</label>
                    </fieldset>
                    <br/>


                    <label htmlFor="comentario">Comentário sobre o evento:</label><br/>
                    <textarea
                        name="comentario"
                        rows="4"
                        value={comentario}
                        onChange={handlePalavrasObscenas}
                    ></textarea>

                    <p id="mensagem" style={{ color: 'red' }}>{mensagem}</p>


                    <input id="submit-button" type="submit" value="Enviar resposta"/>
                </form>
            </div>

            <div id="box1-container">
                <img src="/voluntarios.png" alt="voluntários"/>
            </div>

        </div>
            <Footer/>
        </>
    );
}

export default FormCandidatura;