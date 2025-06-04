import { useEffect, useState } from "react"
import baseurl from "../../Utility/baseurl"
import Button from "../../Components/Button/Button"
import Input from "../../Components/Input/Input"

export default function Wallet() {

  const [user, setuser] = useState()
  const [walletinput, setwalletinput] = useState()

  async function getUser() {

    const res = await fetch(`${baseurl}/user`, {
      credentials: "include"
    })



    const data = await res.json()


    setuser(data.user)
    setlikeLoader(false)
    setsaveloader(false)
  }
  async function AddwalletInventory() {
    if(walletinput.trim()){
    const res = await fetch(`${baseurl}/user/wallet`, {
      credentials: "include"
      , method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      }
      , body: JSON.stringify({ count: walletinput })


    })
    const data =await res.json()
    console.log(data);
    getUser()
  }else{
    alert('لطفا مقدار را وارد کنید')
  }
  }

  useEffect(() => {
    getUser()
  }, [])

  return <div className="wallet-page w-full flex  flex-col justify-center items-center text-2xl h-[50%] ">
    <div className="wallet-info flex w-full justify-center items-center gap-5">
      <h2 className=" font-bold">  موجودی حساب شما :   </h2>
      <h2>{user && user.wallet.toLocaleString()} هزار تومان</h2>

    </div>
    <div className="add-wallet flex justify-center flex-col items-center gap-5 w-30%">
      <h2>افزایش موجودی</h2>
      <Input onchangeF={(event) => { setwalletinput(event.target.value) }} placeholder={'مثلا       9999999'}></Input>
      <Button onclickF={() => { AddwalletInventory() }} title={'افزایش'}></Button>

    </div>

  </div>
}