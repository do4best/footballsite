import { useEffect, useState } from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import { RiTeamFill, RiTeamLine } from "react-icons/ri";
import { IoFootball } from "react-icons/io5";
import { TiLocation } from "react-icons/ti";
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa6";
import { MdOutlineDarkMode } from "react-icons/md";
import FootballTranslation from './footballTranslation';
import { NaveBarData } from './naveBarData';
import { Link,Route,Routes } from 'react-router';
import MainFootball from './mainFootball';
import OurProspect from'./ourProspect';
import OurTeam from './outTeam';
import OurLocation from './ourLocation';
function HeadFootball() {
  const [sideNave,setSideNave] = useState(false)
  const [dark,setDark] = useState(localStorage.getItem('theme')||'acid')
  useEffect(()=>{
    localStorage.setItem('theme',dark)
    document.querySelector('html').setAttribute('data-theme',dark)
  },[dark])
  const toggleTheme = ()=>{
    setDark(dark === 'acid'?'business':'acid')
  }
    return (<>
    
    <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-none">
   
    <AiOutlineMenu size={25} onClick={()=>setSideNave(!sideNave)}/>

    {
      sideNave ? (  <div className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0" onClick={()=>setSideNave(!sideNave)}></div>):("")
    }
    {/* laungage button option */}
   <details className="dropdown absolute top-2 right-42 sm:right-28 md:right-60  ">
  <summary className="btn m-1 ">Language</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><FootballTranslation/>
        </li></ul> 
  </details> 
    <div className={sideNave ? "fixed top-0 left-0 w-[300px] h-screen  bg-blue-500 z-10 duration-200":"fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-200"}>
      <AiOutlineClose size={25} onClick={()=>setSideNave(!sideNave)} className='absolute right-4 top-4 cursor-pointer'/>
      <h2 className='text-2xl font-semibold font-stretch-50% text-white mt-2 ml-2'>{sideNave?'Our Obligation':''}</h2>
<nav>
  <ul className="flex flex-col p-4 text-white">
    {NaveBarData.map(({title,path,icons})=>(
 <li  key={title}>
  <Link to={path} className='text-xl py-4 flex items-center transition-transform duration-200 hover:scale-105 hover:shadow-lg'>
  

  <span className="transition-transform duration-200 hover:scale-125">
  {icons}
  </span>
  {title}
</Link>

 </li>
    ))}
   
  </ul>
</nav>
    </div>

  </div>
  <div className="flex-1 ">
    <a className=" text-xl cursor-pointer ml-3">Irfan Football Club</a>

    

  </div>
  <div className="flex gap-2">
  <span className="fixed top-2 right-35  sm:absolute sm:right-50 mt-2 " onClick={toggleTheme}>{!dark === 'acid'?<FaRegLightbulb size={30}/>:<FaLightbulb size={30}/>} </span>
    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>


</div>


    </>  );
}

export default HeadFootball;