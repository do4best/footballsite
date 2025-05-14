import FooterFootball from "./footerFootball";
import HeadFootball from "./headfootball";
import BodyFootball from "./bodyFootball";
function OurTeam() {
    return (<>
<div className=" flex  flex-col justify-center items-center">
    <HeadFootball/>
  <BodyFootball textValue={"Our Team"}/>
     <FooterFootball/>
    </div>
    </>  );
}

export default OurTeam;