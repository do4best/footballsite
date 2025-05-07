import img1 from './images/players/mesi.jpeg'
import img2 from './images/players/fly.jpeg'
import img3 from './images/players/rakuten.jpeg'
import img4 from './images/players/neymar.jpeg'
function FootballTeams() {
    return (<>
    
    <div className="carousel carousel-end space-x-1  rounded-box">
  <div className="carousel-item w-1/4">
    <img src={img1} alt="mesi" className='' />
  </div>
  <div className="carousel-item w-1/4">
    <img
  src={img2} alt="player" className='' />
  </div>
  <div className="carousel-item w-1/4">
    <img
    src={img3} alt="player1" className='' />
  </div>
  <div className="carousel-item w-1/4">
    <img
      src={img4} alt="player2" className='' />
  </div>
 
</div>
    </>  );
}

export default FootballTeams;