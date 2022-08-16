import { useEffect } from "react"
import SideBar from "../../components/sidebar/SideBar"
import TopBar from "../../components/topBar/TopBar"

const Dashboard = ({handleNavbar}) => {

   useEffect(() => {
        handleNavbar(false)
    }) 

  return (
    <div className="flex">
        <SideBar/>
        <div className="max-w" style={{width:'100%'}}>
            <TopBar/>
        </div>
    </div>
  )
}

export default Dashboard