import { useParams } from "react-router-dom"
import { blogs } from "../../../Data/blogsData";
import PageContainer from "../../Common/PageContainer";
import FilterSection from "../FilterSection";
import BlogSingleView from "./BlogSingleView";
import { TiThMenu } from "react-icons/ti";
import Breadcrumb from "../../Common/Breadcrumb";
import { useState } from "react";
import MobileFilterSection from "../MobileFilterSection";


const BlogSingle = () => {
    const [modalOpen, setModalOpen] = useState(false)

    const handleModalOpen = () => {
        setModalOpen((pre) => !pre)
    }

    const { id } = useParams()
    const singleBlog = blogs.find((blog) => blog.id == id)
    return (
        <PageContainer>
          
            <div className="bg-[url('/Breadcrumbs.png')] bg-cover bg-center py-1 mt-10" >
                <div className="section py-0 my-0 ">
                    <Breadcrumb links={[{ url: `/blogs/${singleBlog.id}`, title: `Blog ${singleBlog.id}` }]} />
                </div>
            </div>
            <section className="grid grid-cols-9 section">
                <div className="flex gap-5 lg:hidden">
                    <button onClick={handleModalOpen} >
                        <TiThMenu className="text-3xl  text-hard_primary cursor-pointer hover:opacity-80 mb-7" />
                    </button>

                </div>
                <div className="col-span-9 lg:col-span-6">
                    <BlogSingleView blog={singleBlog} />
                </div>
                <div className="hidden lg:block lg:col-span-3">
                    <FilterSection />
                </div>
                <div className={`absolute  lg:hidden lg:col-span-3 bg-white z-[100]  px-5 mt-14 overflow-hidden shadow-[5px_8px_10px_rgba(0,0,0,0.2)] ${modalOpen ? "opacity-0 max-w-[0px] " : "opacity-100 max-w-[380px] duration-300 transition-[max-width]"}`}>
                    <MobileFilterSection />
                </div>
            </section>
        </PageContainer>
    )
}

export default BlogSingle