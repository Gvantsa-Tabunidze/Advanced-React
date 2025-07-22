import { useCallback, useEffect, useState } from "react"

interface useFetcProps {
    url:string
    method:string
}


const  API_KEY = 'YXBpS2V5U2VjcmV0'


const useFetch = ({url, method}:useFetcProps)=>{

  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)


  const FetchData =useCallback(()=>{
    setLoading(true)
    fetch(url, {
      method,
      headers: {
        'Content-Type':'application/json',
        'x-bypass-token': API_KEY
        }
    })
    .then((res)=>{
        if(!res.ok) throw new Error('Response failed')
        return res.json()
      })
      .then((data)=>setResponse(data))
      .catch(err => setError(err))
      .finally(()=>setLoading(false))


        return ()=> {
                setResponse(null),
                setError(null)
                setLoading(false)
            }

  },[url, method])

  //trigger function in the hook
    useEffect(()=>{
    FetchData()
    },[FetchData])

    return {error, loading, response, FetchData}

}

export default useFetch