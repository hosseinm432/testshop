
import { RiDiscountPercentFill } from "react-icons/ri";
import './Header_Title.css'


export default function Header_Title({ pretitle, title, icon, customclassName }) {


    return (<div className="header-title relative w-full  my-8 h-9 flex  items-center  ">
        <p className="z-[1] font-bold text-2xl text-blueP">{title}</p>
        </div>)
}