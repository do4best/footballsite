import FooterFootball from "./footerFootball";
import HeadFootball from "./headfootball";
import BodyFootball from "./bodyFootball";
function OurLocation() {
    return (<>
    <div className=" flex  flex-col justify-center items-center">
    <HeadFootball/>
  <BodyFootball textValue={"Our Location"}/>
     <FooterFootball/>
    </div>
    </>  );
}

export default OurLocation;