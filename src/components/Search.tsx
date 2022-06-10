
const Search = () => {
    return (
        <>
            <div className="input-wrapper">
                <input type="search" className="input" placeholder="Buscar"></input>
                <svg xmlns="" className="input-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                </svg>
            </div>
            <style jsx>
                {`
                 .input-wrapper {
                    position: relative;
                    width: 500px;
                    border: solid
                    border-radius: 10px                   
                }
                .input {
                    height: 3em;
                    width: 100%;
                    padding-left: 45px
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