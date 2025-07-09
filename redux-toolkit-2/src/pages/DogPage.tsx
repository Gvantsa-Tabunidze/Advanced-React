import React from 'react'
import { useFetchSingleDogQuery } from '../store/dogs/dogs.api'
import { useParams } from 'react-router-dom'

const DogPage:React.FC = () => {

  const {id} = useParams<{id:string}>()
  const {data, isLoading} = useFetchSingleDogQuery(id ?? '')

  if (isLoading || !data) return <h1>Loading . . .</h1>;
 const {data:{type, id:DogId, attributes:{name, description, }}, }= data


  

  return (
    <div>
      <h1>{name}</h1>
      <small>{DogId}</small>
      <h2>{type}</h2>
      <p>{description}</p>
    </div>
  )
}

export default DogPage
