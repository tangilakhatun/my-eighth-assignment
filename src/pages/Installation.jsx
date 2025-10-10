
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import downImg from '../assets/dounlod.png'
import starImg from '../assets/star.png'

const Installation = () => {
  const apps = useLoaderData() || [];
  const [installedAppIds, setInstalledAppIds] = useState([]); 
  const [sortBy, setSortBy] = useState(""); 

  useEffect(() => {
    const installedAppIds = JSON.parse(localStorage.getItem("installedApps") || "[]");
    setInstalledAppIds(installedAppIds);
  }, []);

  function handleUninstall(id) {
    let installedAppIds = JSON.parse(localStorage.getItem("installedApps") || "[]"); 
    installedAppIds = installedAppIds.filter(x => x !== id);
    localStorage.setItem("installedApps", JSON.stringify(installedAppIds));
    setInstalledAppIds(installedAppIds);
    toast("App uninstalled");
  }

 
  let installedData = apps.filter(a => installedAppIds.includes(a.id));

 
  if(sortBy === "az") {
    installedData.sort((a,b) => a.title.localeCompare(b.title));
  } else if(sortBy === "za") {
    installedData.sort((a,b) => b.title.localeCompare(a.title));
  }

  return (
    <section className='max-w-[1400px] mx-auto mt-[80px]'>
 <div>
      <h2 className='text-[#001931] text-[48px] font-bold text-center ' >Your Installed Apps</h2>
      <p className='text-[#627382] text-[20px] text-center'>Explore All Trending Apps on the Market developed by us</p>
      <div className='flex sm:flex-row flex-col justify-between items-center'>
        <div className='text-[24px] font-semibold'>({installedData.length}) Apps Found</div>
        <div>
             {installedData.length > 0 && (
        <div style={{ marginBottom: "1rem" }}>
          <label className='input mt-6'>
          <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value="">Sort By Size</option>
            <option value="az">high-low</option>
            <option value="az">low-high</option>
          </select>
          </label>
        </div>
      )}
        </div>
      </div>


      {installedData.length === 0 ? (
        <p>No installed apps yet.</p>
      ) : (
        <div className="grid-3">
          {installedData.map(app => (
            <div key={app.id} className="">
                <div className='bg-white flex flex-col sm:flex-row justify-between rounded-2xl shadow-2xl transform transition duration-300 hover:scale-105 mt-7 mb-6 items-center'>
                    <div className='flex'> 
                        <img className='w-30 h-30 p-4 rounded-2xl' src={app.image} alt={app.title} />
              <div>
                <h1 className='card-title mt-3 ml-3'>{app.title}</h1>
                <div>
                    <div className='flex flex-col sm:flex-row justify-between items-center'>
                            <div className='flex mx-3 my-3 items-center rounded-[8px] gap-2  p-1' >
                                <img src={downImg} alt="" />
                                <p className='text-[#00D390]'>{app.downloads}</p>
                            </div>
                            <div className='flex mx-3 my-3 items-center gap-2 p-1 rounded-[8px]  '>
                                <img src={starImg} alt="" />
                                <p className='text-[#FF8811] '>{app.ratingAvg}</p>
                            </div>
                            <p className='text-[#627382]'>{app.size}MB</p>
                        </div>
                </div>
              </div>
                    </div>
                    <button className='bg-[#00D390] btn mr-3 px-5 mb-3 text-white' onClick={() => handleUninstall(app.id)}>Uninstall</button>
                </div>
              
              
            </div>
          ))}
        </div>
      )}
      <ToastContainer />
    </div>
    </section>
   
  );
};

export default Installation;
