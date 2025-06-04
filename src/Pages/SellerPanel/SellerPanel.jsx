import { useEffect, useRef, useState } from "react"
import Sidebar from "../../Components/Panel/Sidebar/Sidebar"
import { Link } from "react-router-dom"
import Header from "../../Components/Header/Header"
import { Outlet } from "react-router-dom"



export default function SellerPanel() {

    const [activeindex, setactiveindex] = useState()

    let activeitem = useRef()




    function activehandler(id) {



        setactiveindex(id)


    }
    useEffect(() => {
        // const token = localStorage.getItem('shoptoken')
        // if (token) {
        //     fetch('https://homi-node.liara.run/api/users/profile', {
        //         method: 'GET',
        //         headers: {
        //             'Authorization': `Bearer ${token}`
        //         }
        //     }).then(res => res.json()).then(res2 => {
        //         console.log(res2)
        //         if (res2.status === 'success') {
        //             res2.data.user.role === 'seller' ? setallow(true) : ''
        //             console.log(res2.data.user.role);
        //         }
        //     }
        //     )


        // }
        // fetch('https://homi-node.liara.run/api/users/profile', {
        //     method: 'GET',
        //     headers: {
        //         'Authorization': `Bearer ${localStorage.getItem}`, // Include token in header
        //     }
        // })
    })




    return (<>
<Header ></Header>
        {/* <div className="sidepanel w-full h-full overflow-hidden  max-md:hidden"> */}
{/* 
            < Sidebar customclassName={'sidebar relative top-0 bg-sky-950 lg:w-[15%] h-full z-10'} Options={[
                <Link className="w-full block" to={'products'}>محصولات</Link>
                , <Link className="w-full block" to={'selling'}>میزان فروش</Link>

            ]} >

            </Sidebar> */}
            {/* <div className="panel-content  overflow-hidden z-0  absolute  h-full right-[350px] top-0 p-10 w-[83%]">
                <Outlet />
            </div> */}


            {/* {allow ? <></> : <>This rout is for sellers</>} */}
        {/* </div>
        */}

            {/* < Sidebar customclassName={'sidebar relative top-0 bg-sky-950 lg:w-[15%] h-full z-10'} Options={[
                <Link className="w-full block" to={'products'}>محصولات</Link>
                , <Link className="w-full block" to={'selling'}>میزان فروش</Link>

            ]} >

            </Sidebar> */}
            <div className="panel-content  overflow-hidden   absolute ">
                <Outlet />
            </div>


            {/* {allow ? <></> : <>This rout is for sellers</>} */}
      
    </>)
}
