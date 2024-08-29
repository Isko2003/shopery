import { popularCategories } from "../../../Data/data";
import MainButton from "../../Common/MainButton"
import { FaArrowRight } from "react-icons/fa6";
import CategoryCard from "./CategoryCard";

const PopularCategoriesH = () => {
    return (
        <section className="section" >
            <div className="justifyBetweenItems">
                <h3 className="font-semibold text-3xl">Popular Categories</h3>
                <MainButton classNames="btn-1" title="View All" icon={<FaArrowRight />} url="" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 my-5">
                {popularCategories.map((category) => {
                    return <CategoryCard key={category.id} data={category} />
                })}
            </div>
        </section>
    )
}

export default PopularCategoriesH