import { Outlet } from "react-router-dom"
import Header from "../../Components/Header/Header"
import { useState, useEffect } from "react"
import baseurl from "../../Utility/baseurl"
import { VscLoading } from "react-icons/vsc"
import { FaRegUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { RiPencilLine } from "react-icons/ri";
import Input from "../../Components/Input/Input"
import Button from "../../Components/Button/Button"
import { useNavigate } from "react-router-dom"
import { GrHistory } from "react-icons/gr"
import { FaComment } from "react-icons/fa"
import { FcLike } from "react-icons/fc"
import { FaBookmark } from "react-icons/fa"

export default function Profile() {
    const [user, setuser] = useState()
    const [loading, setloading] = useState(true)
    const [editMode, setEditmode] = useState(false)
    const [email, setemail] = useState('')
    const [newpassword, setpassword] = useState('')

    const navigate = useNavigate()

    async function getUser() {
        try {
            const res = await fetch(`${baseurl}/user`, {
                credentials: "include"
            })



            const data = await res.json()

            console.log('data', data);
            if (data.user) {
                setuser(data.user)
            }

            setloading(false)
            // setBasket_products
        } catch (error) {
            console.log(error);

            setloading(false)
        }


    }
    function itemClickhandler(item, link) {

        const items = document.querySelectorAll('.Menu-item')
        items.forEach(element => {
            element.classList.remove('text-blue-400', 'bg-blue-950', 'border-2', 'border-white')
        });
        item.classList.add('text-blue-400', 'bg-blue-950', 'border-2', 'border-white')
        setTimeout(() => {
            navigate(link)
        }, 500);

    }
    useEffect(() => {

        getUser()


    }, [])

    useEffect(() => {
        console.log('user', user);

    }, [user])

    async function editModef() {

        if (email.trim() == '' || newpassword.trim() == '') {
            alert('لطفا مقادیر رو وارد کنید')
        } else {

            const res = await fetch(`${baseurl}/user`, {
                method: 'PUT', credentials: 'include', headers: { 'Content-Type': 'application/json' }
                , body: JSON.stringify({ email, newpassword })
            })
            const data = await res.json()
            console.log(data);
            if (data.user) {
                setuser(data.user)
            }
        }


    }

    return <div className="Profile px-4 w-full h-full">
        <h2>پنل کاربری</h2>

        {loading ? <div className="Profile-loader xl:mx-80   gap-14  bg-transparent   border-2  border-gray-400  flex  flex-col justify-between  items-center  p-10 rounded-3xl ">
            <div className=" w-25 h-25  rounded-full animate-imgskelte  transition-colors">

            </div>
            <div className=" rounded-3xl text-white animate-imgskelte bg-amber-50 text-2xl w-full h-2"></div>
            <div className=" rounded-3xl text-white animate-imgskelte bg-amber-50 text-2xl w-full h-2"></div>
            <div className=" rounded-3xl text-white animate-imgskelte bg-amber-50 text-2xl w-full h-2"></div>
            <div className=" rounded-3xl text-white animate-imgskelte bg-amber-50 text-2xl w-full h-2"></div>
            <div className=" rounded-3xl text-white animate-imgskelte bg-amber-50 text-2xl w-full h-2"></div>
            <div className=" rounded-3xl text-white animate-imgskelte bg-amber-50 text-2xl w-full h-2"></div>
            <div className=" rounded-3xl text-white animate-imgskelte bg-amber-50 text-2xl w-full h-2"></div>
            <div className=" rounded-3xl text-white animate-imgskelte bg-amber-50 text-2xl w-full h-2"></div>
        </div> :
            user ?
                <>


                    <div className="Profile-wrapper-    max-md:bg-gradient-to-l text-black border-red-400 rounded-2xl border-2  xl:mx-80 relative">

                        <RiPencilLine
                            onClick={() => { setEditmode(prev => !prev) }}
                            className=" text-white m-7 cursor-pointer   block   absolute left-0 bg-red-500  w-7 h-7 rounded-[10px]" />

                        {editMode ? <div className="profile-content flex justify-between  ">

                            <div className="Profile__info flex   justify-between p-4 flex-col">
                                <div className="profie_picture rounded-full overflow-hidden    border-4  border-red-500 w-50 h-50 ">
                                    <img src={user.picture} alt="" />
                                </div>
                                <h2 className=" my-6 text-3xl ">{user.name}</h2>
                            </div>

                            <div className="Profile_credits flex   p-3 text-1xl mt-6  gap-7 justify-between w-full px-9">
                                <div className="profile-info-lables flex justify-center  flex-col  gap-7">

                                    <h2 className="  inline"><FaRegUserCircle className=" text-red-400 mx-1  text-3xl    inline" /> نام کاربری :</h2>
                                    <h2 className="   inline"><MdEmail className=" mx-1  text-3xl  text-red-400  inline" />   ایمیل :</h2>
                                    <h2 className="   inline"><RiLockPasswordFill className=" mx-1 text-red-400  text-3xl    inline" />    رمز عبور :</h2>

                                </div>
                                <div className="profile-info-values  flex  justify-center  flex-col  gap-2">
                                    <Input customcalss={' cursor-not-allowed'} cursor-pointer type="text" disabled placeholder={user.username} />
                                    <Input onchangeF={(event) => { setemail(event.target.value) }} type="text" placeholder={user.email} />
                                    <Input onchangeF={(event) => { setpassword(event.target.value) }} type="text" placeholder="رمز عبور جدید" />
                                    <Button onclickF={() => { editModef() }} title={'ثبت اطلاعات جدید'}></Button>

                                </div>
                            </div>

                        </div>

                            :

                            <div className="content ">
                                <div className="profile flex justify-between max-md:flex-col  max-md:text-[10px]  ">
                                    <div className="Profile__info flex   justify-between p-4 flex-col">
                                        <div className="profie_picture rounded-full overflow-hidden    border-4  border-red-500 w-50 h-50 ">
                                            <img src={user.picture} alt="" />
                                        </div>
                                        <h2 className=" my-6 text-3xl ">{user.name}</h2>
                                    </div>

                                    <div className="Profile_credits flex   p-3 text-1xl mt-6  gap-7 justify-between w-full px-9">
                                        <div className="profile-info-lables flex justify-center  flex-col  gap-7">

                                            <h2 className="  inline"><FaRegUserCircle className=" text-red-400 mx-1  text-3xl    inline" /> نام کاربری :</h2>
                                            <h2 className="   inline"><MdEmail className=" mx-1  text-3xl  text-red-400  inline" />   ایمیل :</h2>
                                            <h2 className="   inline"><RiLockPasswordFill className=" mx-1 text-red-400  text-3xl    inline" />    رمز عبور :</h2>


                                        </div>
                                        <div className="profile-info-values  flex  justify-center  flex-col  gap-7">

                                            <h2 className="px-6 border-red-500 rounded-[5px] border-2 text-center">{user.username}</h2>
                                            <h2 className="px-6 border-red-500 rounded-[5px] border-2 text-center"> {user.email}</h2>
                                            <h2 className="px-6 border-red-500 rounded-[5px] border-2 text-center">*********</h2>


                                        </div>

                                    </div>
                                </div>
                                <div className="menu flex flex-col px-6 space-y-3">
                                    <div className={`Menu-item purchase-histoey p-1 `}
                                        onClick={(event) => {
                                            itemClickhandler(event.currentTarget, '/userpanel/PurchaseHistory')
                                        }} >
                                        <GrHistory className="inline w-6 h-6" />  <h2 className={` inline   `} >   تاریخچه خرید</h2>
                                    </div>
                                    <div className={`Menu-item saved-products`}
                                        onClick={(event) => {
                                            itemClickhandler(event.currentTarget, '/userpanel/SavedProducts')
                                        }} >
                                        <FaBookmark className="inline w-6 h-6" />  <h2 className="inline"  >   نشان شده</h2>

                                    </div>

                                    <div className={`Menu-item liked-products  p-1  `}
                                        onClick={(event) => {
                                            itemClickhandler(event.currentTarget, '/userpanel/Likes')
                                        }} >
                                        <FcLike className="inline w-6 h-6" />  <h2 className="inline"  > لایک های من</h2>

                                    </div>

                                    <div className={`Menu-item my comments  p-1  `}
                                        onClick={(event) => {
                                            itemClickhandler(event.currentTarget, '/userpanel/Comments')
                                        }}

                                    >
                                        <FaComment className="inline w-6 h-6" />  <h2 className="inline"  > نظرات من</h2>

                                    </div>

                                </div>




                            </div>


                        }


                    </div>
                </> : <div className=" sign-in ">
                    <h2>لطفا برای مشاهده اطلاعات کاربری وارد شوید</h2>
                    <div className="buttons flex flex-col gap-6 my-5">

                        <Button onclickF={() => { navigate('/login') }} title={'ورود'}></Button>
                        <Button onclickF={() => { navigate('/register') }} title={'ثبت نام'}></Button>
                    </div>
                </div>

        }

    </div>

}
//from-neutral-700