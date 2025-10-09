import React from 'react';
import { Link, useNavigate } from 'react-router';
import downImg from '../assets/dounlod.png'
import starImg from '../assets/star.png'

const AppCard = ({app}) => {
    const navigate =useNavigate();
    
    return (
        <div>
 <Link to={`/appDetails/${app.id}`}>
            <div  onClick={()=>navigate(`/app/${app.id}`)}>
      <div className="card bg-base-100 w-80 shadow-xl">
  <figure className="px-2 pt-4">
    <img
      src={app.image}
      alt=""
      className="rounded-3xl w-[300px] h-[300px]" />
  </figure>
  
    <h2 className="card-title mt-3 ml-3">{app.title}</h2>
    <div className='flex justify-between'>
        <div className='flex mx-3 my-3 items-center rounded-[8px] gap-2 bg-[#F1F5E8] p-1' >
            <img src={downImg} alt="" />
            <p className='text-[#00D390]'>{app.downloads}</p>
        </div>
        <div className='flex mx-3 my-3 items-center gap-2 p-1 rounded-[8px] bg-[#FFF0E1] '>
            <img src={starImg} alt="" />
            <p className='text-[#FF8811] '>{app.ratingAvg}</p>
        </div>
    </div>
    
  
</div>
    </div>
 </Link>
        </div>
    );
};

export default AppCard;