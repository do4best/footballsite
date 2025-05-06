import img1 from './images/players/mesi.jpeg'
import img2 from './images/players/fly.jpeg'
import img3 from './images/players/rakuten.jpeg'
import img4 from './images/players/neymar.jpeg'
function FootballTeams() {
    return (<>
    
    <div className="carousel carousel-end space-x-1  rounded-box">
  <div className="carousel-item w-1/4">
    <img src={img1} alt="Drink" className='' />
  </div>
  <div className="carousel-item w-1/4">
    <img
  src={img2} alt="Drink" className='' />
  </div>
  <div className="carousel-item w-1/4">
    <img
    src={img3} alt="Drink" className='' />
  </div>
  <div className="carousel-item w-1/4">
    <img
      src={img4} alt="Drink" className='' />
  </div>
 
</div>
    </>  );
}

export default FootballTeams;