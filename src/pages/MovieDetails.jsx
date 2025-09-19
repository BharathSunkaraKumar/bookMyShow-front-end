import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetMovieByIdQuery } from '../services/movies'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const MovieDetails = () => {
    const {id} = useParams()
    // const [movie, setMovie] = useState()
    // console.log(params.id)
    const {data, isLoading, error} = useGetMovieByIdQuery(id)
    // if(!isLoading) {
    //     console.log(data)
    // }
    
    return (
    <div>
        
        <div className=''>
            <div className='bg-gradient-to-r from-slate-900 to-slate-600  rounded-xl p-5 flex '>
                <img className='w-[220px] opacity-100 object-contain rounded-xl' src={data?.posterUrl} alt={data?.title}/>
                <div className='ml-10 w-1/2 flex flex-col justify-center gap-1'>
                    <h1 className='font-bold text-4xl mb-3 text-white'>{data?.title}</h1>
                    <div className='bg-gray-300 rounded-lg font-semibold p-2'>
                        {data?.formats.map((each, i) => <p key={i}>{each}</p>)}
                    </div>
                    <div className='bg-gray-300 rounded-lg font-semibold p-2 flex flex-wrap mt-3 gap-1'>
                        {data?.language.map((each, i) => <p key={i}>{each},</p>)}
                    </div>
                    <div className='flex flex-wrap mt-3 text-neutral-50 text-l gap-2'>
                        <span>{data?.duration} Mins</span>
                        <span className='flex gap-1'>
                            {data?.genre.map((each, i) => <p key={i}>{each},</p>)}
                        </span>
                        <span>{data?.censorRating}</span>
                        <span>{data?.releaseDate}</span>
                    </div>
                    <div>
                        <button className='bg-red-500 text-white px-6 py-2 rounded-lg mt-3 hover:bg-red-600 transition-colors'>Book Tickets</button>
                    </div>
                </div>
                
            </div>

            <section className='my-8 p-3'>
                <h3 className='text-3xl font-semibold mb-3'>About the movie</h3>
                <p className='text-gray-500 w-1/2 mb-5'>{data?.description}</p>
                <hr/>
            </section>

            <section className='my-5 p-3'>
                <h3 className='text-3xl font-semibold'>Cast</h3>
                <div className='my-8 flex gap-5 flex-wrap'>
                    {
                       !isLoading  && data.cast.map((each, i) => (
                            <div key={i} className='flex flex-col justify-center'>
                                <AccountCircleIcon style={{width:100, height: 100, color: "gray"}}/>
                                <p className='text-center text-black font-semibold'>{each.name}</p>
                                <p className='text-center text-gray-600'>Actor</p>
                            </div>
                        ))
                    }
                </div>
                <hr/>
            </section>

            <section className='my-5 p-3'>
                <h3 className='text-3xl font-semibold'>Crew</h3>
                <div className='my-8 flex flex-col w-fit'>
                    <AccountCircleIcon style={{width:100, height: 100, color: "gray"}}/>
                    <div className=' text-center'>
                        <p className=' font-semibold'>{data?.director}</p>
                        <p className=' text-gray-600'>Director</p>
                    </div>
                </div>
                <hr/>
            </section>
        </div>
    </div>
  )
} 

export default MovieDetails


