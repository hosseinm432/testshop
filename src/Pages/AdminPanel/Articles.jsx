import Input from "../../Components/Input/Input"
import Button from "../../Components/Button/Button"
import { useEffect, useState } from "react"
import baseurl from "../../Utility/baseurl"
import { BiBody } from "react-icons/bi"
import { toast, ToastContainer } from "react-toastify"
import { useNavigate } from "react-router-dom"


export default function Articles() {
    const [title, settitle] = useState()
    const [desc, setdesc] = useState()
    const [picture, setpicture] = useState()
    const [articles, setarticles] = useState([])
    const navigation = useNavigate()

    useEffect(() => {

        getarticles()
    }, [])
    async function addArticle() {

        const data = new FormData
        data.append('title', title)
        data.append('description', desc)
        data.append('picture', picture)


        baseurl : 'http://localhost:3000/api'
        const fech = await fetch(`${baseurl}/articles`, {
            method: 'POST'
            , credentials: "include"
            , body: data
        })
        console.log(fech);
        const res = await fech.json()

        if (res.message == 'ok') {
            toast.success('مقاله افزوده شد')

        }

       

        

        getarticles()
    }
    async function getarticles() {
        const feth = await fetch(`${baseurl}/articles`)
     
        const res = await feth.json()
        if (res) {
            setarticles(res.articles)
        }
       
        console.log(res);
    }
    return (<div className="articles">

        <div className="articlees">
            {articles.map(item => {
                return <div>
                    <li onClick={() => { navigation(`/article/${item._id}`) }}>{item.title}</li>
                </div>
            })}
        </div>

        <div className="addArticle w-full  ">

            <div className="wrapper   space-y-10">
                <Input onchangeF={(event) => { settitle(event.target.value) }} placeholder={'عنوان مقاله را وارد کنید'} customcalss={''}></Input>
                <div className=" my-5 flex gap-5">
                    <label className="" htmlFor="">تصویر مقاله را وارد کنید</label>
                    <input onChange={(event) => { setpicture(event.target.files[0]) }} type="file" />
                </div>

                <textarea onChange={(event) => { setdesc(event.target.value) }} className=" w-full h-36 border-4 outline-0 p-2 rounded-2xl  border-red-400" placeholder="توضیحات مقاله را وراد کنید" name="" id=""></textarea>
                <Button onclickF={() => { addArticle() }} title={'افزودن مقاله'}></Button>
            </div>

        </div>
        <ToastContainer></ToastContainer>
    </div >)
}