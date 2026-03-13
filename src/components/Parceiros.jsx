import img1 from "../assets/images/lidl.png";
import img2 from "../assets/images/camara_porto.png";
import img3 from "../assets/images/agora_porto.png";

const Parceiros = () => {
    return (
        <div id="box3">
            <figure>
                <img src={img1}
                     title="Publicidade"/>
                <figcaption>Os nossos parceiros: <a href="https://www.lidl.pt/">Lidl Portugal</a>.</figcaption>
            </figure>
            <figure>
                <img src={img2}
                     title="Publicidade"/>
                <figcaption>Os nossos parceiros: <a href="https://www.cm-porto.pt/">C.M.Porto</a>.</figcaption>
            </figure>
            <figure>
                <img src={img3}
                     title="Publicidade"/>
                <figcaption>Os nossos parceiros: <a href="https://www.agoraporto.pt/">Ágora Cultura e Desporto</a>.
                </figcaption>
            </figure>
        </div>
    )
}

export default Parceiros;