import { DUMMY_IMAGE_URL } from "pages/Settings"

const Card = ({ article }) => {

    const src = article.avatar ? article.avatar : DUMMY_IMAGE_URL//si no hay imagen me pone la dummy    

    return (
        <>
            <div className="card m-2 px-3 border border-success">
                <img src={src} className="card-img-top py-3" alt="..." />
                <div className="card-body text-center p-0 ">
                    <h6 className="card-title pb-2 text-truncate">{article.description}
                    </h6>
                    <div className="price-wrapper text-center pb-4">
                        <p className="card-text text-decoration-line-through ">{article.price}</p>
                        <p className="promotion card-text pb-1 text-danger">{article.promotion ? article.promotion : ""}</p> {/* si hay */}
                    </div>
                    <p className="text-secondary">mas colores</p>
                    <button className="btn btn-success px-3">AÑADIR</button>
                </div>
            </div>
            <style jsx> {`
                .card {
                   height: 60vh;
                   width: 40%;
                }
                .card-img-top {
                    width: max-width;
                    height: 45%;
                }
                .price-wrapper {
                    position: relative
                }
                .promotion {
                    height: 1em;
                }
                @media only screen 
                and (min-width: 600px) {
                    .card {
                    height: 70vh;
                    }
                    .card-img-top {
                        height: 50%;
                    }
                    .card-title{
                        padding-bottom: 4vh !important;
                    }
                }
                @media only screen 
                and (min-width: 768px) {
                    .card {
                    width: 30%;
                    height: 75vh;
                    }
                    .card-title{
                        padding-bottom: 6vh !important;
                    }
                }
                @media only screen 
                and (min-width: 1024px) {
                    .card {
                    width: 20%;
                    height: 80vh;
                    margin: 1.5% !important;
                    }
                    .card-img-top {
                        height: 50%;
                    }
                    .card-title{
                        padding-bottom: 5vh !important;
                    }
                    .price-wrapper{
                        padding-bottom: 6vh !important
                    }
                }`}
            </style>
        </>
    )
}
export default Card