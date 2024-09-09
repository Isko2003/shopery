import { Link } from "react-router-dom"
import { popularTags } from "../../../Data/data"


const PopularTags = () => {
  return (
    <>
    <div className="mt-5 filterTitle">Popular Tag</div>
    <div className="flex gap-4 items-center flex-wrap">
        {popularTags.map((title, i) => {
          return <div key={i} className="bg-gray-200 py-2 px-4 hover:bg-primary rounded-xl transition">
            <Link>{title}</Link>   
          </div>
        })}
    </div>
    </>
  )
}

export default PopularTags