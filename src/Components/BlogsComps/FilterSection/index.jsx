import MainButton from "../../Common/MainButton"
import { FaFilter } from "react-icons/fa6";
import Button from "../../Common/SearchInput";
import TopCategories from "./TopCategories";
import PopularTags from "./PopularTags";
import OurGallery from "./OurGallery";
import RecentlyAdded from "./RecentlyAdded";


const FilterSection = ({isSingleBlog}) => {
    return (
        <div>
            {!isSingleBlog && <MainButton title="Filter" url="" icon={<FaFilter />} classNames="btn-1 bg-primary text-white px-5 py-2 mb-5" /> }
            <Button isFilter />
            <hr className="my-6"/>
            <TopCategories />
            <hr className="my-6" />
            <PopularTags />
            <hr className="my-6" />
            <OurGallery />
            <hr className="my-6" />
            <RecentlyAdded/>
        </div>
    )
}

export default FilterSection