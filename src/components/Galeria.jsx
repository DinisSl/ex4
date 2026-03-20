import figuras from '../assets/json/entidades.json';


    const Entidades= figuras["Entidades"]

    const Entidade = ({nome,img,highlight,desc}) => {


    return (
        <div>
            <h2>
                {nome}
            </h2>
            <img src={img} alt={nome}/>
            <h2>
                {highlight}
            </h2>
            <h4>
                {desc}
            </h4>
        </div>
    )
    }


    const Galeria =() => {


    return(
        <div>
            <h1>
                Participantes
            </h1>
            {Entidades.map(E => <Entidade nome={E.nome} img={E.img} highlight={E.highlight} desc={E.desc} />)}
        </div>
    )
    }

    export default Galeria;