import React from 'react'
import type { IGame } from '../interfaces/game.interface'
import GameItem from './GameItem'

interface GamesListProps{
    games:IGame[] | undefined
}
const GamesList:React.FC<GamesListProps> = ({games}) => {
  return (
    <div style={{display:'flex', justifyContent:'space-evenly', flexWrap:'wrap', width:'800px', gap:'56px', WebkitJustifyContent:'flex-start'} }>
      {games?.map(({id,title,platform})=>(
        <GameItem key={id} title={title} platform={platform} id={id}/>
      ))}
    </div>
  )
}

export default GamesList
