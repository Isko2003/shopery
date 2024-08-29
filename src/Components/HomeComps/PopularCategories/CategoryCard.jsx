import PropTypes from 'prop-types';


const CategoryCard = ({ data }) => {
    return (
        <div className="categoryCard">
            <img src={data.imgUrl} alt={data.title} />
            <h5 className="my-2 text-lg">{data.title}</h5>
        </div>
    );
};

CategoryCard.propTypes = {
    data: PropTypes.shape({
        imgUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
};

export default CategoryCard;
