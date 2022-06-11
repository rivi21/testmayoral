import { FaMinus, FaPlus } from 'react-icons/fa';

const Pagination = () => {
  return (
    <>
      <div className=" pagination d-flex justify-content-center px-2 pt-4">
        <FaMinus size="40" color="#D7DBDD" />
        <FaPlus size="40" color="#D7DBDD" />
      </div>
      <style jsx>{`
      .pagination {
          background-color: #FEFEFE;
      }   
    `}
      </style>
    </>
  )
}

export default Pagination