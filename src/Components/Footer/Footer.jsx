
import { FaTelegram } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareFacebook } from "react-icons/fa6";
import { SiAparat } from "react-icons/si";

export default function Footer() {



    return (<div className="footer border-t-2  border-gray-500     mx-1     pt-7  mt-8  bg-gray-800 text-white ">

        <div className="wrapper flex  max-md:flex-col justify-center items-center space-y-16">

            <div className="info flex  gap-4 w-[50%] h-full flex-col justify-center items-center space-y-8">

                <div className="image w-24 h-24 bg-redP">
                    <img src='../images/logo2.png' className=" object-contain w-full h-full" alt="" />
                </div>
                <p className=" w-full text-wrap  text-center"> Lorem ipsum dolor sit amet consectetur, </p>

                <div className="socials w-80 flex  justify-between   text-2xl  px-7 ">
                    <FaTelegram /><RiInstagramFill /><FaSquareFacebook /><SiAparat />
                </div>

                <div className="logos flex gap-4">
                    <div className="image w-20 h-20 ">
                        <img src='../images/enamadlogo.png' className=" object-contain w-full h-full" alt="" />
                    </div>
                    <div className="image w-20 h-20 ">
                        <img src='../images/ecunionlogo.png' className=" object-contain w-full h-full" alt="" />
                    </div>
                </div>
            </div>

            <div className="menu-item w-full  flex gap-20  max-md:gap-1    justify-center max-md:text-[13px]   space-y-5 my-4  items-start ">


                <div className="footer-menu h-full w-full ">

                    <div className="items flex flex-col justify-center  h-full w-full  mx-2 ">
                        <div className="menu-header">
                            <h2 className="   text-2xl  font-bold max-md:text-[18px] ">خدمات ما</h2>
                        </div>
                        <p>خرید آسان</p>
                        <p>تحویل فوری</p>
                        <p>محصولات متنوع</p>
                        <p>تخفیف های شگفت انگیز</p>
                        <p >پرداخت سریع</p>
                    </div>
                </div>

                <div className=" footer-menu h-full w-full ">
                    <div className="menu-content flex flex-col justify-center  h-full w-full">
                        <div className="items flex flex-col justify-center  h-full w-full">

                            <div className="menu-header">
                                <h2 className="   text-2xl  max-md:text-[15px]">تماس با ما</h2>
                            </div>


                            <p>
                                شماره تلفن : 1111111111
                            </p>
                            <p>
                                آدرس : خیابان ارتش/ فلکه ابشار
                            </p>
                            <p>
                                ایمیل : shop@gmail.com
                            </p>
                        </div>
                    </div>
                </div>




            </div>
        </div>
        <div className=" text-center h-10 flex justify-center items-center bg-gray-900">
            <h2 >تمامی حقوق برای فروشگاه محفوظ است .</h2>
        </div>

    </div>)
}