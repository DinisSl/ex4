import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {useState} from "react";


const Bilheteira = () => {

    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);
    const [countC, setCountC] = useState(0);

    const total = countA*15 + countB*10 + countC*25;
    
    const handleComprar = () => {
        if (total === 0) {
            alert("Selecionar pelo menos um bilhete");
            return;
        }

        alert(`Ficaste ${total}€ mais leve!!!`);

        setCountA(0);
        setCountB(0);
        setCountC(0);
    }

    return (
        <>
            <Header/>
                <div className="corrida-container">

                    <div className="ticket">
                        <h3>Inscrição Corrida 10km (€15)</h3>
                        <button onClick={() => setCountA(countA > 0 ? countA-1 : countA)}>-</button>
                        <span>{countA}</span>
                        <button onClick={() => setCountA(countA+1)}>+</button>
                    </div>

                    <div className="ticket">
                        <h3>Inscrição Caminhada 5km (€10)</h3>
                        <button onClick={() => setCountB(countB > 0 ? countB-1 : countB)}>-</button>
                        <span>{countB}</span>
                        <button onClick={() => setCountB(countB+1)}>+</button>
                    </div>

                    <div className="ticket">
                        <h3>Kit Premium (€25)</h3>
                        <button onClick={() => setCountC(countC > 0 ? countC-1 : countC)}>-</button>
                        <span>{countC}</span>
                        <button onClick={() => setCountC(countC+1)}>+</button>
                    </div>

                    <h2>Total: €<span>{total}</span></h2>

                    <button onClick={handleComprar}>Comprar</button>

                </div>
            <Footer/>
        </>
    )
}

export default Bilheteira;