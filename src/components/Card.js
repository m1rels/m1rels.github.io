

function Card(title, image, content) {
    return (
        <div className="Card">
            <div className="Card__header">
                <h3>{title}</h3>
                <img className="Card__image" src={image} />
            </div>
            <div className="Card__content">
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Card;