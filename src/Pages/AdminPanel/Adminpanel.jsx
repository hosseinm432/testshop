import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import Sidebar from "../../Components/Panel/Sidebar/Sidebar"
import { Outlet } from "react-router-dom"


export default function Admin_panel() {

    return (<div className="Admin-panel w-full h-full overflow-x-hidden overflow-hidden">
        < Header />
      

        <Sidebar Options={[{ title: ' دسته بندی ها', link: 'categories' } , {title : 'کاربران' , link : 'users' } , { title: 'مقاله ها ' , link : 'articles'} , {title : 'محصولات' , link : 'products'}]}></Sidebar>
        <div className="    h-[100]  mr-27  p-5">
        <Outlet />
        </div>
  
    </div>)
}