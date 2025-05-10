import img1 from './images/players/mesi.jpeg'
import img2 from './images/players/fly.jpeg'
import img3 from './images/players/rakuten.jpeg'
import img4 from './images/players/neymar.jpeg'
import { TeamDetails } from './teamDetails';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
function FootballTeams() {
    return (<>
    
    
    <div className="flex flex-row justify-center items-center  gap-4 flex-wrap">

{TeamDetails.map((value,index)=>(

  <div key={index} className="card bg-base-100 w-96 shadow-sm">
    <figure className='relative'>
      <img src={value.img} alt={value.title}/>
    </figure>
    <div className="absolute inset-0  bg-opacity-40 flex  justify-center items-center text-white">
      <h2 className='text-xl font-bold'>
        {value.title}
      </h2>
    </div>
    <p className='text-sm absolute top-120  bg-opacity-40 text-white'>{value.paragraph}</p>


  </div>
))}

{/*   
    <img src={img1} alt="mesi" className='' />
  </div>
  <div className="carousel-item w-1/4">
    <img
  src={img2} alt="player" className='' />
  <p>This is the best</p>
  </div>
  <div className="carousel-item w-1/4">
    <img
    src={img3} alt="player1" className='' />
  </div>
  <div className="carousel-item w-1/4">
    <img
      src={img4} alt="player2" className='' /> */}

 
</div>
    </>  );
}

export default FootballTeams;