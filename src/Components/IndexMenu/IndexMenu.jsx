import { FaPhoneSquare } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { RiDiscountPercentFill } from "react-icons/ri";
import { MdCategory } from "react-icons/md";
import { MdSmartphone } from "react-icons/md";
import { FaTshirt } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { MdCampaign } from "react-icons/md";
import { MdCelebration } from "react-icons/md";
import { IoArrowDown } from "react-icons/io5";

export default function IndexMenu() {
    return (<div className="IndexMenu max-md:hidden w-full  h-full font-bold  ">
        <div className="containe w-full h-9 bg-gray-800  text-gray-200  flex justify-center items-center  z-20  ">
            <div className="items flex justify-center gap-6  items-center h-full">

                <div className="index-menu-item flex justify-center items-center gap-2 flex-col relative group  z-10 ">
                    <div className="modal    fixed w-[100vw] h-[100vh] z-10  opacity-0 group-hover:opacity-100  bg-black/50 top-0 right-0 pointer-events-none ">

                    </div>
                    <div className="index-menu-header  group-hover:z-10   h-full   top-0 flex  w-full justify-center items-center  ">
                        <MdCategory />
                        <h2 className='' >دسته بندی ها</h2>
                        <IoArrowDown className="group-hover:rotate-180 transition-all" />
                    </div>

                    <div className="index-menu-item__menu absolute   top-full z-20 bg-gray-800 text-white w-28 group-hover:opacity-100   flex  flex-col items-center rounded-[2px]  p-2  transition-all opacity-0   cursor-pointer select-none ">

                        <div className="index-menu-item__menu relative w-full z-20 p-1  flex justify-center items-center gap-1 text-[15px]  border-b    border-gray-500">
                            <MdSmartphone />
                            <p>
                                کالی دیجیتال
                            </p>
                        </div>
                        <div className="index-menu-item__menu relative  w-full  z-20 p-1  flex justify-center items-center gap-1 text-[15px]  border-b    border-gray-500">
                            <FaTshirt />
                            <p>
                                لباس
                            </p>
                        </div>
                        <div className="index-menu-item__menu relative  w-full  z-20 p-1  flex justify-center items-center gap-1 text-[15px]  border-b    border-gray-500">
                            <IoFastFood />
                            <p>
                                خوراکی
                            </p>
                        </div>


                    </div>

                </div>
                <div className="index-menu-item flex justify-center items-center gap-2 flex-col relative group  z-10 ">
                    <div className="modal   fixed w-[100vw] h-[100vh] z-10  opacity-0 group-hover:opacity-100  bg-black/50 top-0 right-0 pointer-events-none"></div>

                    <div className="index-menu-item__header flex    group-hover:z-10  items-center justify-between gap-1   ">
                        <RiDiscountPercentFill />
                        <h2>محصولات با تخفیف</h2>
                        <IoArrowDown className="  group-hover:rotate-180 transition-all" />
                    </div>


                    <div className="index-menu-item__menu absolute top-full z-10 bg-gray-800 text-white w-28 group-hover:opacity-100   flex  flex-col items-center rounded-[2px]  p-2  transition-all opacity-0    cursor-pointer select-none">

                        <div className="index-menu-item__menu relative w-full z-20 p-1  flex justify-center items-center gap-1 text-[15px]  border-b    border-gray-500">
                            <MdCampaign />
                            <p>
                                کمپین ها
                            </p>
                        </div>
                        <div className="index-menu-item__menu relative  w-full  z-20 p-1  flex justify-center items-center gap-1 text-[15px]  border-b    border-gray-500">
                            <MdCelebration />
                            <p>
                                جشنواره ها
                            </p>
                        </div>



                    </div>
                </div>

                <div className="index-menu-item flex justify-center items-center gap-2 relative group z-10">

                <div className="modal fixed w-[100vw] h-[100vh]  opacity-0  group-hover:opacity-100 bg-black/60 top-0 right-0 z-10  pointer-events-none"></div>
                    <div className="index-menu-item__header flex   group-hover:z-10  items-center justify-between gap-1  ">
                      
                        <FaLaptop />
                        <h2>لوازم الکترونیک</h2>
                        <IoArrowDown className="  group-hover:rotate-180 transition-all" />
                    </div>


                    <div className="index-menu-item__menu absolute top-full z-10 bg-gray-800 text-white w-28 group-hover:opacity-100   flex  flex-col items-center rounded-[2px]  p-2  transition-all opacity-0   cursor-pointer select-none ">

                        <div className="index-menu-item__menu relative w-full z-20 p-1  flex justify-center items-center gap-1 text-[15px]  border-b    border-gray-500">
                            <MdSmartphone />
                            <p>
                                گوشی
                            </p>
                        </div>
                        <div className="index-menu-item__menu relative  w-full  z-20 p-1  flex justify-center items-center gap-1 text-[15px]  border-b    border-gray-500">
                            <FaLaptop />
                            <p>
                                لپتاپ
                            </p>
                        </div>



                    </div>
                </div>
                <div className="index-menu-item flex justify-center items-center gap-2">
                    <FaPhoneSquare />
                    <h2>تماس با ما</h2>

                </div>
            </div>

        </div>




    </div>)
}