
import baseurl from "../../Utility/baseurl"
import { useState } from "react"
import Header from "../../Components/Header/Header"
import Input from "../../Components/Input/Input"
import { register } from "swiper/element"
import { HiArrowUturnLeft } from "react-icons/hi2";
import { IoIosWarning } from "react-icons/io";
import Form from "../../Components/Form/Form";
import { Link } from "react-router-dom";



export default function Register() {


    const [isvalid, setisvalid] = useState(false)
    const [name, setname] = useState('')
    const [username, setusername] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [role, setrole] = useState('user')
    const [picture, setpicture] = useState()
    const [loading, setloading] = useState(false)


    function Regsiter(event) {
        event.preventDefault()
        console.log(event);
        setloading(true)

        let formdata = new FormData()
        formdata.append('name', name)
        formdata.append('username', username)
        formdata.append('email', email)
        formdata.append('password', password)
        formdata.append('role', role)
        formdata.append('picture', picture)


       
        fetch(`${baseurl}/auth/register`, {
            method: 'POST'
            ,credentials : "include" ,
            body: formdata, 
        }
        ).then(res => {
            console.log(res);
            return res.json()
        }).then(res2 => {
            if (res2) {
                res2.AccessToken ?
                    localStorage.setItem('shoptoken', res2.AccessToken)
                    : ' '
                    setloading(false)
            }
            console.log(res2)
            // 
        }
        )
        // setTimeout(() => {
        //     setloading(false)
        // }, 1000);


    }


    return (<div>
        <Header></Header>

        Register

        <h2 className=" text-center  text-4xl">ثبت نام کنید</h2>
        <h3 className=" my-4 text-center t-3xl">ثبت نام کردید؟ <span className="text-red-500 "> <Link to='/login'>وارد شوید</Link></span></h3>
        <Form>
            <Input onblurF={() => console.log('s')
            } onchangeF={event => setname(event.target.value)}
                type='text' placeholder='نام  خود را وارد کنید'></Input>
            <Input onblurF={() => console.log('s')
            } onchangeF={event => setusername(event.target.value)}
                type='text' placeholder='نام کاریری خود را وارد کنید'></Input>
            {/*                
                <p className={`  text-red-800 ${name.length <= 3 ? ' ' : 'hidden'}`}><IoIosWarning className="inline " /> نام حداقل باید 3 حرف باشد.  </p> */}

            <Input onchangeF={event => setemail(event.target.value)}
                type='text'
                placeholder='ایمیل خود را وارد کنید'></Input>

            <Input
                type='text'
                placeholder='رمز عبور خود را وارد کنید'></Input>

            <Input
                onchangeF={event => setpassword(event.target.value)}
                type='text'
                customcalss={'w-full'}
                placeholder='مجددا رمز عبور خود را وارد کنید'></Input>

            <div div className=" 
                
                     lg:text-right
                     lg:mr-0

                w-30 flex flex-col  gap-3">
                <label htmlFor="" >کاربر
                    <input checked className=" mx-9 text-red-500 bg-red-500" value={'user'} type='radio' name="account" onInput={(event) => { setrole(event.target.value) }} ></input>
                </label>
                <label htmlFor="">فروشنده
                    <input className=" mx-3" style={{ '--swiper-theme-color': 'red' }} value={'seller'} type='radio' onInput={(event) => { setrole(event.target.value) }} name="account" ></input>
                </label>
            </div>


            <Input onchangeF={event => setpicture(event.target.files[0])} customcalss={'cursor-pointer'} placeholder={'ffff'} type={'file'}></Input>


            <button onClick={(event) => {
                Regsiter(event)
            }} className={`h-9  my-9 rounded-4xl text-white cursor-pointer w-full
                    ${isvalid ? 'bg-red-500' : 'bg-red-500'} `}>{loading ? <HiArrowUturnLeft className="loadbtn text-center m-auto w-8 h-8 rotate-12   " /> : 'ثبت نام'} </button>


        </Form>
    </div>)
}