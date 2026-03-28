import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Bilheteira = () => {
    const navigate = useNavigate();

    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);
    const [countC, setCountC] = useState(0);

    const total = countA * 15 + countB * 10 + countC * 25;

    const handleComprar = () => {
        if (total === 0) {
            alert("Selecionar pelo menos um bilhete");
            return;
        }

        setCountA(0);
        setCountB(0);
        setCountC(0);

        navigate('/respotastd', { state: { msg: "Bilhetes comprados com sucesso" } });
    }

    return (
        <>
            <Header />
            <div className="corrida-wrapper">
                <div className="corrida-container">


                    <div className="ticket">
                        <h3>Inscrição Corrida 10km (€15)</h3>
                        <div className="ticket-controlos">
                            <button onClick={() => setCountA(countA > 0 ? countA - 1 : countA)}>-</button>
                            <span>{countA}</span>
                            <button onClick={() => setCountA(countA + 1)}>+</button>
                        </div>
                    </div>


                    <div className="ticket">
                        <h3>Inscrição Caminhada 5km (€10)</h3>
                        <div className="ticket-controlos">
                            <button onClick={() => setCountB(countB > 0 ? countB - 1 : countB)}>-</button>
                            <span>{countB}</span>
                            <button onClick={() => setCountB(countB + 1)}>+</button>
                        </div>
                    </div>


                    <div className="ticket">
                        <h3>Kit Premium (€25)</h3>
                        <div className="ticket-controlos">
                            <button onClick={() => setCountC(countC > 0 ? countC - 1 : countC)}>-</button>
                            <span>{countC}</span>
                            <button onClick={() => setCountC(countC + 1)}>+</button>
                        </div>
                    </div>

                    <h2 className="total-display">Total: €<span>{total}</span></h2>

                    <button className="bt-comprar" onClick={handleComprar}>Comprar</button>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Bilheteira;