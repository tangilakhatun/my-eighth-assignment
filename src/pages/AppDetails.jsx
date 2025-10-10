import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import starImg from '../assets/star.png';
import downloadImg from '../assets/dounlod.png'
import rightImg from '../assets/right.png'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { ToastContainer,toast } from 'react-toastify';


export async function appLoader({params}){
  const res = await fetch("/Apps.json");
  const data = await res.json();
  const app = data.find(a => String(a.id) === params.id);
  if(!app){
    throw new Response("Not Found", { status:404 });
  }
  return app;

}



const AppDetails = () => {

   
    const app = useLoaderData();
    console.log(app)
    const [installed, setInstalled] =useState(false)

     useEffect(()=>{
    const installedApps = JSON.parse(localStorage.getItem("installedApps") || "[]");
    setInstalled(installedApps.includes(app.id));
  }, [app.id]);

   function handleInstall(e){
    e.stopPropagation();
    const installedApps = JSON.parse(localStorage.getItem("installedApps") || "[]");
    if(!installedApps.includes(app.id)){
      installedApps.push(app.id);
      localStorage.setItem("installedApps", JSON.stringify(installedApps));
      setInstalled(true);
      toast("Succsesfully installed")
    
    }
  }

  function prepareChartData(){
    
    return app.ratings.map(r => ({name: r.name, count: r.count}));}

    return (
       <div className="max-w-[1400px] mx-auto mt-[80px] ">
      <div className="flex flex-col md:flex-row gap-40">
        <img src={app.image} alt={app.title} className='rounded-md' />
        <div className=" max-w-[1050px] ">
          <h2 className='text-[32px] text-[#001931] font-bold '>{app.title}</h2>
          <p className='text-[20px] '> developed by:<span className='text-[#632EE3] font-medium'>{app.companyName}</span></p>
          <hr className='border-b-1 border-gray-300 mt-4 ' />
<div className='flex md:flex-row flex-col mt-10 justify-between  gap-12'>
    <div className=' flex flex-col justify-center items-center'>
        <img src={downloadImg}  className='w-[38px] h-[38px]' alt="" />
        <p className='text-[#001931]'>downloads</p>
        <h1 className='text-[#001931] text-[40px] font-extrabold'>{app.downloads}</h1>
    </div>
    <div className=' flex flex-col justify-center items-center'>
         <img src={starImg}  className='w-[38px] h-[38px]' alt="" />
        <p className='text-[#001931]'>Average Ratings</p>
        <h1 className='text-[#001931] text-[40px] font-extrabold'>{app.ratingAvg}</h1>
    </div>
    <div className=' flex flex-col justify-center items-center'>
         <img src={rightImg} className='w-[38px] h-[38px]' alt="" />
        <p className='text-[#001931]'>Total Reviews</p>
        <h1 className='text-[#001931] text-[40px] font-extrabold'>{app.reviews}</h1>
    </div>
</div>

          
          <button className='bg-[#00D390] px-[20px] py-[14px] rounded-sm text-white' disabled={installed} onClick={handleInstall}> 
            {installed ? "Installed" : "Install Now "}
          </button>
        </div>
      </div>
 <hr className=' border-1 border-gray-300 mt-10 mb-10' />

<section className="chart">
  <h3 className='text-[24px] font-semibold text-[#001931]'>Ratings</h3>
  <ResponsiveContainer width="100%" height={250}>
    <BarChart 
      data={prepareChartData().reverse()} 
      layout="vertical"
    >
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" />
      <Tooltip />
      <Bar 
        dataKey="count" 
        fill="#FFA500"
        radius={[0, 10, 10, 0]} 
      />
    </BarChart>
  </ResponsiveContainer>
</section>

  <hr className=' border-1 border-gray-300 mt-10 mb-10' />
      <section className='mt-7 mb-12'>
        <h3 className='text-[24px] font-semibold text-[#001931]'>Description</h3>
        <p className='text-[#627382] text-[20px]'>{app.description}</p>
      </section>
        <ToastContainer />
    </div>
    );
};

export default AppDetails;