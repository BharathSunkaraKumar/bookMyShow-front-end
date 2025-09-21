import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetTheaterByIdQuery } from '../services/movies'

const Hall = () => {
    const {movieId, theaterId, showId} = useParams()
    // console.log(showId)
    const {data, isLoading, error} = useGetTheaterByIdQuery({movieId, theaterId})
    
    const findTheater = data?.shows?.find((each) => (
        each._id == showId
    ))
    // {!isLoading && console.log(data)}
  return (
    <div className='px-5'>
        <div className='flex flex-col gap-3 my-5'>
            <h1 className='text-3xl font-semibold text-gray-600'>{data?.name}</h1>
            <p className='font-extralight mb-5 text-gray-500 text-xl'>₹{findTheater.price} Platimum</p>
        </div>
        <div className='flex gap-5 my-8'>
            <div>
                <div className='size-5 bg-green-500 rounded-md'>
            </div>
            <span>Avilable</span>
            </div>
            <div>
                <div className='size-5 bg-orange-500 rounded-md'>
            </div>
            <span>Selected</span>
            </div>
        </div>
        {/* {!isLoading && console.log(data)} */}
        <div className='flex flex-wrap gap-5 items-center justify-evenly'>
            {/* {findTheater.availableSeats} */}
            {
                Array.from({length: findTheater?.availableSeats}).map((__, index) => (
                    
                    <div key={index} className={`p-3 border  rounded-lg w-12 font-semibold text-center bg-orange-500 text-white`}>{index+1}</div>
                ))
            }
            {
                Array.from({length: findTheater?.totalSeats-findTheater?.availableSeats}).map((__, index) => (
                    
                    <div key={index} className={`p-3 border bg-green-500 w-12 text-center font-semibold text-white rounded-lg`}>{
                        index+findTheater.availableSeats+1}</div>
                ))
            }
        </div>
    </div>
  )
}

export default Hall