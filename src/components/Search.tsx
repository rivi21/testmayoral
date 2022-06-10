import { FaSearch } from 'react-icons/fa';

const Search = () => {
    return (
        <>
            <div className="input-wrapper mt-4">
                <input type="search" className="input" placeholder="Buscar"></input>
                <div className="input-icon p-1">
                    <FaSearch size="20" />
                </div>

            </div>
            <style jsx>
                {`
                 .input-wrapper {
                    position: relative;   
                    width: 80% ;                     
                }
                .input {
                    height: 3em;
                    width: 100%;
                    padding-left: 15%                
                }
                .input-icon {
                    color: #191919;
                    position: absolute;
                    width: 30px;
                    height: 30px;
                    left: 12px;
                    top: 45%;
                    transform: translateY(-50%);
                }   
            `}
            </style>
        </>
    )
}

export default Search