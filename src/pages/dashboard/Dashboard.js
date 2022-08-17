import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import SideBar from "../../components/sidebar/SideBar"
import TopBar from "../../components/topBar/TopBar"

const Dashboard = ({handleNavbar}) => {

   useEffect(() => {
        handleNavbar(false)
    }) 

  return (
    <div className="flex h-max">
        <div className="hidden lg:flex">
          <SideBar />
        </div>
        <div className="max-w lg:ml-80 2xl:ml-96" style={{width:'100%'}}>
            <TopBar/>
            <div className="mt-16 lg:ml-20 w-full px-4 lg:px-0 lg:rounded-2xl lg:shadow-xl lg:bg-sub-dark pt-9 lg:pl-9 lg:pr-28 pb-20">
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard