

export default function Input({ onchangeF, customcalss, onblurF, name, placeholder, type, disabled }) {

    return (<div className={`  
    max-md:
    my-2
   
    

    min-md:
    
    min-md:flex justify-center
    ${customcalss}
     `}>
        {
            disabled ?
                <input
                    disabled
                    type={type}
                    onBlur={() => { onblurF }}
                    name={name}
                    placeholder={placeholder}
                    className={`

  border-red-500  
 border-b-6 p-2 w-full h-full ${customcalss}`}

                    onChange={(event) => { onchangeF(event) }} />
                : <input

                    type={type}
                    onBlur={() => { onblurF }}
                    name={name}
                    placeholder={placeholder}
                    className={`
      
             border-red-500  
            border-b-6 p-2 w-full h-full ${customcalss}`}

                    onChange={(event) => { onchangeF(event) }} />
        }






    </div >)
}