import MainButton from '../../Common/MainButton'
import MainInput from '../../Common/MainInput'

const LeaveAComment = () => {
    return (
        <div className='mt-5'>
            <h3 className='text-2xl font-semibold my-5 '>Leave a Comment</h3>
            <form action="">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='mainInputBox'>
                        <label>Full Name</label>
                        <input className='mainInput' type='text' name='fullname' id='fullname' placeholder='Full Name' />
                    </div>
                    <div className='mainInputBox'>
                        <label>Email</label>
                        <input className='mainInput' type='email' name='email' id='email' placeholder="Email" />
                    </div>
                    <div className='col-span-2 mainInputBox'>
                        <label>Message</label>
                        <input className='mainInput' type='text' multiple placeholder='Message' name='message' id='message' />
                    </div>
                    <div className='col-span-2 flex gap-2 items-center'>
                        <input type="checkbox" />
                        <p>Save my name and email in this browser for the next time I comment.</p>
                    </div>
                    <MainButton classNames={"btn-1 px-8 py-3 bg-primary text-white"} title={"Post Comments"} url="" />
                </div>
            </form>

        </div>
    )
}

export default LeaveAComment