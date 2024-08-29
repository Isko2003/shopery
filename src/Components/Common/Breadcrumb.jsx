import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { GoChevronRight } from "react-icons/go";


const Breadcrumb = ({links = []}) => {
  return (
    <section className="section text-gray-500">
      <div className="flex gap-2 flex-start items-center">
        <Link to="/"><GoHome fontSize={20}/></Link> 
        <GoChevronRight/>  
        {links.map(({ id, url, title }) => {
          return <>
            <Link key={id} to={url} className={`${id == 1 ? "text-primary" : ""}`}>{title}</Link>
            {id != 1 && <GoChevronRight />}
          </>
          })}
      </div>

    </section>
  )
}

Breadcrumb.propTypes = {
  links: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.number,
  }).isRequired
};

export default Breadcrumb