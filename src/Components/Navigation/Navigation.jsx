import { FaUserAlt } from "react-icons/fa";
import { PiBasketBold } from "react-icons/pi";
import { BiSolidCategory } from "react-icons/bi";
import { TbHeadphonesFilled } from "react-icons/tb";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function NavigationMenu() {

    const [selecteditem, setitem] = useState()
    const navigate = useNavigate()
    function setitemactive(event) {
        const elements = document.querySelectorAll('.menu-item')
       

        elements.forEach(item => {
            item.classList.remove('navigation-item-active', 'text-gray-300')
        })
        event.currentTarget.classList.add('navigation-item-active', 'text-gray-300')
    }


    return (<div className="Navigation md:hidden">
        <div className="wrapper bg-red-500 fixed bottom-0 w-full z-40 h-20 px-4  ">
            <div className="content flex  h-full  justify-between  items-center text-white ">
                <div className="categories flex flex-col justify-center gap-1 items-center menu-item " onClick={(event) => {
                    setitemactive(event)
                    navigate('/')
                }}>
                    <BiSolidCategory className=" text-[25px]" />
                    <h3>خانه</h3>
                </div>
                <div className="basket flex flex-col justify-center gap-1 items-center menu-item " onClick={(event) => {
                    setitemactive(event)
                    navigate('/basket')
                }} >
                    <PiBasketBold className=" text-[25px]" />
                    <h3>        سبد خرید</h3>
                </div>
                <div className="user flex flex-col justify-center gap-1 items-center menu-item " onClick={(event) => {
                    setitemactive(event)
                    navigate('/userpanel/profile')
                }}>
                    <FaUserAlt className=" text-[25px]  " />
                    <h3 className=" text-[12px]">   حساب کاربری</h3>

                </div>
                <div className="cantact-us flex flex-col justify-center gap-1 items-center menu-item" onClick={(event) => {
                    setitemactive(event)
                }}>
                    <TbHeadphonesFilled className=" text-[25px]" />
                    <h3>
                        تماس با ما
                    </h3>
                </div>
            </div>
        </div>


    </div>)
}