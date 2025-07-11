import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_AUTHORS } from '../graphQL/queries/get-authors'
import type { IAuthor } from '../interfaces/authors.interface'
import AuthorItem from '../components/AuthorItem'


const AuthorsPage:React.FC = () => {
  const {loading,error,data} = useQuery<{authors:IAuthor[]}>(GET_AUTHORS)
    
  
  if(loading) return <h1>Loading . . .</h1>
  if(error) return <h3>Error: {error.message}</h3>


  return (
    <div style={{display:'flex', justifyContent:'space-evenly', flexWrap:'wrap', width:'800px', gap:'56px', WebkitJustifyContent:'flex-start'}}>
    {data?.authors.map(({id, name, verified})=>(
        <AuthorItem key ={id} id={id} name={name} verified={verified} />
    ))}
    </div>
   
  )
}

export default AuthorsPage
