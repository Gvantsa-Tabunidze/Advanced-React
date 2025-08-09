import { ICat } from '@/app/interfaces/cat.interface'
import { getCats } from '@/services/getCats'
import Image from 'next/image'
import React from 'react'

//Interface
interface CatPageProps{
    params: Promise<{ id: string }> 
}

//static
export async function generateStaticParams(){
    const cats:ICat[] = await getCats()
    
    return cats.map(cat=>({
       id :cat.id.toString()
    }))
}

//Fetching
const fetchSingleCat = async(id:string)=> {
 const res= await fetch(`https://api.thecatapi.com/v1/images/${id}`)
 return res.json()
}


const SingleCatPage = async ({params}:CatPageProps) => {
const { id } = await params
const cat:ICat  = await fetchSingleCat(id)
  return (
  
    <div key={cat.id} className='w-56 h-64 relative m-2'>
                 <Image 
                 src={cat.url} 
                 alt={cat.url}
                 fill={true}
                 className='object-cover'
                 sizes='(max-width:768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                 priority={true}
                 />
    </div>

  )
}

export default SingleCatPage
