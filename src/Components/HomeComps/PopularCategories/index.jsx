import { popularCategories } from "../../../Data/data";
import MainButton from "../../Common/MainButton"
import { FaArrowRight } from "react-icons/fa6";

const PopularCategoriesH = () => {
    return (
        <section className="section" >
            <div className="flex justify-between items-center">
                <h3 className="font-semibold text-3xl">Popular Categories</h3>
                <MainButton classNames="btn-1" title="View All" icon={<FaArrowRight />} url="" />
            </div>
            <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 my-5">
                {popularCategories.map(({ id, title, imgUrl }) => {
                    return <div className="categoryCard" key={id}>
                        <img src={imgUrl} alt={title} />
                        <h5 className="my-2 text-lg">{title}</h5>
                    </div>
                })}
            </div>
        </section>
    )
}

export default PopularCategoriesH