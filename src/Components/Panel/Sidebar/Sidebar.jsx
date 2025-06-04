
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";


export default function Sidebar({ Options, customclassName }) {

    const navigate = useNavigate()
    const [activeindex, setactiveindex] = useState(0)

    useEffect(() => {
        // Options.map(oprtion => setactive(prev => prev.push(oprtion.id)))
    });
    function activehandler(id) {



        setactiveindex(id)


    }
    return (
        <div className={`sidebar flex flex-col  absolute right-0 h-full bg-sky-950  top-16 text-white   ${customclassName} `}>
            sidebar
            <div className="flex flex-col  space-y-4 ">

                {Options && Options.map((option, index) => {
                    return <div onClick={() => {
                        activehandler(index)
                        navigate(`${option.link}`)
                    }} className={`w-full  h-full text-xl p-1 hover:text-sky-500  cursor-pointer ${activeindex == index ? 'bg-sky-800 text-sky-400' : ''}`}>
                        {option.title}
                    </div>
                })}
            </div>
        </div>
    );
}