import "../assets/css/styles.css"
import "../components/Header.jsx"
import Header from "../components/Header.jsx";
import Contador from "../components/Contador.jsx";
import Slideshow from "../components/Slideshow.jsx";
import Table from "../components/Table.jsx";

const Homepage = () => {
    return (
        <>
            <Header/>
            <main>

                <Contador/>
                <Slideshow/>
                <Table/>
            </main>
        </>
    )
}

export default Homepage;