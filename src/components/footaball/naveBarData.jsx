import { RiTeamFill, RiTeamLine } from "react-icons/ri";
import { IoFootball } from "react-icons/io5";
import { TiLocation } from "react-icons/ti";


export const NaveBarData=[{
icons:  <IoFootball size={25} className='mr-4 text-white bg-black rounded-full '/>,
title: "Our Prospects",
path:"/"
},
{
    icons:<RiTeamFill size={25} className='mr-4 text-white bg-black rounded-full '/>,
    title: "Our Team",
    path:"/ourteam"
    },
    {
        icons:<TiLocation size={25} className='mr-4 text-white bg-black rounded-full '/>,
        title: "Our Location",
        path:"/ourlocation"
        },

]