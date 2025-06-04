import { useEffect, useState } from "react"
import { HiH2 } from "react-icons/hi2"
import Button from "../../Components/Button/Button"
import { VscLoading } from "react-icons/vsc";
import baseurl from "../../Utility/baseurl"

export default function Paycomplete() {

  const [user, setuser] = useState({})
  const [Basket_products, setBasket_products] = useState(null)
  const [paynentinfo, set_paymentinfo] = useState()
  const [pay_mothod, setpay_mothod] = useState('wallet')
  const [faild_wallet_purchase, setfaild_wallet_purchase] = useState(false)
  const [success_purchase, setsuccess_purchase] = useState(false)
  const [loading, setloading] = useState(false)

  async function getpaynentinfo() {
    const res = await fetch(`${baseurl}/user/payment`, {
      credentials: "include"
    })
    const data = await res.json()
    console.log(data);
    setBasket_products(data.productprices)
    set_paymentinfo(data)

  }


  async function getUser() {

    const res = await fetch(`${baseurl}/user`, {
      credentials: "include"
    })



    const data = await res.json()


    setuser(data.user)
    // setBasket_products

  }


  async function Purchase() {

    const res = await fetch(`${baseurl}/user/payment`, {
      credentials: "include",
      method: "POST",
      headers: { 'Content-Type': 'application/json' }
      , body: JSON.stringify({ purshasemethod: pay_mothod })
    }
    )
    console.log(res)
    const data = await res.json()
    console.log(data);
    if (data.message == 'purshaes failed wallet is not enough') {
      setfaild_wallet_purchase(true)
    }
    if (data.message == "purshaes sussecfuly ") {
      setsuccess_purchase(true)
      setfaild_wallet_purchase(false)



      setTimeout(() => {
        setloading(true)
        getUser()
      }, 1000);
      setTimeout(() => {
        setloading(false)
        setsuccess_purchase(false)

      }, 3000);
      setBasket_products([])
    }

  }




  useEffect(() => {

    getUser()
    getpaynentinfo()


  }, [])



  return <div className="w-full  paycomplete  my-5 border-spacing-y-9   m-auto p-1   ">


    {loading ? <div className=" overflow-hidden  ">
      <VscLoading className="animate-spin w-full text-9xl  text-red-500"></VscLoading>
    </div> : (Basket_products == null ? (<h2>سبد خرید شما خالی است</h2>) : (Basket_products.length ?
      <div className="w-full">
        <table className="w-full  ">
          <thead className="">
            <tr>
              <th className=" border border-red-500">شماره</th>
              <th className=" border border-red-500">عنوان</th>
              <th className=" border border-red-500">قیمت</th>
              <th className=" border border-red-500">عکس</th>
              <th className=" border border-red-500">توضیح</th>
              <th className=" border border-red-500">تعداد</th>
              <th className=" border border-red-500">قیمت کل</th>
            </tr>
          </thead>
          <tbody className="  text-center  ">
            {Basket_products.map((item, index) => <tr className=" m-auto">
              <td className=" border border-red-500">{index + 1}</td>
              <td className=" border border-red-500">{item.product.title}</td>
              <td className=" border border-red-500">{item.product.price.toLocaleString()}</td>
              <td className="w-full h-full flex justify-center items-center border border-red-500">
                <div className="w-5 h-5   ">
                  <img src={item.product.pictures[0]} alt="" />

                </div></td>
              <td className=" border border-red-500"> {item.product.shortDescription}</td>
              <td className=" border border-red-500">{item.count}</td>
              <td className=" border border-red-500">{item.total.toLocaleString()}</td>
            </tr>)}
            <tr  >
              <td colSpan="7" className="   font-bold border border-red-500  text-center l">قیمت کل :
                {paynentinfo.totalprice}</td>
            </tr>
          </tbody>

        </table>
        <div className=" flex  justify-center flex-col items-center">
          <label htmlFor="">
            <input onChange={(event) => { setpay_mothod(event.target.value) }} onInput={(event) => { setpay_mothod(event.target.value) }} type="radio" name="payment" value='direct' />پرداخت مستقیم
          </label>
          <label htmlFor="">
            <input type="radio" checked onInput={(event) => { setpay_mothod(event.target.value) }} onChange={(event) => { setpay_mothod(event.target.value) }} name="payment" value='wallet' /> از اعتبار
          </label>
        </div>

        <Button onclickF={Purchase} customclassName={'text-center block m-auto w-50 h-5 my-2'} title={'تکمیل خرید'}></Button>
      </div>
      : <h2>سبد خرید شما خالیست !</h2>))}



    {faild_wallet_purchase && <h2 className=" text-red-500 text-center"> موجودی حساب کافی نمی باشد</h2>}
    {success_purchase && <h2 className="  text-green-600 text-center"> خرید با موفقیت انجام شد</h2>}
  </div >
}