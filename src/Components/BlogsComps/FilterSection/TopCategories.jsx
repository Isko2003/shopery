import { Link } from "react-router-dom"
import { popularCategories } from "../../../Data/data"


const TopCategories = () => {
  return (
      <div>
          <h3 className="font-semibold text-2xl mb-5">Top Categories</h3>
          <div>
              {popularCategories.map(({id, title, amount}) => {
                  return <Link key={id} className="justifyBetweenItems mt-2 hover:text-soft_primary">
                      <p className="">{title}</p>
                      <p className="text-gray-500">({amount})</p>
                  </Link>
              })}
          </div>
    </div>
  )
}

export default TopCategories