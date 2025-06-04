
import { useState } from "react"
import { HiArrowUturnLeft } from "react-icons/hi2";


export default function Button({ onclickF, title, customclassName }) {

    const [loading, setloading] = useState(false)

    function clickhandler(event) {
        event.preventDefault()
        setloading(true)
        onclickF()
        setTimeout(() => {
            setloading(false)
        }, 1000);


    
        
  
    }


    return (  <button onClick={(event) => { clickhandler(event) }} className={`${customclassName && customclassName.includes('w-') ? '' : 'w-full'} h-9 rounded-4xl text-white cursor-pointer ${customclassName && customclassName.includes('bg-') ?   '' : 'bg-red-500'}  ${customclassName} `}>{loading ? <HiArrowUturnLeft className="loadbtn text-center m-auto w-8 h-8 rotate-12   " /> : title}</button>
)
}