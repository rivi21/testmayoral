
const Order = () => {


    
    return (
        <div className="dropdown mt-4">
            <button className="btn btn-outline-primary dropdown-toggle" type="button" id="ordenarMenu" data-bs-toggle="dropdown" aria-expanded="false">
                Ordenar
            </button>
            <ul className="dropdown-menu" aria-labelledby="ordenarMenu">
                <li>
                    <div className="dropdown-item py-3">
                        <div className="form-check">
                            <input onClick= {() => {}} className="form-check-input" type="radio" name="ordenarRadio" id="ordenarRadio1"></input>
                            <label className="form-check-label" htmlFor="ordenarRadio1">
                                Precio ascendente
                            </label>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="dropdown-item py-3">
                        <div className="form-check">
                            <input onClick= {() => {}} className="form-check-input" type="radio" name="ordenarRadio" id="ordenarRadio2" ></input>
                            <label className="form-check-label" htmlFor="ordenarRadio2">
                                Precio descendente
                            </label>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="dropdown-item pt-3 text-center">
                        Borrar filtros
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Order