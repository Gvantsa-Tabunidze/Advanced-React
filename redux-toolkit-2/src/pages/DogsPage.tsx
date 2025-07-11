import React, { useState, useEffect } from 'react'
import { useFetchAllDogsQuery, usePrefetch } from '../store/dogs/dogs.api'
import DogCard from '../components/DogCard'

const DogsPage:React.FC = () => {
 const [page, setPage] = useState(1)
 const [totalPages, setTotalPages] = useState(1);
 const {data, isLoading} = useFetchAllDogsQuery({page})
 const preFetch = usePrefetch('fetchSingleDog')

 useEffect(()=>{
    if (data?.meta?.pagination?.last) {
      setTotalPages(data.meta.pagination.last);
    }
 },[data])

 if (isLoading || !data) return <h1>Loading . . .</h1>;

 const newData = data.data


  

  return (
    <div>
      <h1>Dogs</h1>

      <div className='paginationBox'>
        {Array.from({length:totalPages}, (_,index)=>(
          <button key={index+1} onClick={()=>setPage(index+1)}>{index+1}</button>
        ))}
      </div>


      <div className='dogContainer'>
        {newData?.map((dog)=>(
          <div  key={dog.id} onMouseEnter={() => {preFetch(dog.id, { ifOlderThan: 60}), console.log(preFetch(dog.id))}}>
            <DogCard  dog={dog} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default DogsPage
