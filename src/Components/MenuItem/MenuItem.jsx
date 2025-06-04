import { useState } from "react";
import { Link } from "react-router-dom";
export default function MenuItem({ icon, title }) {

    return <div
        onBlur={(event) => { event.target.className -= ' text-blue-400  bg-blue-950 border-1 border-white' }}
        onFocus={(event) => { event.target.className += ' text-blue-400  bg-blue-950 border-1 border-white`' }}
         className={``}> 
          <Link >{icon}<h2 className={`  inline `}> {title}
            هزار تومان</h2></Link></div>



}