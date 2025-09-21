import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetMovieByIdQuery } from '../services/movies'
import { GiTheater } from "react-icons/gi";


const Booking = () => {
    const {id} = useParams()
    const {data:movie, isLoading, error} = useGetMovieByIdQuery(id)
    if(!isLoading) {
        console.log(movie)
    }
    // console.log((id))
  return (
    <div className='flex flex-col gap-5'>
        <h1 className='font-semibold text-2xl md:text-3xl hover:underline'>{movie.title} - (Telugu)</h1>
          <div className='flex gap-3'>
              <span className='border-2 rounded-e-3xl rounded-l-3xl w-fit px-3'>{movie.duration} Mins</span>
              <span className='border-2 rounded-e-3xl rounded-l-3xl w-fit px-3'>{movie.censorRating}</span>
              <div>
                {
                  movie?.genre.map((each, i) => (
                    <span className='border-2 rounded-e-3xl rounded-l-3xl w-fit px-3' key={i}>{each}</span>
                  ))
                }
              </div>
          </div>
          <hr/>

        <div>
            {
              movie.theaters.map((each, i) => (
                <div key={i} className='flex justify-around items-center gap-5 border-2  br-gray-500 mb-3 rounded-xl py-5'>
                  <div >
                    <div className='border-2 flex w-fit flex-col items-center p-1 rounded-lg'>
                      <GiTheater className='text-red-500'/>
                      <span className='text-xs text-red-500 font-bold'>Cinema</span>
                    </div>
                  </div>
                    <h1 className=' md:text-2xl font-semibold w-1/2'>{each.name}, {each.location}</h1>
                  <div>
                    {
                      each.shows.map((show, i) => (
                        // className='border-l-4 m-1 border-green-500'
                        <div key={i} className={`${show.availableSeats < 25 ? "border-l-4 m-1 border-orange-500" : 'border-l-4 m-1 border-green-500'}`}>
                          <p
                            className={`'font-extralight border py-1 pr-5 pl-5 '${show.availableSeats < 25 ? "px-1 border-orange-500" : '  border-green-500'}`}
                           >
                            <Link to={`/hall/${movie._id}/${each._id}/${show._id}`}>
                            {show.time}</Link>
                           </p>
                        </div>
                      ))
                    }
                  </div>
                </div>
              ))
            }
        </div>
    </div>
  )
}

export default Booking