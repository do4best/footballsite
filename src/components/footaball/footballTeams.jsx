import img1 from './images/players/mesi.jpeg'
import img2 from './images/players/fly.jpeg'
import img3 from './images/players/rakuten.jpeg'
import img4 from './images/players/neymar.jpeg'
import * as motion from "motion/react-client"
import { TeamDetails } from './teamDetails';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
function FootballTeams() {

    return (<>
    
    
    <div className="flex flex-row justify-center items-center  gap-4 flex-wrap">

{TeamDetails.map((value,index)=>(

  <div key={index} className="card bg-base-100 w-96 shadow-sm">
    <figure className='relative '>
   
      <img src={value.img} alt={value.title} className='w-full h-100 object-cover transition-transform duration-300 hover:scale-105 hover:shadow-xl'/>
    
    </figure>
    <div className="   absolute inset-0 flex flex-col justify-end items-center text-white p-4">
      <h2 className='text-xl font-bold card-title'>
        {value.title}
      </h2>
      <p className='text-sm  text-white opacity-75'>{value.paragraph}</p>
    </div>
    


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