import Header from "../../Components/Header/Header"
import { Outlet } from "react-router-dom"

export default function UserPanel() {

    return <div  className="USER-panel w-full h-full">
        <Header></Header>



        <Outlet></Outlet>
    </div >
}