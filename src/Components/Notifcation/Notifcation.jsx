import { useState } from "react"
import { IoMdClose } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";
export default function Notifcation({ customclassName, title, cond , status }) {


    // const [load, setload] = useState(true)
    // setTimeout(() => {
    //     setload(false)
    // }, 2000);

    return (<>


        <div className={`Notification  animate-notificationOpenAndCloseV fixed  p-1 bottom-20 right-20 flex flex-col  justify-between rounded-[5px]  bg-gray-100 w-72 h-10   overflow-hidden`}>
        <IoCloseCircleOutline  className=" text-2xl absolute left-1 top-1" />
            <h2 className={` `}>{title}</h2>
            <div className={`${status ? ' bg-green-500'  : 'bg-red-500'} Notfication-line   w-full h-1 `}></div>
        </div></>)
}