import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_SINGLE_AUTHOR } from '../graphQL/queries/get-single-author'
import { useParams } from 'react-router-dom'
import type { IAuthor } from '../interfaces/authors.interface'


const SingleAuthorPage:React.FC = () => {
 const {id} = useParams()
 const {loading,error,data} = useQuery(GET_SINGLE_AUTHOR, {
    variables: {authorId:id}
 })

  if(loading) return <h1>Loading . . .</h1>
  if(error) return <h3>Error: {error.message}</h3>

  console.log(data)
  const {name, verified} = data ? data.author : ({} as IAuthor)


  return (
    <div>
      <h1>{name}</h1>
      <h2>{verified ? 'Verified' : 'Not verified'}</h2>
    </div>
  )
}

export default SingleAuthorPage
