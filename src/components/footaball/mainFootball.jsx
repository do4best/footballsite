import BodyFootball from "./bodyFootball";
import FootballTeams from "./footballTeams";
import FooterFootball from "./footerFootball";
import HeadFootball from "./headfootball";
import OurProspect from './ourProspect.jsx'
import OurTeam from './outTeam.jsx'
import OurLocation from './ourLocation.jsx'
import { HashRouter, Routes, Route,RouterProvider } from 'react-router';
function MainFootball() {
    return ( <>
  
    <div className=" flex  flex-col justify-center items-center">
    <HeadFootball/>
    <BodyFootball textValue={"Hello There"}/>
    <div className="divider"></div>
    <FootballTeams/>
    <FooterFootball/>
    </div>
    


    </> );
}

export default MainFootball;