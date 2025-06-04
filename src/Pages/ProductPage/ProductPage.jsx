import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import baseurl from "../../Utility/baseurl"


import Header from "../../Components/Header/Header"
import Button from "../../Components/Button/Button"
export default function ProductPage({ }) {
    const [product, setproduct] = useState([])
    const [products, setproducts] = useState([])
    const [commenttext, setcommenttext] = useState('')
    const [comments, setcomments] = useState([])
    let y = useParams()


    async function getprodcut() {
        console.log('y', y);

        await fetch(`${baseurl}/products/${y.name}`)
            .then(response => {
                console.log(response);

                return response.json()
            }).then(res => {
                console.log('sss');
                console.log(res)
                setproduct(res.product)
                setproducts(res.similarproducts)

            })
    }

    useEffect(() => {
        getprodcut()


    }, [])


    useEffect(() => {

        setcomments(comments)
    }, [product])
    return (<div>
        <Header></Header>
        <main>
            <div className="containerp h-[100rem] my-7 space-y-24 m-auto  lg:p-10 p-1 ">

                <div className="product-picture m-auto flex flex-wrap w-96 h-96 justify-center items-center max-md:w-full  overflow-hidden rounded-2xl">
                    {
                        product && product.pictures
                        && product.pictures
                            .map(item => {
                                return <img className="w-full h-full" src={item} alt="" />
                            })
                    }

                </div>

                <h1 className="product-title text-center my-7 text-3xl font-semibold"> {product && product.title}</h1>


                <div className="product-description text-center w-full flex justify-center items-center my-5 text-3xl font-semibold text-wrap   break-all flex-wrap  bg-gray-800 rounded-2xl flex-col px-3">

                    <h2 className="product-description-title text-gray-200">توضیحات</h2>
                    <div className="product-description bg-gray-900 border-white border-2 text-white w-full text-[19px] my-4 p-4">
                        <h2 >{product && product.description}</h2>
                    </div>


                </div>


                <hr className="my-3 bg-red-500 text-red-500" />

                <h3 className=" product-price text-center my-7 text-4xl font-semibold">قیمت : {product && product.price && product.price.toLocaleString()}</h3>

                <hr className="my-3 bg-red-500 text-red-500" />

                <div className="flex w-full text-center justify-center ">

                    <div className="flex flex-col ">
                        <h3 className="product-owner text-center my-7 text-3xl font-semibold">فروشنده : {product && product.creator === 'homi' ? 'ADMIN' : product && product.creator}</h3>
                        <h3 className="product-created text-center my-7 text-3xl font-semibold"> تاریخ ایجاد :{product && product.createdAt && product.createdAt.substring(0, 10)} </h3>
                    </div>
                    <div>

                        <h3 className="product-likes text-center my-7 text-3xl font-semibold"> محبوبیت : {product && product.likes && product.likes.length}</h3>

                        <h3 className="product-category text-center my-7 text-3xl font-semibold">دسته بندی ها : {product && product.category}</h3>
                    </div>



                </div>

                <div className="comments  bg-gray-600 p-3 rounded-2xl">
                    <div className="comment-register w-full text-wrap text-3xl break-all  rounded-2xl text-white flex justify-center items-center bg-gray-900 h-50   flex-col px-7">
                        <textarea onChange={(event) => { setcommenttext(event.target.value) }} placeholder="نظر خود را درمورد این محصول ثبت کنید ..." className="w-full h-[90%] text-wrap text-2xl break-all outline-0 p-2 mx-7 " type="text"

                        />
                        <Button title={'ثبت نظر'} onclickF={() => {

                            fetch(`${baseurl}/comment/${product._id}`, {
                                method: 'POST',
                                headers: {

                                    'Content-Type': 'application/json'
                                }, credentials: "include",
                                body: JSON.stringify({ productId: product._id, title: commenttext })
                            }).then(res => {
                                console.log(res);

                                getprodcut()
                            }

                            );
                            // getprodcut()

                        }} customclassName={'text-center text-[15px]  w-full  m-7 bg-red-500 text-white rounded-2xl'} >ثبت نظر </Button>

                    </div>


                    <ul>
                        {product.comments && product.comments.map(item => <li >
                            <div className=" flex p-6 gap-3 w-full justify-between text-white bg-blue-900  my-3 rounded-2xl">
                                <div className=" right-hand flex  gap-3 w-full  ">



                                    <div className="comment_ing w-10 h-10    flex flex-col">
                                        <img className="w-full h-full object-cover rounded-4xl" src={item.picture} alt="" />
                                        <h2 className={`
                         text-center
                         ${item.user_role == 'ADMIN' ? 'bg-amber-600' : (item.user_role == 'SELLER' ? 'bg-red-700' : 'bg-blue-700')}
                                    
                    text-[10px] text-white`}>{item.user_role}</h2>
                                    </div>
                                    <div className="flex flex-col">
                                        <h2>{item.user}</h2>
                                        <h2>{item.title}</h2>

                                    </div>
                                </div>
                                <div className=" left-hand">
                                    <h2 className="  grow-2">{item.createdAt}</h2>
                                </div>


                            </div>


                        </li>)}
                    </ul>



                </div>


            </div>
        </main>


    </div >)


}