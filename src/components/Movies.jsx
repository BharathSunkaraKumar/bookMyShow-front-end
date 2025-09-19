import React, { useEffect } from 'react'
import { useGetMoviesQuery } from '../services/movies.js'
import { Link } from 'react-router-dom'

const Movies = () => {
    const {data, error, isLoading} = useGetMoviesQuery()
    // useEffect(() => {
    //     console.log(data)
    //     console.log(isLoading)
    // }, [data])
    
  if(isLoading) return <p>Loading..</p>
  return (
    <section className='mb-10'>
        <h1 className='mb-10 text-3xl font-semibold'>Recommended Movies</h1>
      <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
        {
          !isLoading && data.map((movie) => (
            <Link to={`/${movie._id}`} key={movie._id}>
                    <div 
                  className='flex flex-col gap-1 mb-3 mt-3'
                  
                  >
                    <img className='w-[150px]  md:w-[224px]   sm:object-contain object-fill  rounded-lg' src={movie.posterUrl} alt={movie.title}/>
                    <h1 className='font-semibold text-2xl ml-2'>{movie.title}</h1>
                    {/* <p>{movie.genre.map((each, i) => (
                      <P key={i}>{each}</P>
                    ))}</p> */}
                    <div className='text-l text-gray-500 ml-2 flex gap-0.5'>{movie.genre.map((each,i) => {
                      return (
                        <p key={i}>{each}/</p>
                      )
                    })}</div>
                    <p className='text-l text-gray-500 ml-2'>{movie.censorRating}</p>
                    {/* <div className='text-l text-gray-500 ml-2 flex gap-0.5 line-c'>{movie.language.map((each,i) => {
                      return (
                        <p key={i}>{each},</p>
                      )
                    })}</div> */}
                  </div>
            </Link>
                ))
              }
      </div>
           
    </section>
  )
}

export default Movies