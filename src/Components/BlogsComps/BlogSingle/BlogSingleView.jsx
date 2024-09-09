import React from 'react'
import { FaRegCommentAlt } from "react-icons/fa";
import { MdOutlinePerson } from "react-icons/md";
import { TbCategory } from "react-icons/tb";
import AuthorAvatar from './AuthorAvatar';
import BlogContent from './BlogContent';
import ProductAdvertise from './ProductAdvertise';
import LeaveAComment from './LeaveAComment';
import Comments from './Comments';
import Breadcrumb from '../../Common/Breadcrumb';
const BlogSingleView = ({ blog }) => {
    
    return (
        <>

        <section className='section mt-0 py-0'>
            <div>
                <img src={blog.img} alt={blog.title} className='w-full rounded-lg'/>
                <div className="flex gap-5 items-center mt-3">
                    <div className="flexCenter gap-2">
                        <TbCategory className="text-gray-500" />
                        <h2 className="text-gray-800">{blog.category}</h2>
                    </div>
                    <div className="flexCenter gap-2">
                        <MdOutlinePerson className="text-gray-500" />
                        <h2 className="text-gray-800">{blog.createdBy}</h2>
                    </div>
                    <div className="flexCenter gap-2">
                        <FaRegCommentAlt className="text-gray-500" />
                        <h2>{blog.comments} Comments</h2>
                    </div>
                </div>
                <h2 className='text-3xl font-semibold my-4'>{blog.title}</h2>
                <AuthorAvatar authordata={blog.author} />
                <hr className='my-2' />
                <p className='text-xl my-5'>{blog.subTitle}</p>
                <BlogContent content={blog.content} />
                <ProductAdvertise/>
                <LeaveAComment/>
                <Comments/>

            </div>
        </section>
        </>
    )
}

export default BlogSingleView