import footImage from './images/myfot.jpg'
function BodyFootball({textValue}) {
    return (<>
    
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      `url(${footImage})`,
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">{textValue}</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt doloribus, repellendus molestiae praesentium corporis hic, voluptas eveniet maxime ex aspernatur sequi deleniti odit veniam, ea ullam neque quod? Libero error, corrupti nesciunt obcaecati impedit blanditiis sunt fuga quod ducimus dignissimos aut sit adipisci ut accusantium, maxime earum tempore facilis sed?
      </p>
   
    </div>
  </div>
</div>
    
    </>  );
}

export default BodyFootball;