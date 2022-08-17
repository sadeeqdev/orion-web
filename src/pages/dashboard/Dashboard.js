import { useEffect } from "react"
import SideBar from "../../components/sidebar/SideBar"
import TopBar from "../../components/topBar/TopBar"
import UpcomingBar from "../../components/upcoming/Upcoming"

const Dashboard = ({handleNavbar}) => {

   useEffect(() => {
        handleNavbar(false)
    }) 

  return (
    <div className="flex h-max">
        <SideBar/>
        <div className="max-w ml-80 2xl:ml-96" style={{width:'100%'}}>
            <TopBar/>
            <div className="mt-16 ml-20 w-full  rounded-2xl shadow-xl bg-sub-dark pt-9 pl-9 pr-28 pb-20">
                <div className="grid grid-cols-2 gap-x-8 gap-y-8">
                    <UpcomingBar/>
                    <UpcomingBar/>
                    <UpcomingBar/>
                    <UpcomingBar/>
                    <UpcomingBar/>
                    <UpcomingBar/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard