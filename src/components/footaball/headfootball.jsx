import { useState } from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import { RiTeamFill, RiTeamLine } from "react-icons/ri";
import { IoFootball } from "react-icons/io5";
import { TiLocation } from "react-icons/ti";
function HeadFootball() {
  const [sideNave,setSideNave] = useState(false)
    return (<>
    
    <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-none">
   
    <AiOutlineMenu size={25} onClick={()=>setSideNave(!sideNave)}/>

    {
      sideNave ? (  <div className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"></div>):("")
    }
    <div className={sideNave ? "fixed top-0 left-0 w-[300px] h-screen text-gray-600 bg-white z-10 duration-200":"fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-200"}>
      <AiOutlineClose size={25} onClick={()=>setSideNave(!sideNave)} className='absolute right-4 top-4 cursor-pointer'/>
      <h2 className='text-2xl text-blue-500 mt-2 ml-2'> Our Obligation</h2>
<nav>
  <ul className="flex flex-col p-4 text-gray-900">
    <li className="text-xl py-4 flex">
      <IoFootball size={25} className='mr-4 text-white bg-black rounded-full '/>
      Our Prospects

    </li>
    <li className="text-xl py-4 flex">
      <RiTeamFill size={25} className='mr-4 text-white bg-black rounded-full '/>
      Our Team

    </li>
    <li className="text-xl py-4 flex">
      <TiLocation size={25} className='mr-4 text-white bg-black rounded-full '/>
      Our Location

    </li>
  </ul>
</nav>
    </div>

  </div>
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Irfan Football Club</a>

  </div>
  

</div>
    </>  );
}

export default HeadFootball;