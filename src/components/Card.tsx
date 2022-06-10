import { DUMMY_IMAGE_URL } from "pages/Settings"

const Card = ({user}) => { 
 
    const src = user.avatar ? user.avatar : DUMMY_IMAGE_URL//si no hay imagen me pone la dummy    
    
    return (
        <div className="card m-4 p-4 border border-success   ">
            <img className="card-img-top py-3" src={src} alt="..." />
            <div className="card-body text-center">
                <h5 className="card-title pb-5"><strong>{user.email}</strong></h5>
                <p>{user.first_name}</p>
                <p className="pb-3 text-danger">{user.last_name}</p> {/* si hay */}
                <p className="text-secondary">mas colores</p>
                <button className="btn btn-success px-3">AÑADIR</button>
            </div>
            <style jsx>{`
                .card{
                    border: solid;                  
                    margin: 1%;
                    padding: 4%;
                    text-align: center;
                }
                .card-img-top{
                   

                }
            `}
            </style>
        </div>
    )
}

export default Card