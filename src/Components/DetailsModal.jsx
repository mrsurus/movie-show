import React from 'react';

const Detailsmodal = ({ show }) => {
    const { name, rating, language, status, averageRuntime } = show
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">

                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <p className='text-center text-2xl font-bold my-3'>Movie Details</p>
                    <p> <span className='font-bold text-xl '>Name:</span>  {name}</p>
                    <p> <span className='font-bold text-xl'>Rating:</span>  {rating.average}/10</p>
                    <p> <span className='font-bold text-xl'>Language:</span>  {language}</p>
                    <p> <span className='font-bold text-xl'>Status:</span>  {status}</p>
                    <p> <span className='font-bold text-xl'>Runtime:</span>  {averageRuntime}</p>
                </div>
            </div>
        </div>
    );
};

export default Detailsmodal;