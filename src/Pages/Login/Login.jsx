import Header from "../../Components/Header/Header"
import Input from "../../Components/Input/Input"
import Form from "../../Components/Form/Form"
import { Link } from "react-router-dom"
import { HiArrowUturnLeft } from "react-icons/hi2";
import { useState } from "react"
import Button from "../../Components/Button/Button";
import { Navigate } from "react-router-dom";

import baseurl from "../../Utility/baseurl.js";
import Notifcation from "../../Components/Notifcation/Notifcation.jsx";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


export default function Login() {

    let navigation = useNavigate()

    const navigae = useNavigate()
    const [username, setsername] = useState('')
    const [password, setpasswrod] = useState('')
    const [loading, setloading] = useState(false)

    async function Login(event) {

        try {

            const data = {
                username: username, // Change 'username' to 'email'
                password: password
            }

            await fetch(`${baseurl}/auth/login`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(res => {

                    console.log(res);
                    return res.json()
                }).then(res2 => {
                    console.log(res2);

                    if (res2.message == 'usernotfound') {
                        toast.error('نام کاربری یا رمز عبور اشتباه است!')
                    }
                    if (res2.message == 'logged inn') {
                        toast.success('با موفقیت وارد شدید !')
                        setTimeout(() => {
                            navigae('/')
                        }, 2000);
                   
                    }
                }
                ).catch(err => console.log(err))
            // setTimeout(() => {
            //     setloading(false)
            // }, 1000);
        } catch (error) {
            console.log("error ->", error.message);
        }

    }

    return (<div>
        <Header></Header>
        LOGIN


        <h2 className=" text-center  text-4xl">وارد شوید</h2>
        <h3 className=" my-4 text-center t-3xl">ثبت نام نکردید؟  <span className="text-red-500 "> <Link to='/register'>ثبت نام کنید</Link></span></h3>
        <Form ons >

            <Input onchangeF={(event => setsername(event.target.value))} placeholder={' نام کاربری خود را وارد کنید'} type="text" />
            <Input onchangeF={(event => setpasswrod(event.target.value))} placeholder={'رمز عبور  خود را وارد کنید'} type="text" />

            <Button onclickF={Login}
                title={'ورود'}></Button>

        </Form >
        <ToastContainer></ToastContainer>
    </div>)
}

// fetch('https://homi-node.liara.run/api/users/profile', {
//     method: 'GET',
//     headers: {
//         'Authorization': `Bearer ${localStorage.getItem}`, // Include token in header
//     }
// })