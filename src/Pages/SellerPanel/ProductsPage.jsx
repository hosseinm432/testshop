import { useEffect, useState } from "react"
import Input from "../../Components/Input/Input"
import Button from "../../Components/Button/Button";
import { use } from "react";
import baseurl from "../../Utility/baseurl";



export default function ProductsPage() {
    let token = localStorage.getItem('shoptoken')
    const [products, setproducts] = useState([])
    const [loading, setloading] = useState(false)
    const [showeditmenu, setshowmenu] = useState(false)


    useEffect(() => {
        getallproducts()
    }, [])




    const [productid, setproductid] = useState()
    const [name, setname] = useState('')
    const [description, setdesc] = useState('')
    const [shortdescription, setshortdescription] = useState('')
    const [topic, settopic] = useState('')
    const [price, setprice] = useState('')
    const [picture, setpicture] = useState(null)

    function editproduct(id) {


        console.log('s');

        let formdata = new FormData()
        formdata.append('name', name)
        formdata.append('description', description)
        formdata.append('topic', topic)
        formdata.append('price', price)
        formdata.append('picture', picture)

        fetch(`https://homi-node.liara.run/api/products/${productis}`, {
            method: 'PUT'
            , headers: { 'Authorization': `Bearer ${token}` }
            , body: formdata
        }).then(res => {
            console.log(res);
            return res.json()

        }).then(Res2 => console.log(Res2)
        )
        setshowmenu(false)
        setTimeout(() => {
            getallproducts()
        }, 1000);
        getallproducts()
    }


    function getallproducts() {
        setloading(true)
        fetch(`${baseurl}/seller/products`, {
            credentials: "include"
        }).then(res => {

            console.log(res)
            return res.json()

        }).then(Res2 => {
            console.log(Res2);

            if (Res2.products) {
                setproducts(Res2.products)
            }


            setloading(false)
        }
        )


    }
    function deleteproduct(id) {
        fetch(`https://homi-node.liara.run/api/products/${id}`,
            {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            }).then(res => {
                console.log(res);
                return res.json()

            }).then(Res2 => console.log(Res2)
            )
        getallproducts()
    }

    function addproduct() {
        let formdata = new FormData()
        formdata.append('title', name)
        formdata.append('description', description)
        formdata.append('category', topic)
        formdata.append('price', price)
        formdata.append('pictures', picture)

        fetch(`${baseurl}/products`, {
            method: 'POST'
            , credentials: "include"
            , body: formdata
        })

            .then(res => {
                console.log(res);
                return res.json()

            }).then(Res2 => console.log(Res2)
            )
            setTimeout(() => {
                getallproducts()
            }, 2000);
        getallproducts()
    }

    return (<div className=" w-full h-full  overflow-y-scroll ">


        محصولات من

        <h2>افزودن مصحول </h2>
        {showeditmenu && <div className="w-full h-full z-10   bg-black/85 absolute"><div className=" bg-white editmenu z-20 h- m-auto  flex  flex-wrap   justify-center items-center absolute top-[20%] right-[20%]">

            <Input onchangeF={(event) => { setname(event.target.value) }} type='text' placeholder={'نام محصول را وارد کنید'}></Input>
            <Input onchangeF={(event) => { setshortdescription(event.target.value) }} type='text' placeholder={'توضیحات کوتاه محصول را وارد کنید'}></Input>
            <Input onchangeF={(event) => { setdesc(event.target.value) }} type='text' placeholder={'توضیحات محصول را وارد کنید'}></Input>
            <Input onchangeF={(event) => { settopic(event.target.value) }} type='text' v placeholder={'موضوع محصول را وارد کنید'}></Input>
            <Input onchangeF={(event) => { setprice(event.target.value) }} type='number' v placeholder={'قیمت را وارد کنید'}></Input>
            <Input customcalss={'cursor-pointer'} onchangeF={(event) => { setpicture(event.target.files) }} type='file' v placeholder={'تصویر محصول را وارد کنید'}></Input>
            <Button title={'ارسال'} onclickF={(id) => { editproduct(id) }}>send</Button>
            <Button title={'کنسل'} customclassName={'m-5'} onclickF={() => { setshowmenu(false) }}>کنسل</Button>
        </div></div>}


        <form action="" className="addnewproduct flex gap-2 flex-wrap">
            <Input onchangeF={(event) => { setname(event.target.value) }} type='text' placeholder={'نام محصول را وارد کنید'}></Input>
            <Input onchangeF={(event) => { setdesc(event.target.value) }} type='text' placeholder={'توضیحات محصول را وارد کنید'}></Input>
            <Input onchangeF={(event) => { setshortdescription(event.target.value) }} type='text' placeholder={'توضیحات کوتاه محصول را وارد کنید'}></Input>
            <Input onchangeF={(event) => { settopic(event.target.value) }} type='text' v placeholder={'موضوع محصول را وارد کنید'}></Input>
            <Input onchangeF={(event) => { setprice(event.target.value) }} type='number' v placeholder={'قیمت را وارد کنید'}></Input>
            <Input customcalss={'cursor-pointer'} onchangeF={(event) => { if (event.target.files[0].length) { setpicture(event.target.files[0]) } }} type='file' placeholder={'نام محصول را وارد کنید'}></Input>
            <Button title={'افزودن'} onclickF={addproduct} customclassName={'w-[200px] text-black-200'}>send</Button>
        </form>

        <table className="w-full text-center mt-9">
            <thead>
                <tr>
                    <th>id</th>
                    <th>نام</th>
                    <th>توضیحات</th>
                    <th>قیمت</th>
                    <th>دسته بندی</th>
                    <th>عکس</th>
                </tr>
            </thead>
            {loading && <h2>loading ....</h2>}
            <tbody>

                {products.map((product, index) => {
                    return <tr>
                        <td>{index + 1}</td>
                        <td>{product.title}</td>
                        <td>{product.description}</td>
                        <td>{product.price.toLocaleString()}</td>
                        <td>{product.category}</td>
                        <td><div className="w-15 h-15"><img className="w-full h-full" src={product.pictures[0]} alt="" /></div></td>
                        <td><Button

                            title={'ویرایش'}></Button></td>
                        <td><Button title={'حذف'}></Button></td>
                        <td><Button title={'تخفیف'}></Button></td>

                    </tr>
                })}
            </tbody>
        </table>
    </div>)
}