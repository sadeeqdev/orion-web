import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import SideBar from "../../components/sidebar/SideBar"
import TopBar from "../../components/topBar/TopBar"

const Dashboard = ({handleNavbar}) => {

   useEffect(() => {
        handleNavbar(false)
    }) 

  return (
    <div className="lg:flex h-max">
        <div className="" data-aos="fade-right">
          <SideBar />
        </div>
        <div className="max-w ml-0 lg:ml-10 xl:ml-96" style={{width:'100%'}}>
            <TopBar/>
            <div data-aos="fade-left" className="mt-0 lg:mt-6 lg:ml-0 xl:ml-10 w-full px-4 lg:px-0 lg:rounded-2xl lg:shadow-xl lg:pr-10 lg:bg-sub-dark pt-9 lg:pl-9 xl:pr-20 pb-20">
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard