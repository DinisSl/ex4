import "../assets/css/styles.css"
import "../components/Header.jsx"
import Header from "../components/Header.jsx";
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