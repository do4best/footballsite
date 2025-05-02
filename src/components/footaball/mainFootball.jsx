import BodyFootball from "./bodyFootball";
import FootballTeams from "./footballTeams";
import FooterFootball from "./footerFootball";
import HeadFootball from "./headfootball";

function MainFootball() {
    return ( <>
    <div className=" flex  flex-col justify-center items-center">
    <HeadFootball/>
    <BodyFootball/>
    <FootballTeams/>
    <FooterFootball/>
    </div>
    </> );
}

export default MainFootball;