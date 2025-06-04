
import { BsSave2 } from "react-icons/bs";
import { BsSave2Fill } from "react-icons/bs"; import { AiFillLike } from "react-icons/ai";

import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { AddtoBasket } from "../../Utility/AddtoBasket.jsx";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import baseurl from "../../Utility/baseurl.js";
import { FaHeart } from "react-icons/fa";
import { CiSaveUp2 } from "react-icons/ci";
import { VscLoading } from "react-icons/vsc";
import { BsFillSaveFill } from "react-icons/bs";

export default function Product_cart({ title, price, img, rates, des, topic, id, customclassName  , author}) {

    const [productcount, setproductcount] = useState(0)
    const navigaet = useNavigate()
    const [ratescount, setreates] = useState(rates)
    const [title_btn, settitle_btn] = useState(null)
    const [likeLoader, setlikeLoader] = useState(true)
    const [saveloader, setsaveloader] = useState(true)
    const [userlikes, setuserlikes] = useState(null)
    const [usersaved, setusersaved] = useState()
    const [likedUser, setlikedUser] = useState(false)
    const [SavedUser, setSavedUser] = useState(false)
    const [user, setuser] = useState({})

    async function getUser() {

        const res = await fetch(`${baseurl}/user`, {
            credentials: "include"
        })



        const data = await res.json()


        setuser(data.user)
        setlikeLoader(false)
        setsaveloader(false)
    }
    async function AddToBastketAndGetCount() {



        await fetch(`${baseurl}/user/basket/${id}`, {
            method: 'POST',
            credentials: 'include'

        }).then(res => {

            return res.json()
        }).then(res2 => {

            const temp = res2.basket.filter(item => item.product == id)
            if (temp.length) {

                setproductcount(temp[0].count)
            } else {
                setproductcount(1)
            }


        }
        )

        settitle_btn(true)
    }
    async function Setproductcount() {

        await fetch(`${baseurl}/user/basket/${id}`, {
            method: 'POST',
            credentials: 'include',
            headers: {

                'Content-Type': 'application/json' // این هدر ضروری است

            },
            body: JSON.stringify(productcount)
        }).then(res => {


            return res.json()
        }).then(res2 => {


        }
        )
    }


    async function registerLike() {
        setlikeLoader(true)
        const res = await fetch(`${baseurl}/user/likeproduct/${id}`, {
            method: "POST",
            credentials: "include"
        })


        const data = await res.json()


        setuserlikes(data.userlikes)


        data.userlikes ? setreates(data.userlikes.length) : setreates(0)
        setlikeLoader(false)
    }

    async function addToSave() {
        setsaveloader(true)
        if (SavedUser) {
            const res = await fetch(`${baseurl}/user/saveproduct/${id}`, {
                method: "DELETE",
                credentials: "include"
            })


            const data = await res.json()


            setusersaved(data.user.savedporduct)

        } else {
            const res = await fetch(`${baseurl}/user/saveproduct/${id}`, {
                method: "POST",
                credentials: "include"
            })


            const data = await res.json()



            setusersaved(data.savedporduct)

        }

        setsaveloader(false)
        // setusersaves(data.userlikes)
    }

    useEffect(() => {
        // getUser()




    }, [])

    useEffect(() => {

        // if (productcount == 0) {
        //     settitle_btn(false)
        // }
        // const f = async () => { await Setproductcount() }
        // f()




    }, [productcount])

    useEffect(() => {
        if (userlikes && userlikes[0] && userlikes[0]._id) {
            const temp = userlikes && userlikes.filter(item => item._id == id) || []


            if (temp.length) {

                setlikedUser(true)
            } else {


                setlikedUser(false)
            }

        } else {
            const temp = userlikes && userlikes.filter(item => item == id) || []


            if (temp.length) {

                setlikedUser(true)
            } else {


                setlikedUser(false)
            }

        }


    }, [userlikes])

    useEffect(() => {
        user && setuserlikes(user.likedProducts)

        user && setusersaved(user.savedProducts)
    }, [user])


    useEffect(() => {
        if (usersaved && usersaved[0] && usersaved[0].product && usersaved[0].product._id) {
            const temp = usersaved && usersaved.filter(item => item.product._id == id) || []

            if (temp.length) {


                setSavedUser(true)
            } else {


                setSavedUser(false)
            }
        } else {
            const temp = usersaved && usersaved.filter(item => item.product == id) || []


            if (temp.length) {


                setSavedUser(true)
            } else {


                setSavedUser(false)
            }
        }
    }, [usersaved])

    return (<div className={`Product overflow-hidden  w-full     border-1 rounded-2xl bg-white  border-redP  flex  justify-between flex-col    flex-shrink-0 p-3 
    lg:w-[240px]
    lg:min-h-[400px] 
      lg:max-h-[400px] 
    relative
   cursor-pointer
     ${customclassName}`}>

        <div className="product_info   relative h-full space-y-2    transition-all">
            <div className="product__image rounded-2xl w-full overflow-hidden flex justify-center items-center">

                <Link id={1} to={`/products/${id}`}><img className=" w-full h-full " src={`${img}`} alt="" /></Link>
            </div>

            <div className="product-info__title  max-h-19   w-full max-w-[200px] font-bold overflow-hidden 
               line-clamp-1 text-ellipsis">

                <Link to={`/products/${id}`}>
                    {title}
                </Link>

            </div>
            <div className="flex w-full  px-2 justify-between">
            <h2 className="product-topic font-shabnam-L   text-gray-600">{topic}</h2>
            <h2>{author}</h2>
            
            </div>
            <div className="product-description  max-h-19   w-full max-w-[200px]  overflow-hidden 
               line-clamp-2 text-ellipsis "> <p>{des}</p>
            </div>




            <h2 className="font-bold  text-center ">{price.toLocaleString()} تومان</h2>






        </div>



        <div className="Product_Actions  relative  lg:top-9 max-lg:top-9 flex justify-center items-center w-full px-1 h-full " >

            <div className="icons h-full flex    justify-center gap-8 items-center  text-2xl w-10 ">
                <div className="heart-icon flex flex-col justify-center items-center
                "    onClick={() => {
                        registerLike();

                    }
                    }>
                    {/* 
                    {likeLoader ? <VscLoading className="animate-spin " /> : <>   <FaHeart className={`${likedUser ? ' text-red-500' : ' text-blue-200'}`} /> <p className="text-[15px]">{ratescount}</p></>} */}
                    <FaHeart className=' text-red-500' />
                </div>
                <div
                    onClick={() => {
                        addToSave()
                    }} className="save-icon">

                    {/* {saveloader ?
                        <VscLoading className="animate-spin " />

                        :

                        (SavedUser ? <div className=" flex flex-col items-center justify-center">
                            <BsFillSaveFill />
                            <p className="text-[13px]">unsave</p>
                        </div> :
                            <div className=" flex flex-col items-center justify-center">
                                <CiSaveUp2 />
                                <p className="text-[13px]">save</p>

                            </div>
                        )

                    } */}
                    <CiSaveUp2 />
                </div>
            </div>




        </div>
















    </div >)
}