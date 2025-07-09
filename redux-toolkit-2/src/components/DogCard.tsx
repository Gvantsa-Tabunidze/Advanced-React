import React from 'react'
import type { IDogCard } from '../interface/DogCardInterafce'
import { useNavigate } from 'react-router-dom'

const DogCard:React.FC<IDogCard> = ({dog:{attributes:{name, description}, id} }) => {
  const navigate= useNavigate()

  return (
    <div className='DogCard' onClick={()=>navigate(`/breeds/${id}`)}>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default DogCard
