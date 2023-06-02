import React, { useState, useEffect } from 'react';
import ShowlistCard from './ShowlistCard';

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => {
        setShows(data)
        console.log(data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1 className="text-3xl  text-white font-bold mb-4 text-center py-10">Show List</h1>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-20 w-5/6 mx-auto mt-10'>
        {shows.map(show => (

          <ShowlistCard key={show.id}
           show={show}>

           </ShowlistCard>
        ))}
      </div>
    </div>
  );
};

export default ShowList;
