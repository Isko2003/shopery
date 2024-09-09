import { recentlyAddedBlogs } from "../../../Data/data"
import { CiCalendar } from "react-icons/ci";

const RecentlyAdded = () => {
  return (
      <div className="mt-5">
          <h5 className="filterTitle">Recently Added</h5>
          <div className="flex flex-col justify-center gap-3">
              {recentlyAddedBlogs.map(({id, img, title, date}) => {
                  return (
                      <div key={id} className="flex gap-3 items-center hover:bg-slate-100 py-2 cursor-pointer">
                              <img src={img} alt={title} className="w-24 h-20 object-cover rounded-lg" />
                          <div>
                              <h6 className="font-semibold">{title}</h6>
                              <div className="flex items-center gap-2 mt-1">
                                  <CiCalendar className="text-xl text-primary"/>
                                  <span className="text-gray-500">{date}</span>
                              </div>
                          </div>
                          
                      </div>
                  )
              })}
          </div>
    </div>
  )
}

export default RecentlyAdded