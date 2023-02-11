import "./style.css";

function Button({text, image}) {
    return (
        <div className="Button">
            <img className="Icon" src={image} />
            <p className="Button_text">{text}</p>
        </div>
    )
}

export default Button;