import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_SINGLE_GAME } from '../graphQL/queries/get-singleGame'
import { useParams } from 'react-router-dom'
import type { IGame } from '../interfaces/game.interface'

const SingleGamePage:React.FC = () => {
    const {id} = useParams()
    const {loading, error, data}= useQuery(GET_SINGLE_GAME, {
        variables: {gameId:id}
    })
  
  
    if(loading) return <h1>Loading . . .</h1>
    if(error) return <h3>Error: {error.message}</h3>

    const {title, platform} = data ? data.game : ({} as IGame)

  return (
    <div>
      <h1>{title}</h1>
      {platform.map((p:string)=>(<li key={p}>{p}</li>))}
    </div>
  )
}

export default SingleGamePage
