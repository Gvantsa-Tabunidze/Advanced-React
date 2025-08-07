'use client'

import { useParams } from 'next/navigation'
import React from 'react'

const SingleProductPage = () => {
    const {id} = useParams()
  return (
    <div>
      <h1>Single product {id}</h1>
    </div>
  )
}

export default SingleProductPage
