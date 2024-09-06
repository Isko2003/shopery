import BlogList from "../Components/BlogsComps/BlogList"
import FilterSection from "../Components/BlogsComps/FilterSection"
import Breadcrumb from "../Components/Common/Breadcrumb"
import { TiThMenu } from "react-icons/ti";
import PageContainer from "../Components/Common/PageContainer"
import MobileFilterSection from "../Components/BlogsComps/MobileFilterSection";
import { useState } from "react";

const Blogs = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const handleModalOpen = () => {
    setModalOpen((pre) => !pre)
  }
  
  
  return (

    <PageContainer>
      <div className="bg-[url('/Breadcrumbs.png')] bg-cover bg-center py-1 mt-10" >
        <div className="section py-0 my-0 ">
          <Breadcrumb links={[{ url: `/blogs/`, title: `Blogs` }]} />
        </div>

      </div>

      <section className="section grid grid-cols-9 gap-5">
        <div className="flex gap-5 lg:hidden">
          <button onClick={handleModalOpen} >
            <TiThMenu className="text-3xl  text-hard_primary cursor-pointer hover:opacity-80" />
          </button>

        </div>
        <div className="hidden lg:block lg:col-span-3">
          <FilterSection />
        </div>
      
        <div className={`absolute  lg:hidden lg:col-span-3 bg-white z-[100]  px-5 mt-14 overflow-hidden shadow-[5px_8px_10px_rgba(0,0,0,0.2)] ${modalOpen ? "opacity-0 max-w-[0px] " : "opacity-100 max-w-[380px] duration-300 transition-[max-width]"}`}>
          <MobileFilterSection />
        </div>
        <div className="col-span-9 lg:col-span-6">
          <BlogList />
        </div>
      </section>
    </PageContainer>
  )
}

export default Blogs