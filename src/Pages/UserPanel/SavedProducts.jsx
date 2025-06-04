import { use } from "react"
import { useState, useEffect } from "react"
import baseurl from "../../Utility/baseurl"
import Product_cart from "../../Components/Product_cart/Product_cart"
export default function SavedProducts() {
    const [user, setuser] = useState()
    const [products, setproducts] = useState(null)
    async function getUser() {

        const res = await fetch(`${baseurl}/user`, {
            credentials: "include"
        })



        const data = await res.json()


        setuser(data.user)


    }
    useEffect(() => {
        getUser()
    }, [])

    useEffect(() => {
        user && setproducts(user.savedProducts)


    }, [user])


    // async function getProducts() {
    //     if (products.length) {
    //         for (const item of products) {
    //             const res =await fetch(`${baseurl}/product/${item}`)
    //             const data =await res.json()
    //             console.log(res);


    //         }
    //     }
    // }

    useEffect(() => {
        // getProducts()

      console.log(products);

    }, [products])
    return <div className="  w-full h-9">
        {products != null ?

            (
                products.length  ? (products.map(product => {
                    return <Product_cart key={product._id}
                        title={product.product.title}
                        price={product.product.price}
                        des={product.product.shortDescription}
                        id={product.product._id}
                        topic={product.product.category}
                        img={product.product.pictures}
                        rates={product.product.likes.length}
                     
                    ></Product_cart>

                }))
                    :   <h2>آیتم ذخیره شده ای ندارید :)</h2>
            )
            : (<div className=" flex w-full h-full justify-center items-center">
              (<h2>loading ...</h2>)
                </div>)}

    </div>
}