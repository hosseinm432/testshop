


export default function Form({ children }) {

    return (<div>
        <form action="">
            <div className="wrapper m-5 p-10
            text-center
            min-md:flex 
            min-md:flex-col
            
            
            min-md:w-3xl
           min-md:m-auto

            ">

                {children}

            </div>

        </form >
    </div>)
}
