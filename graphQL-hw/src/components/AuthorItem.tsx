import React from 'react'
import type { IAuthor } from '../interfaces/authors.interface'
import { Link } from 'react-router-dom'



const AuthorItem:React.FC<IAuthor> = ({name, id, verified}) => {
  return (
    <div style={{width:'200px', border:'1px solid magenta', padding:'12px', borderRadius:'8px', cursor:'pointer', fontFamily:'Roboto'}}>
      <h1>{name}</h1>
      <h2>{id}</h2>
      <p>{verified ? 'Verified' : 'Not Verified'}</p>
      <Link to={`/authors/${id}`} style={{textDecoration:'none'}}>Details</Link>
      
    </div>
  )
}

export default AuthorItem
