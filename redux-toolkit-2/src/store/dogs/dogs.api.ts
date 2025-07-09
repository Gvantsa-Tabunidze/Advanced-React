import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IDog, IDogAPIResponse } from "../../interface/dogInterface";
import type { ISingleDogAPIResponse } from "../../interface/SingleDogResposne";


export const dogAPI = createApi({
    reducerPath: 'DogAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dogapi.dog/api/v2/' }),
    tagTypes:['Dogs'],
    endpoints:(builder)=>({
      fetchAllDogs: builder.query<IDogAPIResponse, {page:number}>({
      query: ({page}) => ({
        url:'breeds',
        params: {
          'page[number]': page,
          
        }
      })
    }),

    fetchSingleDog:builder.query<ISingleDogAPIResponse, string>({
        query:(id:string)=> ({
          url: `breeds/${id}`
        })
      })

    })
})

export const {useFetchAllDogsQuery, useFetchSingleDogQuery, usePrefetch} = dogAPI

 