import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLink } from "react-icons/io5";
const AuthorAvatar = ({authordata}) => {
  return (
      <div className='justifyBetweenItems'>
          <div className='flex items-center gap-2'>
              <img src={authordata.imgUrl} alt={authordata.fullname} />
              <div>
                  <h6 className='font-semibold'>{authordata.fullname}</h6>
                  <div className="flex gap-3 items-center mt-2">
                      <p>{authordata.createdTime}</p>
                      <GoDotFill/>
                      <p>6 min read</p>
                  </div>
                </div>
          </div>
          <div className="flex items-center gap-2">
              <div>
                  <Link><FaFacebookF/></Link>
              </div>
              <div>
                  <Link><FaXTwitter /></Link>
              </div>
              <div>
                  <Link><FaPinterestP /></Link>
              </div>
              <div>
                  <Link><FaInstagram /></Link>
              </div>
              <div>
                  <Link><IoLink /></Link>
              </div>
          </div>
          
    </div>
  )
}

export default AuthorAvatar