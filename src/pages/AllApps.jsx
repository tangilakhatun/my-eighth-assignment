import React from 'react';
import { useLoaderData } from 'react-router';


export async function appsLoader(){
  const res = await fetch("/Apps.json");
  const data = await res.json();
 return data;

}

const AllApps = () => {
 const apps = useLoaderData()||[];
 console.log(apps);
 
    return (
        <div>
           he wy not
        </div>
    );
};

export default AllApps;