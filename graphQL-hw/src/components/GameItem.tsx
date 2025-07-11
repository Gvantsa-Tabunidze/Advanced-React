import React from 'react'
import { useNavigate } from 'react-router-dom'

interface GameItemProps {
    id:string,
    title:string,
    platform:string[]
}
const GameItem:React.FC<GameItemProps> = ({id,title,platform}) => {
    const navigate = useNavigate()
  

  return (
    <div style={{width:'200px', border:'1px solid magenta', padding:'12px', borderRadius:'8px', cursor:'pointer', fontFamily:'Roboto'}}
     onClick={()=>navigate(`/games/${id}`)}>
      <h1>{title}</h1>
      {platform.map(p=>(<li key={p}>{p}</li>))}
    </div>
  )
}

export default GameItem
