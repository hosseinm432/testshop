import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import baseurl from "../../Utility/baseurl"
import Header from "../../Components/Header/Header"


export default function Basket() {

    const [basketData, setbasketData] = useState([])
    const navigate = useNavigate()
    async function getdata() {

        try {
            const res = await fetch(`${baseurl}/user/payment`, {
                method: 'GET'
                , credentials: 'include',
                headers: {
                    'Authorization': `Bearer `, // Include token in header
                }

            })


            const data = await res.json()



            setbasketData(data)

        } catch (error) {
            console.log(error);

        }

    }

    useEffect(() => {


        getdata()



    }, [])

    return (<div className="Basket">
        <Header></Header>
        <main className=" p-6">
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
                                             border-1 
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
                itemClickhandler(0)
                navigate('/userpanel/paycomplete')
            }} className="cursor-pointer block text-center w-full  bg-blue-600 rounded-3xl my-3 ">تکمیل خرید</button>
                </div> : <h2 className=" ">  سبد خرید شما خالیست! </h2>}



        </main>


    </div>)
}