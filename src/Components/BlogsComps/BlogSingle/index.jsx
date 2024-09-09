import { useParams } from "react-router-dom"
import { blogs } from "../../../Data/blogsData";
import PageContainer from "../../Common/PageContainer";
import FilterSection from "../FilterSection";
import BlogSingleView from "./BlogSingleView";
import Breadcrumb from "../../Common/Breadcrumb";


const BlogSingle = () => {
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
                <div className="col-span-6">
                    <BlogSingleView blog={singleBlog} />
                </div>
                <div className="col-span-3">
                    <FilterSection isSingleBlog />
                </div>
            </section>
        </PageContainer>
    )
}

export default BlogSingle