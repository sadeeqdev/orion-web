import { useEffect } from "react"
import SideBar from "../../components/sidebar/SideBar"

const Dashboard = ({handleNavbar}) => {

   useEffect(() => {
        handleNavbar(false)
    }) 

  return (
    <div>
        <SideBar/>
    </div>
  )
}

export default Dashboard