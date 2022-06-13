import { FaSearch } from 'react-icons/fa';

interface Element {
    id: number
    description: string
    price: string
    promotion: string
    picture: string
}

const Search = ({ collection, setCollectionArray }) => {

    function searchArticles(e) {
        const collectionFiltered = collection.data.filter(
            (article: Element) => article.description.toUpperCase().includes(e.target.value.toUpperCase()));

        return setCollectionArray(collectionFiltered);
    }

    return (
        <>
            <div className="search-wrapper mt-4">
                <input onInput={(e) => searchArticles(e)} type="text" className="search" placeholder="Buscar"></input>
                <div className="search-icon p-1">
                    <FaSearch size="20" />
                </div>
            </div>
            <style jsx>
                {`
                 .search-wrapper {
                    position: relative;   
                    width: 80%;                                     
                }
                .search {
                    height: 3em;
                    width: 100%;
                    padding-left: 50px;                   
                    border: none;
                    border-style: solid;
                    border: solid 2px #D5D8D8;
                    border-radius: 10px;                                     
                }
                .search::placeholder {
                    color: #909497;
                }
                .search-icon {
                    color: #A6ACAF;
                    position: absolute;
                    width: 30px;
                    height: 30px;
                    left: 12px;
                    top: 45%;
                    transform: translateY(-50%);
                } 
                @media only screen 
                and (min-width: 768px) { 
                    .search-wrapper {                       
                        width: 50%;
                    }
                } 
            `}
            </style>
        </>
    )
}
export default Search