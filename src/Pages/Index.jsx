import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import Header_Title from "../Components/Header-Title/Header_Title";
import { RiDiscountPercentFill } from "react-icons/ri";
import { useEffect, useState, useRef } from "react";
import Product_cart from "../Components/Product_cart/Product_cart";
import Notifcation from "../Components/Notifcation/Notifcation";

import { HiH2 } from "react-icons/hi2";
import baseurl from "../Utility/baseurl";
import { use, lazy, Suspense } from 'react'
import { useSwipeable } from "react-swipeable";


import Footer from "../Components/Footer/Footer";
import * as React from 'react';

import IndexMenu from "../Components/IndexMenu/IndexMenu";
import NavigationMenu from "../Components/Navigation/Navigation";
import { Outlet } from "react-router-dom";

import Header from "../Components/Header/Header";
import { BsWallet2 } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { TiArrowBack } from "react-icons/ti";
import ArticleCart from "../Components/ArticleCart/ArticleCart";



import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Pagination ,  Navigation , A11y } from "swiper/modules";




export default function Index() {
    const [notititle, setnoti] = useState('fff')
    const [products, setproducts] = useState([])
    const [not, setnote] = useState(false)
    const [topic, settopic] = useState('')
    const [user, setuser] = useState({})
    const [time, settime] = useState()
    const [articles, setarticles] = useState([])
    const scrollbar_custom = useRef(null)

    function QAitemhancler(item) {
        if (item.classList.contains('active')) {
            item.classList.remove('active', 'h-28');
            item.classList.add('h-8');
        } else {
            item.classList.remove('h-8');
            item.classList.add('active', 'h-28');
        }
    }
    async function getProducts() {

        const res = await fetch(`${baseurl}/products`)
        console.log(res);


        const data = await res.json()
        console.log(data);



        setproducts(data.data)

    }

    async function getUser() {
        // const products = await fetch(`${baseurl}/user`)


        const res = await fetch(`${baseurl}/user`, {
            credentials: "include"
        })
        console.log(res);


        const data = await res.json()
        console.log(data);

        setuser(data.user)

    }

    useEffect(() => {

        // getUser()
        getProducts()


        getarticles()

    }, [])

    async function getarticles() {
        const feth = await fetch(`${baseurl}/articles`)

        const res = await feth.json()
        if (res) {
            setarticles(res.articles)
        }



    }
    return (<div className="index  relative  w-full min-h-screen  space-y-2   flex flex-col  ">

        {/* <input onChange={(event) => { settime(event.target.value) }} type="datetime-local" placeholder="gggggggggg" /> */}


        <Header></Header>

        <IndexMenu></IndexMenu>

        <div className="photo-slider swiper2  overflow-hidden max-md:h-50  h-[600px]">
            <div className="swiper-wrapper h-full">
                <Swiper
                    modules={[Scrollbar, Autoplay]}
                    slidesPerView={1}
                    scrollbar={{ draggable: true }}
                    autoplay={true}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="  swiper-slide w- h-full relative  ">
                            <div className="  overflow-hidden w-full h-full  relative">
                                <img src="..\images\category (1).png" className=" w-full h-full   object-cover" alt="" />
                                <div className="   absolute bottom-0  w-full  h-24  bg-gradient-to-b  from-transparent to-black flex  mx-auto items-center px text-white px-7 lg:text-2xl max-lg:text">
                                    <h2  > کالا های متنوع</h2>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="  swiper-slide w- h-full relative  ">
                            <div className="  overflow-hidden w-full h-full  relative">
                                <img src="..\images\category (4).png" className=" w-full h-full   object-cover" alt="" />
                                <div className="   absolute bottom-0  w-full lg:h-45 max-lg:h-25 bg-gradient-to-b  from-transparent to-black flex  mx-auto items-center text-white px-7 lg:text-2xl max-lg:text">
                                    <h2  > کالا های متنوع</h2>
                                </div>



                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="  swiper-slide w- h-full relative  ">

                            <div className="  overflow-hidden w-full h-full  relative">
                                <img src="..\images\category (2).png" className=" w-full h-full   object-cover" alt="" />
                                <div className="   absolute bottom-0  w-full lg:h-45 max-lg:h-25 bg-gradient-to-b  from-transparent to-black flex  mx-auto items-center px text-white px-7 lg:text-2xl max-lg:text">
                                    <h2  > کالا های متنوع</h2>
                                </div>



                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="  swiper-slide w- h-full relative  ">

                            <div className="  overflow-hidden w-full h-full  relative">
                                <img src="..\images\category (7).png" className=" w-full h-full   object-cover" alt="" />
                                <div className="   absolute bottom-0  w-full lg:h-45 max-lg:h-25 bg-gradient-to-b  from-transparent to-black flex  mx-auto items-center px text-white px-7 lg:text-2xl max-lg:text">
                                    <h2  > کالا های متنوع</h2>
                                </div>



                            </div>

                        </div>
                    </SwiperSlide>
                </Swiper>







            </div>




        </div>



        <main className=" xl:px-60 lg:px-28   max-lg:px-6  space-y-10  w-full">








            <div className="new-product  px-2 w-full ">
                <Header_Title title={'جدید ترین محصولات '}></Header_Title>
                <div className="  overflow-hidden flex  justify-between  max-md:flex-col flex-wrap ">



                    {products.length ? products.map(item => {
                        return <><Product_cart
                            title={item.title}
                            price={item.price}
                            des={item.shortDescription}
                            id={item._id} topic={item.category} img={item.pictures[0]}
                            rates={0} />

                        </>
                    }) : <h2>کالایی یافت نشد</h2>}


                </div>
            </div>
            <div className="categories w-full   my-16 ">
                <Header_Title title={'دسته بندی ها'}></Header_Title>

                <div className="items flex justify-between  text-center w-full ">
                    <div className="category-item w-25 h-25  text-center">
                        <div className="w-24 h-24  overflow-hidden">
                            <img className=' w-full h-full object-center' src="https://www.svgrepo.com/show/190786/laptop.svg" alt="" />
                        </div>

                        <h2>کالای دیجیتال</h2>
                    </div>
                    <div className="category-item w-25 h-25  text-center">
                        <div className="w-24 h-24  rounded-full overflow-hidden">
                            <img className=' w-full h-full object-center origin-center' src="../images/categories/Capture.PNG" alt="" />
                        </div>

                        <h2>
                            خوراکی

                        </h2>

                    </div>
                    <div className="category-item w-25 h-25  text-center">
                        <div className="w-24 h-24  rounded-full overflow-hidden">
                            <img className=' w-full h-full object-center origin-center' src="../images\categories\writing.png" alt="" />
                        </div>

                        <h2>
                            لوازم التحریر

                        </h2>
                    </div>
                    <div className="category-item w-25 h-25  text-center">
                        <div className="w-24 h-24  rounded-full overflow-hidden">
                            <img className=' w-full h-full object-center origin-center' src="../images\categories\home-tools.png" alt="" />
                        </div>

                        <h2>
                            لوازم خانگی

                        </h2>
                    </div>
                    <div className="category-item w-25 h-25  text-center">
                        <div className="w-24 h-24  rounded-full overflow-hidden">
                            <img className=' w-full h-full object-center origin-center' src="../images\categories\tools.png" alt="" />
                        </div>

                        <h2>
                            لوازم فنی
                        </h2>
                    </div>
                    <div className="category-item w-25 h-25  text-center">
                        <div className="w-24 h-24  rounded-full overflow-hidden">
                            <img className=' w-full h-full object-center origin-center' src="../images\categories\makeup.png" alt="" />
                        </div>

                        <h2>
                            لوازم آرایشی و بهداشتی
                        </h2>
                    </div>
                    <div className="category-item w-25 h-25  text-center">
                        <div className="w-24 h-24  rounded-full overflow-hidden">
                            <img className=' w-full h-full object-center origin-center' src="../images\categories\cloth.png" alt="" />
                        </div>

                        <h2>
                            لباس و پوشاک
                        </h2>
                    </div>
                    <div className="category-item w-25 h-25  text-center">
                        <div className="w-24 h-24  rounded-full overflow-hidden">
                            <img className=' w-full h-full object-cover origin-center' src="../images\categories\art.png" alt="" />
                        </div>

                        <h2>
                            ابزار هنری
                        </h2>
                    </div>
                </div>


            </div>

            <div className="presellproducts  w-full ">
                <Header_Title title='محصولات پرفروش'></Header_Title>


                <Swiper
                   modules={[Navigation, Pagination, Scrollbar, A11y]}
                    slidesPerView={4}
                    scrollbar={{ el: '.sss', draggable: true }}
                    navigation
                 
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        1080: { slidesPerView: 3 },
                        1200: { slidesPerView: 4 }
                    }}
                    className="mySwiper2 w-full"

                >

                    {products.length ? products.map(item => {
                        return <SwiperSlide> <Product_cart
                            title={item.title}
                            price={item.price}
                            des={item.shortDescription}
                            id={item._id} topic={item.category} img={item.pictures[0]}
                            rates={0} author={item.creator} /> </SwiperSlide>
                               
                    }) : <h2>کالایی یافت نشد</h2>}
                </Swiper>

                <div className="presecc-product-button-el"></div>
                <div className="my-5">
                    <div className="sss" ref={scrollbar_custom}></div>
                </div>






            </div>



            <section className="why-choose-us">
                <div className="wrapper w-full p-4 ">

                    <h2 className="   text-redP text-2xl max-md:text-1xl">
                        چرا از این فروشگاه خرید کنیم ؟
                    </h2>



                    <div className="content p-2  max-md:p-0 bg-gray-300 mt-3  rounded-3xl flex  flex-wrap  justify-center items-center  w-full">

                        <div className="item h-28 max-md:h-32  w-[48%] max-md:w-full p-1  m-2  rounded-[16px] flex  bg-white justify-center items-center">
                            <div className="item-content h-full w-full   rounded-[16px] flex  bg-white  p-2 gap-6  items-center justify-between  border  border-gray-400">
                                <div className="icon">
                                    <BsWallet2 className=" text-7xl max-md:text-6xl stroke-[0.1px]   border-1 text-redS p-2 rounded-2xl" /></div>
                                <div className="content w-full  mb-6 ">
                                    <h2 className="title    max-md:text-[20px] font-bold text-2xl">
                                        پرداخت امن
                                    </h2>
                                    <p className="description">پیاده سازی روش های امن درگاه پرداخت</p>
                                </div>
                            </div>
                        </div>

                        <div className="item  max-md:h-32 h-28 w-[48%]  max-md:w-full p-1  m-2 rounded-[16px] flex  bg-white justify-center items-center">
                            <div className="item-content h-full w-full   rounded-[16px] flex  bg-white  p-2 gap-6  items-center justify-between  border  border-gray-400">
                                <div className="icon">
                                    <TbTruckDelivery className="text-7xl max-md:text-6xl   border-1 text-redS p-2 rounded-2xl" /></div>
                                <div className="content w-full  mb-6 ">
                                    <h2 className="title   mb-1 font-bold text-2xl">
                                        ارسال سریع
                                    </h2>
                                    <p className="description">
                                        استفاده از پست پیشتاز
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="item max-md:h-32 h-28 w-[48%]   max-md:w-full p-1  m-2  rounded-[16px] flex  bg-white justify-center items-center">
                            <div className="item-content h-full w-full   rounded-[16px] flex  bg-white  p-2 gap-6  items-center justify-between  border  border-gray-400">
                                <div className="icon">
                                    <BsBookmarkCheckFill className="text-7xl max-md:text-6xl stroke-[0.1px]  text-redS border-1  p-2 rounded-2xl" /></div>
                                <div className="content w-full  mb-6 ">
                                    <h2 className="title   mb-1 font-bold text-2xl">
                                        ضمانت کالا
                                    </h2>
                                    <p className="description">
                                        کالای باکیفیت و اوریجینال
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="item max-md:h-32 h-28 w-[48%]   max-md:w-full p-1  m-2  rounded-[16px] flex  bg-white justify-center items-center">
                            <div className="item-content h-full w-full   rounded-[16px] flex  bg-white  p-2 gap-6  items-center justify-between  border  border-gray-400">
                                <div className="icon">
                                    <TiArrowBack className=" text-7xl max-md:text-6xl stroke-[0.1px] border-1 text-redS p-2 rounded-2xl" /></div>
                                <div className="content w-full  mb-6 ">
                                    <h2 className="title   mb-1 font-bold text-2xl">
                                        برگشت کالا
                                    </h2>
                                    <p className="description">
                                        برگشت کالا در صورت ناراضی بودن
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>







            <section className="Articles flex  gap-11  flex-wrap justify-center items-center">

                <Header_Title title={'مقاله ها'}></Header_Title>
                {articles.map(item => {
                    return <ArticleCart
                        id={item._id} title={item.title} description={item.description} picture={item.picture} time={item.date} author={item.Author} date={item.date}>


                    </ArticleCart>
                })}
            </section>



            <section className="Q&A-qestion space-y-5 select-none">
                <h2 className="title  text-2xl">سوالات متداول</h2>
                <div className="content p-1">
                    <div onClick={(event) => { QAitemhancler(event.currentTarget) }} className="item  p-1 overflow-hidden  transition-all h-8  bg-gray-300 border border-black">
                        <h2 className=" max-md:text-[15px]">
                            چقدر طول می‌کشد تا سفارشم تحویل داده شود؟
                        </h2>
                        <hr className=" mx-3  my-1" />
                        <p >
                            معمولاً ۲۴ تا ۴۸ ساعت در شهرهای بزرگ و ۳ تا ۵ روز کاری در سایر شهرها
                        </p>
                    </div>
                    <div onClick={(event) => { QAitemhancler(event.currentTarget) }} className="item2F  p-1 overflow-hidden  transition-all h-8  bg-gray-300 border border-black">
                        <h2 className=" max-md:text-[15px]">
                            چرا نمی‌توانم پرداخت آنلاین انجام دهم؟
                        </h2>
                        <hr className=" mx-3  my-1" />
                        <p >
                            ممکن است مشکل از بانک شما باشد. لطفاً اینترنت و موجودی کارت را بررسی کنید یا با پشتیبانی تماس بگیرید.
                        </p>
                    </div>
                    <div onClick={(event) => { QAitemhancler(event.currentTarget) }} className="item2F  p-1 overflow-hidden  transition-all h-8  bg-gray-300 border border-black">
                        <h2 className=" max-md:text-[15px]">
                            چرا پس از خرید، ایمیل تایید دریافت نکردم؟
                        </h2>
                        <hr className=" mx-3  my-1" />
                        <p >
                            پوشه اسپم را بررسی کنید یا شماره سفارش را به پشتیبانی اطلاع دهید
                        </p>
                    </div>
                </div>
            </section>
        </main>
        {/* <div className="main w-full flex  px-4 items-center  bg-red-500 h-15 text-white m-1">
            <div className="flex gap-2">
                <h1 > دسته بندی :  </h1> <select onChange={(event) => {
                    settopic(event.target.value);
                }} className=" text-black red " name="" id="">
                    <option value="">هیچکدام</option>
                    <option value="Digital">کالای دیجیتال</option>
                    <option value="Electrical">لوازم الکترونیکی</option>
                    <option value="Cloth">لباس</option>
                </select>
            </div>
            <div className="flex gap-2 m-1">
                <h1 > قیمت:  </h1> <select className=" text-black red " name="" id="">
                    <option value="">هیچکدام</option>
                    <option value="expensive">ارزانترین</option>
                    <option value="Cheap">گرانترین</option>
                </select>
            </div>  <div className="flex gap-2 m-1">
                <h1 > دسته بندی :  </h1> <select className=" text-black red " name="" id="">
                    <option value="">هیچکدام</option>
                    <option value="Digital">کالای دیجیتال</option>
                    <option value="Electrical">لوازم الکترونیکی</option>
                    <option value="Cloth">لباس</option>
                </select>
            </div>
        </div> */}

        {/* {products.length ? (<div className="w-full product page flex p-1 gap-4 flex-wrap justify-center items-center "> {products.filter(product => { return product.category.includes(topic) }).map(product => {
            return <Product_cart key={product._id}
                title={product.title}
                price={product.price}
                des={product.shortDescription}
                id={product._id} topic={product.category} img={product.pictures[0]}
                rates={product.likes && product.likes.length || 0}

            ></Product_cart>

        })}
        </div>) : <h2>loading ...</h2>} */}


        <footer>
            <Footer></Footer>

        </footer>

    </div >)
}