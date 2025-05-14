import FooterFootball from "./footerFootball";
import HeadFootball from "./headfootball";
import BodyFootball from "./bodyFootball";
function OurProspect() {
    return (<>
    
    <div className=" flex  flex-col justify-center items-center">
    <HeadFootball/>
  <BodyFootball textValue={"Our Prospect"}/>
     <FooterFootball/>
    </div>
    </>  );
}

export default OurProspect;