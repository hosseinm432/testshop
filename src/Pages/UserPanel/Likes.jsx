import { useEffect, useState } from "react"
import baseurl from "../../Utility/baseurl"
import Button from "../../Components/Button/Button"
export default function Likes() {


    const [user, setuser] = useState({})
    const [likes, setlikes] = useState(null)

    async function getUser() {

        const res = await fetch(`${baseurl}/user`, {
            credentials: "include"
        })



        const data = await res.json()


        setuser(data.user)
        // setlikeLoader(false)
        // setsaveloader(false)
    }

    useEffect(() => {
        getUser()
    }, [])

    useEffect(() => {
        user.likedProducts && setlikes(user.likedProducts)
    }, [user])
    useEffect(() => {
        console.log(likes);

    }, [likes])
    async function registerLike(id) {
       
        const res = await fetch(`${baseurl}/user/likeproduct/${id}`, {
            method: "POST",
            credentials: "include"
        })


        const data = await res.json()

        console.log(res);
        getUser()
    }
    return <div className="flex w-full h-full justify-center  mt-7">
        {likes != null ?

            (likes.length ? (<div className="w-full  ">
                <table className=" w-full justify-center items-center flex  flex-col">
                    <thead className="w-full">
                        <tr className="flex w-full  justify-between ">
                            <th>شماره</th>
                            <th>نام</th>
                            <th>قیمت</th>
                            <th>عکس</th>
                            <th>توضیحات</th>

                        </tr>
                    </thead>
                    <tbody className="w-full" >
                        {likes.map((item, index) => {
                            return <tr className="flex w-full  justify-between  ">
                                <td>{index + 1}</td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td><div className="w-10 h-10"><img src={item.pictures[0]} alt="" /></div></td>
                                <td>{item.shortDescription}</td>
                                <td><Button title='حذف' onclickF={() => { registerLike(item._id) }}

                                ></Button></td>
                            </tr>
                        })}
                    </tbody>

                </table>
            </div>)
                : (<div>محصولی را لایک نکردید</div>))
            : (<div>loading ... </div>)}
    </div>
}