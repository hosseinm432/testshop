import { useEffect, useState } from "react"
import baseurl from "../../../Utility/baseurl"
import { useSearchParams } from "react-router-dom"
import { FaArrowDown } from "react-icons/fa";
import { VscLoading } from "react-icons/vsc";
import { products } from "../../../Utility/AddtoBasket";


export default function PurchaseHistory() {

    const [showproducts, setshowproducts] = useState(null)
    const [userPurhchaseHistory, setuserPurhchaseHistory] = useState(null)
    const [Item, setItem] = useState(null)
    const [filteredproduct, setfilteredproducts] = useState([])
    const [temp, settemp] = useState()

    function clickHandler(id) {
        setItem(id)
        if (id == temp) {
            settemp(1)
            settemp(false)
        } else {
            settemp(true)
            settemp(id)
            setfilteredproducts(userPurhchaseHistory.filter(item => item._id == id)[0])
        }

    }

    useEffect(() => {

        async function getdata() {
            const res = await fetch(`${baseurl}/user`, {
                method: 'GET'
                , credentials: 'include'
            })
            const data = await res.json()


            setuserPurhchaseHistory(data.user.purchasehistory)
        }
        getdata()



    }, [])

    useEffect(() => {




    }, [userPurhchaseHistory])
    useEffect(() => {

        console.log(filteredproduct.productprices);

    }, [filteredproduct])
    return <div className="purchasehistory list wrapper lg:px-72 px-4  ">

        {userPurhchaseHistory ?
            <>
                <h2 className=" my-3">تاریخچه خرید شما : </h2>

                <ul className=" border-2 border-red-500 space-y-4 p-2  ">
                    {
                        userPurhchaseHistory.length && userPurhchaseHistory.map((item, index) => <li className="transition-all p-2 border-1  border-red-500 w-full  overflow-scroll" >
                            <div className="product list flex justify-between overflow-scroll md:px-6 items-center  h-24   bg-gradient-to-b gap-1   font-bold transition-all">

                                <h2> قیمت کل:  {item.totalprice.toLocaleString()}</h2>
                                <h2>تعداد کالا : {item.productprices.length}</h2>
                                <h2>تا ریخ : {item.date}</h2>
                                <div onClick={() => { clickHandler(item._id) }} className="flex justify-center items-center text-white bg-red-500  rounded-full h-10 flex-wrap text-wrap whitespace-break-spaces  lg:w-12 text-[15px] max-md:w-[100px]">

                                    <FaArrowDown className=" text-3xl cursor-pointer max-md:text-[20px] " />
                                </div>
                            </div>
                            {temp && item._id == Item && <table className="text-center  w-[100px] overflow-scroll border-2 border-red-500 ">
                                <thead >
                                    <tr className="  text-center overflow-scroll" >
                                        <th>شماره </th>
                                        <th>نام </th>
                                        <th>تصویر</th>
                                        <th>دسته بندی</th>
                                        <th>تعداد</th>
                                        <th>قیمت</th>
                                        <th>قیمت کل</th>
                                    </tr>
                                </thead>
                                <tbody className="  text-center overflow-scroll w-full p-2">
                                    {temp && item._id == Item && filteredproduct.productprices.map((item2, index) => {
                                        return <div>{
                                            item2.product ? <tr className="  text-center overflow-scroll w-full p-2">
                                                <td>  <h2>{index + 1}</h2></td>
                                                <td>  <div className="w-5 h-5">{
                                                    item2.product.pictures && <img className="w-full h-full" src={item2.product.pictures[0]} alt="" />
                                                }

                                                </div></td>
                                                <td>     <h2>{item2.product.title}</h2></td>

                                                <td>    <h2>{item2.product.category}</h2></td>
                                                <td>   <h2>{item2.total / item2.product.price} </h2></td>
                                                <td>   <h2>{item2.product.price.toLocaleString()}</h2></td>
                                                <td> <h2>{item2.total.toLocaleString()}</h2></td>
                                            </tr> : <p>کالا یافت نشد</p>
                                        }
                                        </div>
                                    })}
                                </tbody>
                            </table>}

                        </li>)



                    }
                </ul>
                {/* { showproducts && <div >


                        {item.productprices.map((item2, index) => {

                            return <div className="product list flex  justify-between  lg:gap-7  gap-2.5 px-6 items-center  h-24   bg-gradient-to-b   font-bold  overflow-scroll">

                                <h2>{index + 1}</h2>
                                <div className="w-5 h-5">
                                    <img className="w-full h-full" src={item2.product.pictures[0]} alt="" />
                                </div>
                                <h2>{item2.product.title}</h2>
                                <h2>{item2.product.shortDescription}</h2>
                                <h2>{item2.product.category}</h2>
                                <h2>{item2.product.price.toLocaleString()}</h2>
                                <h2>قیمت کل :   {item2.total.toLocaleString()}</h2>
                            </div>
                        })}
                    </div>} */}




            </>
            : <VscLoading className=" text-red-500 animate-spin  w-full h-fyll text-center m-auto   max-w-52  mt-5 text-4xl"></VscLoading>
        }


    </div >
}
