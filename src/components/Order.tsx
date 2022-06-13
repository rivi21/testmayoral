
const Order = ({ articles, setCurrentPage, setPages, setCollectionArray }) => {

    function dividePages() {       
        let dataPages = [];
        const totalArticles = articles.length;
        for (let i = 0; i < totalArticles; i = i + 8) {
            dataPages.push(articles.slice(i, i + 8));
        };
        setCollectionArray(dataPages[0]);
        setPages(dataPages);
        setCurrentPage(1);
    }
    const ascending = () => {
        articles.sort(function (a, b) {
            return a.price - b.price;
        });
        dividePages()
    }
    const descending = () => {
        articles.sort(function (a, b) {
            return b.price - a.price;
        });
        dividePages();
    }
    const deleteFilters = () => {
        articles.sort(function (a, b) {
            return a.id - b.id;
        });
        dividePages();
    }

    return (
        <>
            <div className="dropdown mt-2">
                <button className="btn btn-outline-primary dropdown-toggle" type="button" id="ordenarMenu" data-bs-toggle="dropdown" aria-expanded="false">
                    Ordenar
                </button>
                <ul className="dropdown-menu" aria-labelledby="ordenarMenu">
                    <li>
                        <div onClick={() => ascending()} className="dropdown-item py-3">
                            Precio ascendente
                        </div>
                    </li>
                    <li>
                        <div onClick={() => descending()} className="dropdown-item py-3">
                            Precio descendente
                        </div>
                    </li>
                    <li>
                        <div onClick={() => deleteFilters()} className="dropdown-item pt-3 text-center">
                            Borrar filtros
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Order