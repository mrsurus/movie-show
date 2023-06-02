import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Detailsmodal from './DetailsModal';

const ShowDetails = () => {
    const show = useLoaderData()
    const [detail, setDetail] = useState(null)
    
    let details = `${show.summary}`
    let summary = details.replace(/<[^>]+>/g, '');

    return (
        <div className='md:w-4/5 mx-auto'>
            {show ? (
                <div className="hero min-h-screen mx-auto ">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={show.image.original} className=" md:max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">{show.name}</h1>
                            <p className="py-6"><span className='font-bold text-lg'>Summary: </span>{summary}</p>
                            <label onClick={()=> setDetail(show)} htmlFor="my-modal-3" className="btn btn-primary">Book Ticket</label>
                        </div>
                    </div>
                </div>
                
            ) : (
                <p>Loading...</p>
            )}
            <div>
                {detail && <Detailsmodal show={detail}></Detailsmodal>}
            </div>
        </div>
    );
};

export default ShowDetails;
