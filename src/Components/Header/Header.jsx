import { useEffect, useState } from "react";
import Search from "../Search/Search"
import { IoMenu } from "react-icons/io5";
import { FaShoppingBasket } from "react-icons/fa";

import Button from "../Button/Button";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import { useNavigate } from "react-router-dom";
import baseurl from "../../Utility/baseurl";
import { VscLoading } from "react-icons/vsc";
import { RiShoppingBasketFill } from "react-icons/ri";
import { Suspense } from "react";
import Basket from "../Basket/Basket";

export default function Header() {

    const [profile, setprofile] = useState(null)
    const [loading, setloading] = useState(true)
    const [menu, setmenu] = useState(false)
    const [basket, setbasket] = useState(false)

    const navigate = useNavigate()


    function getuser() {
        try {
            fetch(`${baseurl}/user`, {
                method: 'GET',
                credentials: 'include',

            }).then(res => {
                console.log(res);
                return res.json()
            }).then(res2 => {
                console.log(res2);

                if (res2) {

                    setprofile(res2.user)
                }
                setloading(false)

            })

        } catch (error) {

        }
    }

    function toggleMenu() {
        setTimeout(() => {
            setmenu(prev => !prev)
        }, 10);

    }

    useEffect(() => {


        try {
            getuser()
        } catch (error) {
            console.log(error);

        }

    }, [])


    return (

        <div className="Header">
            <div className="header-content w-full text-white  bg-redP    h-21   sticky top-0 flex    justify-between z-10  
         items-center  lg:px-8  ">



                <div className="header-right w-full flex justify-start items-center px-1 max-md:justify-center max-md:px-2 ">
                    <Search
                    ></Search>

                </div>
                <div className="header-center w-full flex justify-center items-center max-md:hidden ">
                    <div className="logo  flex justify-center items-center">
                        <div onClick={() => { navigate('/') }} className="logo-image w-50 h-50 cursor-pointer">
                            <img className=" w-full h-full" src="..\images\logo2.png" alt="" />
                        </div>
                    </div>

                </div>
                <div className="header-left w-full  flex  px-1 lg:gap-5 items-center max-md:hidden  justify-end ">

                    <div onClick={() => { setbasket(prev => !prev) }} className="basket relative text-4xl bg-white lg:w-16 lg:h-16 rounded-3xl max-md:hidden   text-redS flex justify-center items-center">
                        <RiShoppingBasketFill  />
                        {basket && <Basket  setbasketshow={setbasket} />}
                    </div>
                    <div className="profile flex justify-start   ">
                        {loading ? <VscLoading className=" animate-spin  text-white  text-4xl"></VscLoading> :
                            (profile ? <div className="profile-container flex  w-15 h-15 relative cursor-pointer justify-center items-center " >
                                <div className="profile-info flex w-full  flex-col-reverse justify-center items-center ">
                                    <div onClick={() => { toggleMenu() }} className="lg:w-16 max-lg:w-10 lg:h-16 rounded-4xl overflow-hidden border-[4px] border-green-600">
                                        <img className="w-full h-full" src={profile.picture ? profile.picture : '/images/images.png'} alt="" />
                                    </div>
                                </div>

                                {menu &&

                                    <Menu user_prop={profile} menu={menu} setmenu={toggleMenu}></Menu>

                                }

                            </div>
                                :
                                <button className=" cursor-pointer   bg-white    text-red-500  rounded-full w-16 h-16" onClick={() => { navigate('/register') }} >
                                    ورود <hr className=" bg-red-500" /> ثبت نام
                                </button>)
                        }
                    </div>

                </div>
            </div>



        </div>
    )
}