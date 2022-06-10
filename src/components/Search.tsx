
const Search = () => {
    return (
        <>
            <div className="input-wrapper mt-4">
                <input type="search" className="input" placeholder="Buscar"></input>
                <svg xmlns="" className="input-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
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
                    width: 20px;
                    height: 20px;
                    left: 12px;
                    top: 50%;
                    transform: translateY(-50%);
                }   
            `}
            </style>
        </>
    )
}

export default Search