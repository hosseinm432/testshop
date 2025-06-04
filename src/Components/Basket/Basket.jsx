import { FaShoppingBasket } from "react-icons/fa"
import { useState, useEffect, useRef } from "react"

export default function Basket({ setbasketshow }) {
    const [basket, setbasket] = useState(false)
    const [basketData, setbasketData] = useState([])

    const basketelem = useRef()

    return (<div ref={basketelem} className=" basket  w-64  absolute top-20 text-[20px] text-center animate-basketshow   bg-blueP
     rounded-[4px] min-h-20 text-white ">
        <div className="modul fixed top-0 right-0 w-[100vw] h-[100vh] z-20  " onClick={() => {
            basketelem.current.classList.remove('animate-basketshow')
            basketelem.current.classList.add('animate-baskethide')
            setTimeout(() => {
                setbasketshow()
            }, 400);

        }}></div>
        <div className={`basket`}
        >
            <FaShoppingBasket className={`inline  `} /><h2 className={` p-1 my-3 inline`}>   سبد خرید</h2>


            {basketData.productprices &&
                basketData.productprices.length ?
                <div>
                    <table className="flex flex-col justify-between ">
                        <tr className="flex flex-row-reverse  justify-between"> 
                            <th>شماره</th>
                            <th>عنوان</th>
                            <th>قیمت</th>
                            <th>تعداد</th>
                            <th>قیمت کل</th>
                        </tr>

                        {basketData.productprices.map((item, index) => {
                            return <tr key={index} className="  flex flex-row-reverse w-full justify-between
                                                     border-1 p-1
                                                    ">
                                {index + 1}
                                <td className=" overflow-hidden">  {item.product.title}</td>

                                <td>  {item.product.price.toLocaleString()}</td>


                                <td>{item.count}  </td>
                                <td>{item.total.toLocaleString()}</td>
                            </tr>
                        })
                        }

                    </table>
                    <h2> قیمت کل : {basketData.totalprice.toLocaleString()}</h2>
                    <button onClick={() => {
                        navigate('/userpanel/paycomplete')
                    }} className="cursor-pointer block text-center w-full  bg-blue-600 rounded-3xl my-3 ">تکمیل خرید</button>


                </div> : <h2> سبد خرید شما خالیست!</h2>}

        </div>

    </div>)
}