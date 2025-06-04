import Header from "../../Components/Header/Header"

export default function ErrorNotfound() {
    return (<div className="w-full h-[50%]">
        <Header ></Header>
        <div className="w-full h-full flex  justify-center items-center">
            <h2 className=" font-bold text-9xl text-red-500">404</h2>

            {localStorage.getItem('shoptoken') ? (<></>) : (<>ثبت نام ورود</>)}
        </div>
    </div>)
}