import { FaMinus, FaPlus } from 'react-icons/fa';

const Pagination = () => {
  return (
    <>
    <div className=" pagination d-flex justify-content-center pt-4">
      <FaMinus  size="40" />
      <FaPlus  size="40" />
    </div>
    <style jsx>{`
      .pagination {
        opacity: .3;
      }
    
    `}
      
    </style>
    </>
  )
}

export default Pagination