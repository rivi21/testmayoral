import { DUMMY_IMAGE_URL } from "pages/Settings"

const Card = ({article}) => { 
 
    const src = article.avatar ? article.avatar : DUMMY_IMAGE_URL//si no hay imagen me pone la dummy    
    
    return (
        <div className="card m-2 px-3 border border-success">
            <img src={src} className="card-img-top py-3" alt="..." />
            <div className="card-body text-center p-0 ">
                <h6 className="card-title pb-2 text-truncate">{article.description}
                </h6>
                <p className="card-text text-decoration-line-through">{article.price}</p>
                <p className="card-text pb-1 text-danger">{article.promotion ? article.promotion : "nada"}</p> {/* si hay */}
                <p className="text-secondary">mas colores</p>
                <button className="btn btn-success px-3">AÑADIR</button>
            </div>
            <style jsx>{`
                .card {
                   height: 60vh;
                   width: 42%
                }
                .card-img-top {
                    width: max-width;
                    height: 45%;
                }
                
            `}
            </style>
        </div>
    )
}

export default Card