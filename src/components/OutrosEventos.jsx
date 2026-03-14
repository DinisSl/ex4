import img from "../assets/images/malta_parada.png";

const Text = () => {
    return (
        <div id="box4">

                <h2>Eventos de Interesse</h2>
                <h4> EDP Meia Maratona de Lisboa</h4>
                <ul>
                    <li>Março</li>
                    <li>Uma das meias-maratonas mais rápidas do mundo, com partida na Ponte 25 de Abril. Junta dezenas de milhares de participantes todos os anos.</li>
                </ul>
                <h4>EDP Maratona do Porto</h4>
                <ul>
                    <li>Novembro</li>
                    <li>A maratona mais conhecida do Norte do país, com percurso junto ao rio Douro e à zona costeira. Atrai milhares de corredores nacionais e internacionais todos os anos.</li>
                </ul>
                <h4>São Silvestre de Lisboa</h4>
                <ul>
                    <li>Dezembro</li>
                    <li>Corrida noturna de 10 km realizada no final do ano, com ambiente festivo e grande adesão popular, semelhante à São Silvestre do Porto.</li>
                </ul>

        </div>)
}

const Imagem = () => {
    return (
        <div id="box5">
            <img src={img} alt={"malta_parada"}/>
            <figcaption> Em 2025 reunimos atletas de 66 países diferentes. Saiba mais em: <a
                href="https://www.agoraporto.pt/noticias/sao-silvestre-do-porto-reune-atletas-de-66-paises-metade-deles-com-menos-de-35-anos">agoraporto.pt</a>
            </figcaption>
        </div>
    )
}

const OutrosEventos = () => {
    return (
        <>
            <Text/>
            <Imagem/>
        </>
    )
}

export default OutrosEventos;