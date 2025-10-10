import React, { useState ,useEffect } from 'react';
import { useLoaderData } from 'react-router';
import AppCard from '../Component/AppCard';
import { Link, Search } from 'lucide-react';
import appImg from '../assets/App-Error.png';
import logoImg from '../assets/logo.png'



export async function appsLoader(){
  const res = await fetch("/Apps.json");
  const data = await res.json();
 return data;

}


 
const AllApps = () => {
  const apps = useLoaderData() || [];
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(apps);
  const [loading, setLoading] = useState(false); 
  useEffect(() => {
    setLoading(true); 
    const timer = setTimeout(() => {
      const q = query.trim().toLowerCase();
      const result = apps.filter(a => a.title.toLowerCase().includes(q));
      setFiltered(result);
      setLoading(false); 
    }, 500); 
    return () => clearTimeout(timer);
  }, [query, apps]);
    return (


<div className='max-w-[1400px] mx-auto mt-20'>
      <header className="title-row">
        <h1 className='text-[#001931] text-[48px] font-bold text-center'>Our All Applications</h1>
        <p className='text-[#627382] text-[20px] text-center mt-6'>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </header>

      <div className="flex flex-col md:flex-row justify-between items-center shadow-2xsl">
        <div className='text-[24px] font-semibold'>({apps.length}) Apps Found</div>
        <label className="input mt-3 m-3 flex items-center gap-2">
          <Search />
          <input
            type="text"
            placeholder='Search Apps'
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          
          {loading && (
            <span className="loading loading-spinner text-primary"></span>
          )}
        </label>
      </div>

      
      {loading ? (
         <div className="flex items-center text-7xl font-bold justify-center min-h-[60vh]">L <span > <img className='w-16 h-16 animate-spin' src={logoImg} alt="" /> </span> oding
                  
                </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-5 lg:grid-cols-4 gap-4">
          {filtered.length === 0 ? (
            <div className='flex justify-center col-span-4 h-screen items-center'>
              <div className='flex w-full mx-auto flex-col justify-center h-screen text-center items-center'>
                <img src={appImg} alt="" />
                <h1 className='text-[#001931] text-[48px] font-bold text-center'>OPPS!! APP NOT FOUND</h1>
                <p className='text-[#627382] text-[20px] text-center mt-6'>
                  The App you are requesting is not found on our system. Please try another app.
                </p>
                <div className='max-w-[1400px] flex justify-center mx-auto mt-20'>
                  <button className='bg-gradient-to-b from-[#632EE3] to-[#9F62F2] text-white font-semibold px-[30px] py-[12px] rounded-sm'>
                    Go Back Home Page!
                  </button>
                </div>
              </div>
            </div>
          ) : (
            filtered.map(app => (
              <AppCard key={app.id} app={app} />
            ))
          )}
        </div>
      )}
    </div>


    );
};

export default AllApps;