import img1 from "../assets/images/malta_correr.png";

const Texto = () => {
    return (
        <div id="box1">
            <h2>S. Silvestre Cidade do Porto</h2>
            <h3>28 Dezembro 2026</h3>
            <p>A <span style={{ color: 'blue' }}>Lidl</span> S. Silvestre Cidade do Porto irá voltar com o objetivo de cumprir a tradição e encher as ruas da Invicta, tentando reunir bastantes participantes naquela que é uma das provas mais emblemáticas do atletismo nacional.</p>
            <p>A corrida <strong>terá início às 18h00</strong>, na Avenida dos Aliados, e termina junto à Câmara Municipal do Porto, num percurso marcado por um ambiente festivo, grande adesão popular e forte apoio do público ao longo de todo o trajeto. O tiro de partida vai ser dado pelo presidente da Câmara Municipal do Porto, Pedro Duarte, acompanhado pelo vereador Rodrigo Passos, Paulo Santos, vice-presidente do IPDJ, João Duarte, diretor-geral do Lidl Portugal, o apresentador Jorge Gabriel e o futebolista internacional português Pepe.</p>
            <p>Após o final da prova, irá haver a <strong>cerimónia de pódio</strong>, junto à meta. Durante este momento simbólico, será entregue uma lembrança à Câmara Municipal do Porto e ao Lidl, naming sponsor do evento. A entrega é realizada por Jorge Teixeira, Diretor-Geral da Runporto, o apresentador Jorge Gabriel e o internacional português Pepe.</p>
            <p>A entrega dos prémios aos vencedores conta com a presença de Pedro Duarte, Presidente da Câmara Municipal do Porto, Paulo Santos, vice-presidente do IPDJ e João Duarte, Diretor-Geral do Lidl Portugal.</p>
        </div>
    )
}


const Imagem = () => {
    return (
        <div id="box2">
            <img src={img1} alt="img" height="270"/>
            <figcaption>S. Silvestre Porto 2025</figcaption>
        </div>
    )
}

const Descricao = () => {
    return (
        <>
            <Texto/>
            <Imagem/>
        </>
    )
}

export default Descricao;