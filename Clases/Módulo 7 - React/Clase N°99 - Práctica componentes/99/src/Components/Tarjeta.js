import "../Styles/Tarjeta.scss"

const Tarjeta = ({title, type, price, img, isAvailable, onSale}) => {
    return (
        <article>
            <img src={img}/>
            <h2>{title}</h2>
            <div className="flex">
                <h3>{type}</h3>
                <p>{price}</p>
            </div>        
            <div>
                {/* {isAvailable === false && {}} */}
                {onSale === true && <p>ON SALE!</p>}
            </div>
        </article>
    )
};

export  default Tarjeta;