import React, { useState ,useEffect } from 'react';
import { useLoaderData } from 'react-router';
import AppCard from '../Component/AppCard';



export async function appsLoader(){
  const res = await fetch("/Apps.json");
  const data = await res.json();
 return data;

}

const AllApps = () => {
 const apps = useLoaderData()||[];
 console.log(apps);
 
 const [query, setQuery] =useState("  ");
 const [filtered, setFiltered] = useState(apps);
 

  useEffect(()=>{
    const q = query.trim().toLowerCase();
    const result = apps.filter(a => a.title.toLowerCase().includes(q));
    
    
    setFiltered(result);
  },[query, apps]);
 
    return (
         <div className='max-w-[1400px] mx-auto mt-20'>
      <header className="title-row">
        <h1 className='text-[#001931] text-[48px] font-bold text-center'>Our All Applications</h1>
        <p className='text-[#627382] text-[20px] text-center mt-6'>Explore All Apps on the Market developed by us. We code for Millions</p>
      </header>

      <div className="flex justify-between items-center shadow-2xs">
        <div className='text-[24px] font-semibold'>({apps.length}) Apps Found</div>
        <div className="search-controls">
          <input
            placeholder="Search apps..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {filtered.length === 0 ? (
          <div>No App Found</div>
        ) : (
          filtered.map(app => (
            <AppCard key={app.id} app={app} />
          ))
        )}
      </div>
    </div>
    );
};

export default AllApps;