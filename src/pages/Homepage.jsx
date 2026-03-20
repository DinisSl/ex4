import "../assets/css/styles.css"
import Header from "../components/Header.jsx";
import Contador from "../components/Contador.jsx";
import Slideshow from "../components/Slideshow.jsx";
import Table from "../components/Table.jsx";
import Descricao from "../components/Descricao.jsx";
import Parceiros from "../components/Parceiros.jsx";
import OutrosEventos from "../components/OutrosEventos.jsx";
import Footer from "../components/Footer.jsx";
import Galeria from "../components/Galeria.jsx";
import Formulario from "../components/Formulario.jsx";

const Homepage = () => {
    return (
        <>
            <Header/>
            <main>
                <Contador/>

                <div className="container">
                    <Slideshow/>
                    <Descricao/>
                    <Parceiros/>
                    <Galeria/>
                    <OutrosEventos/>
                    <Table/>
                </div>
                <Formulario/>
            </main>
            <Footer/>
        </>
    )
}

export default Homepage;