import { useState } from "react";

function Ul() {
   const [isOPen, setIsOpen] = useState(false)
  return (
    <div className="  relative flex flex-col items-center w-[340px] h-[340px] rounded-md">
    <button onClick={() => setIsOpen((prev) => !prev)} className=" bg-green-400 w-full flex items-center justify-between tracking-wider border">Category
    {!isOPen ?(
        <i class="fa-solid fa-caret-down"></i>
    ) : (
        <i className="fa-solid fa-chevron-up"></i>
    )

    }
    </button>
    {isOPen &&(
        <div className=" bg-white absolute top-20 flex flex-col items-start rounded-md p-2 w-full" >
            <ul>
                <li>home</li>
                <li>home</li>
                <li>home</li>
                <li>home</li>
                <li>home</li>
            </ul>
        </div>
    )}
  </div>
  )
}


export default Ul