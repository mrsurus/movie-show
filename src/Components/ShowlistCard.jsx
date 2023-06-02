import React from 'react';
import { Link } from 'react-router-dom';

const ShowlistCard = ({ show }) => {
    let details = `${show.show.summary}`
    let plainText = details.replace(/<[^>]+>/g, '');
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl h-full ">
                <figure><img className='w-full' src={show.show.image.original} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{show.show.name}</h2>
                    <p>{plainText.slice(0, 100)}...</p>
                    <p><b>Language: </b> {show.show.language}</p>
                    <p><b>Rating: </b> {show.show.rating.average}/10</p>
                    <div className="card-actions justify-end">
                        <Link to={`/summary/${show.show.id}`}>
                            <button className="mt-2 px-4 py-2 btn btn-primary btn-md text-white rounded">Summary</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowlistCard;