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
            <div className="mt-20 ml-20 w-full  rounded-2xl shadow-xl bg-sub-dark p-9">
                <UpcomingBar/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard