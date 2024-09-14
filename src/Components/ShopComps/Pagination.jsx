import PropTypes from 'prop-types';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

const Pagination = ({ handlePageChange, page, totalItems, itemsPerPage }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className='pagination-controls flex flex-wrap gap-2 items-center'>
            <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
                className='pagination-btn'
            >
                <FaAngleLeft />
            </button>

            {pageNumbers.map((pageNumber) => (
                <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`pagination-number ${pageNumber === page ? 'bg-primary px-2  rounded-full' : ''}`}
                >
                    {pageNumber}
                </button>
            ))}

            <button
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages}
                className='pagination-btn'
            >
                <FaAngleRight />
            </button>
        </div>
    );
};

Pagination.propTypes = {
    handlePageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    totalItems: PropTypes.number.isRequired,
    itemsPerPage: PropTypes.number.isRequired
};

export default Pagination;
