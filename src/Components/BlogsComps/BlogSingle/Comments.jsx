import { GoDotFill } from "react-icons/go";
import MainButton from "../../Common/MainButton";

const Comments = ({feedbacks}) => {
    return (
        <div className='my-5 mt-8'>
            <h4 className='mb-5 font-semibold text-2xl'>Comments</h4>
            {feedbacks.map(({id, imgUrl, fullname,date, comment }) => {
                return <div className='flex flex-col gap-5 justify-center' key={id}>
                    <div className='flex gap-3 items-center'>
                        <div className="w-24 h-24">
                            <img src={imgUrl} alt="avatar img" className="w-full"/>
                        </div>
                        <div>
                            <div className='flex gap-3 items-center'>
                                <p>{fullname}</p>
                                <GoDotFill />
                                <p className='text-gray-500'>{date}</p>
                            </div>
                            <p className="text-gray-500 mt-1" >{comment} </p>
                        </div>
                    </div>
                    <hr />

                </div>
            })}
           
            <MainButton classNames="mt-5 btn-1 border-2 border-primary px-6 py-2" title="Load More" url="" />
        </div>
    )
}

export default Comments