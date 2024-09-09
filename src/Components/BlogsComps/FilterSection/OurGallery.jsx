import { blogs } from "../../../Data/blogsData"


const OurGallery = () => {
    return (
        <div className="mt-5">
            <h5 className="filterTitle ">Our Gallery</h5>
            <div className="flex items-center gap-2 flex-wrap">
                {blogs.slice(0, 8).map(({ id, img })=>{
                    return (
                        <div key={id} className="relative w-24 h-24 ">
                            <img src={img} alt="blog" className="w-full h-full object-cover rounded-lg" />
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default OurGallery