import slide1 from "../assets/images/slides-1.png";

const Slideshow = () => {
    return (
        <div id="box0">
            <div id="slideShow">
                <img id="slideShowImg" src={slide1} alt="img"/>
                <button id="back">{'<'}</button>
                <button id="forward">{'>'}</button>
            </div>
        </div>
    )
}

export default Slideshow;