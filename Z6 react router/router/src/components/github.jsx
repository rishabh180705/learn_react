import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
//   const [data, setData] = useState({}); // Initializing data as an empty object
const data=useLoaderData();
//   useEffect(() => {
//     fetch('https://api.github.com/users/rishabh180705')
//       .then(response => response.json()) // Fixed parentheses for json()
//       .then(data => {
//         setData(data);
//       })
//       .catch(error => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

  return (
    <div>
      <div className="bg-gray-600 text-white text-3xl text-center p-3">
        Public Repos: {data.public_repos || "Loading..."}
        <br />
        <img src={data.avatar_url} alt='GitHub Avatar' style={{ width: '150px', borderRadius: '50%' }} />
      </div>
    </div>
  );
}

export default Github;

export const  githubInfoLoader=async ()=>{
    const response=await fetch('https://api.github.com/users/rishabh180705')
    
    return response.json();
}