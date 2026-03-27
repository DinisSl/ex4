import { Link } from 'react-router-dom'; // 1. Import the Link component

const Header = () => {
    return (
        <>

            <header>

            </header>

            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/formcandidatura">Formulário</Link>
                    </li>
                    <li>
                        <Link to="/bilheteira">Bilhetes</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default Header;