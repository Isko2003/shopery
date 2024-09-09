import { blogs } from "../../../Data/blogsData"
import { FaRegCommentAlt } from "react-icons/fa";
import { MdOutlinePerson } from "react-icons/md";
import { TbCategory } from "react-icons/tb";
import MainButton from "../../Common/MainButton";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const BlogList = () => {
    const navigate = useNavigate();
    const handleSingleBlog = (id) => {
        console.log(id);
        
        navigate(`/blogs/${id}`);
    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 ">
            {blogs.map(({ id, img, title, category, comments, createdBy, date }) => {
                return <div key={id} className="blogCard hover:cursor-pointer hover:shadow-md py-2 transition " onClick={()=>handleSingleBlog(id)}>
                    <div className="relative max-w-[424px] h-[324px] overflow-hidden">
                        <img src={img} alt={title} className="overflow-hidden transition object-cover h-full"/>
                        <div className="absolute bottom-5 left-5 text-center p-1 px-2 rounded-lg bg-white">
                            <h6 className="font-semibold">{date.day}</h6>
                            <span className="uppercase text-sm text-gray-500 font-semibold">{date.month}</span>
                        </div>
                    </div>
                    <div className="mt-5 px-4">
                        <div className="flex gap-2 sm:gap-5 items-center flex-wrap">
                            <div className="flexCenter gap-2">
                                <TbCategory className="text-gray-500"/>
                                <h2 className="text-gray-800 text-sm sm:text-base">{category}</h2>
                            </div>
                            <div className="flexCenter gap-2">
                                <MdOutlinePerson className="text-gray-500"/>
                                <h2 className="text-gray-800 text-sm sm:text-base">{createdBy}</h2>
                            </div>
                            <div className="flexCenter gap-2 text-sm sm:text-base">
                                <FaRegCommentAlt className="text-gray-500 "/>
                                <h2>{comments} Comments</h2>
                            </div>
                        </div>
                        <p className="my-3 title font-semibold">{title}</p>
                       <MainButton classNames="btn-1" title="Read More" icon={<FaArrowRight/>} url=""/>
                    </div>
                </div>
            })}
        </div>
    )
}

export default BlogList