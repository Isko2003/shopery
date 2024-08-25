import { featuresCards } from "../../Data/data"

const Features = () => {
    return (
        <div className="section grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  shadow-xl rounded-md">
            {featuresCards.map(({ id, imgUrl, title, desc }) => {
                return (
                    <div key={id} className="flex justify-center items-center gap-4">
                        <img src={imgUrl} alt={title} />
                        <div>
                            <p className="font-semibold">{title}</p>
                            <p className="text-gray-500 text-sm my-1">{desc}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Features