import { FaMinus, FaPlus } from 'react-icons/fa';

const Pagination = ({ pages, currentPage, setCurrentPage, setCollectionArray }) => {

  function previous(page) {
    if (page > 1) {
      setCurrentPage(page - 1);
      setCollectionArray(pages[page - 2]);
    } else {
      alert("Ya estás en la primera página");
    }
  };

  function next(page) {
    if (page < pages.length) {
      setCurrentPage(page + 1);
      setCollectionArray(pages[page]);
    } else {
      alert("Ya no hay más resultados");
    }
  };

  return (
    <>
      <div className=" pagination d-flex justify-content-between px-2 pt-4">
        <div className="pag-icon" onClick={() => previous(currentPage)}>
          <FaMinus className="pag-icon" size="40" />
        </div>
        <div className="pag-icon" onClick={() => next(currentPage)}>
          <FaPlus size="40" />
        </div>
      </div>
      <style jsx>
        {`
          .pagination {
              width: 120px;
          }
          .pag-icon {
            color: #D7DBDD;
          }
          .pag-icon:hover {
            transform: scale(1.3);
            color: grey ;
          }  
        `}
      </style>
    </>
  )
}

export default Pagination