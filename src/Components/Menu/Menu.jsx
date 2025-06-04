import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom";
import { CiWallet } from "react-icons/ci";
import { GrHistory } from "react-icons/gr";
import { FaShoppingBasket } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { FaComment } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { PiTicket } from "react-icons/pi";
import { CiDark } from "react-icons/ci";
import { MdSunny } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { use } from "react";
import { MdDelete } from "react-icons/md";
import { deletee } from "../../Utility/AddtoBasket";
import baseurl from "../../Utility/baseurl";
import MenuItem from "../MenuItem/MenuItem";
import { CiLogout } from "react-icons/ci";
import { RiArticleFill } from "react-icons/ri";

export default function Menu({ user_prop, menu, setmenu }) {


    const [darkthem, setdark] = useState(false)
    const [hoveritem, sethoveritem] = useState()

    const [user, setuser] = useState(user_prop)
    const [modalshow, setmodalshow] = useState(false)

    const MenuElem = useRef()

    const navigate = useNavigate()


    async function getdata() {


        const res = await fetch(`${baseurl}/user/payment`, {
            method: 'GET'
            , credentials: 'include',
            headers: {
                'Authorization': `Bearer `, // Include token in header
            }

        })


        const data = await res.json()



        setbasketData(data)

    }

    useEffect(() => {


        getdata()



    }, [])

    function itemClickhandler(item, link) {

        const items = document.querySelectorAll('.Menu-item')
        items.forEach(element => {
            element.classList.remove('text-blue-400', 'bg-blue-950', 'border-2', 'border-white')
        });
        item.classList.add('text-blue-400', 'bg-blue-950', 'border-2', 'border-white')
        setTimeout(() => {
            navigate(link)
        }, 500);
        setTimeout(() => {
            setmenu()
        }, 100);
    }
    return <div ref={MenuElem} className="Menu-wrapper  w-96 h-full  left-0 fixed  top-0 
                     bg-blueP  p-1  animate-menuOpenup  select-none  pt-3  space-y-2 " >


        <div className="Modul fixed top-0 right-0 w-[100vw] h-[100vh]  transform  translate-x-[1900px] " onClick={(event) => {
            MenuElem.current.classList.add('animate-menucloseup')
            console.log(MenuElem.current);
            setTimeout(() => {
                setmenu()
            }, 100);


        }}>  </div >


        {modalshow &&
            <div onClick={() => { setmodalshow(false) }} className="logout-modal translate-x-[1600px] bg-black/20  w-[100vw] h-full  fixed m-auto top-0 right-0 z-30 flex justify-center items-center flex-col"   >

                <div className="  rounded-3xl bg-white w-100 h-100 flex justify-center text-black items-center flex-col">
                    <h2 className="my-6">آیا از خروج از حساب کاربری اطمینان دارید ؟</h2>
                    <button onClick={async () => {

                        const res = await fetch(`${baseurl}/auth/logout`, { method: 'POST', credentials: "include" })
                        const data = await res.json()
                        console.log(res, data);
                        window.location.reload()
                        navigate('/')

                    }} className="  my-6 cursor-pointer block text-center w-30 h-10  bg-red-500 rounded-3xl  ">خروج</button>
                    <button onClick={() => { setmodalshow(false) }} className="cursor-pointer block text-center w-30 h-10  bg-blue-600 rounded-3xl my-6 ">خیر</button>
                </div></div>
        }


        <div className="wallet flex  w-full  ">
            <MenuItem title={` موجودی فعلی : ${user && user.wallet.toLocaleString() || '0'} `} icon={<CiWallet className="  inline   my-3 text-2xl" />} />
            <button onClick={() => {

                navigate('/userpanel/wallet')
            }} className=" cursor-pointer  text-[14px] mx-5 bg-blue-600  rounded-4xl w-16   h-13">افزایش موجودی</button>
        </div>




        <div className={`Menu-item purchase-histoey p-1 my-1  hover:bg-blue-950`}
            onClick={(event) => {
                itemClickhandler(event.currentTarget, '/userpanel/PurchaseHistory')
            }} >
            <GrHistory className="inline w-6 h-6" />  <h2 className={` inline   my-3`} >   تاریخچه خرید</h2>
        </div>


        <div className={`Menu-item saved-products hover:bg-blue-950`}
            onClick={(event) => {
                itemClickhandler(event.currentTarget, '/userpanel/SavedProducts')
            }} >
            <FaBookmark className="inline w-6 h-6" />  <h2 className="inline"  >   نشان شده</h2>

        </div>

        <div className={`Menu-item liked-products  p-1  my-1 hover:bg-blue-950`}
            onClick={(event) => {
                itemClickhandler(event.currentTarget, '/userpanel/Likes')
            }} >
            <FcLike className="inline w-6 h-6" />  <h2 className="inline"  > لایک های من</h2>

        </div>

        <div className={`Menu-item my comments  p-1  my-1 hover:bg-blue-950`}
            onClick={(event) => {
                itemClickhandler(event.currentTarget, '/userpanel/Comments')
            }}

        >
            <FaComment className="inline w-6 h-6" />  <h2 className="inline"  > نظرات من</h2>

        </div>

        <div className={` Menu-item user-panel p-1  my-1 hover:bg-blue-950`}
            onClick={(event) => {
                itemClickhandler(event.currentTarget, '/userpanel/Profile')
            }} >
            <CgProfile className="inline w-6 h-6" />  <h2 className="inline" > حساب کاربری</h2>

        </div>

        {
            user.role == 'SELLER' || user.role == 'ADMIN' && <div className={`Menu-item  p-1  my-1 hover:bg-blue-950`} onClick={(event) => {
                itemClickhandler(event.currentTarget, '/sellerpanel/products')
            }} >


                <CgProfile className="inline w-6 h-6 " />  <h2 className="inline" > پنل فروشنده</h2> </div>
        }

        {
            user.role == 'ADMIN' ? <div onClick={(event) => {
                itemClickhandler(event.currentTarget, '/Admin-panel')
            }}


                className={`Menu-item admin-panel hover:bg-blue-950 p-1  my-1`}>
                <CgProfile className="inline w-6 h-6" />  <h2 className="inline" > پنل ادمین</h2>  </div> : ''
        }


        <div onClick={(event) => {
            itemClickhandler(event.currentTarget, '/userpanel/tickets')


        }} className={`Menu-itemp-1  my-1 hover:bg-blue-950`}>
            <PiTicket className="inline w-6 h-6" />  <h2 className="inline"  > تیکت ها</h2>
        </div>

        <div onClick={(event) => {
            itemClickhandler(event.currentTarget, '/articles')

        }} className={`Menu-item hover:bg-blue-950 p-1  my-1`}>
            <RiArticleFill className="inline w-6 h-6" />  <h2 className="inline"  > مقاله ها</h2>
        </div>
        <div onClick={() => {
            itemClickhandler(11)
            setdark(prev => !prev)
        }} className={`hover:bg-blue-950 p-1  my-1`}>
            {darkthem ? <CiDark className="inline w-6 h-6" /> : <MdSunny className="inline w-6 h-6" />} <h2 className="inline"  >{darkthem ? 'تم دارک ' : 'تم روشن'} </h2>
        </div>


        <div onClick={() => { itemClickhandler(11) }} className={`Menu-item hover:bg-blue-950 p-1  my-3`}>
            < BiSolidContact className="inline w-6 h-6" />  <h2 className="inline" > تماس با ما</h2>
        </div>

        <hr />
        <h2 onClick={() => { sethoveritem(3) }} className={'hover:bg-blue-950 '}> دسته بندی ها</h2>

        <div className="  text-red-500 flex  gap-3  hover:bg-blue-950" onClick={() => { setmodalshow(true) }}>

            <CiLogout className=" text-2xl" />
            <h2  >خروج از حساب کاربری</h2>
        </div>

        <Link><h2 onClick={() => { sethoveritem(3) }} className={`p-1 my-3`}> </h2></Link>





    </div >
}

