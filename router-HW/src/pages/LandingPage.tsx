import React, { useDeferredValue, useEffect, useId, useMemo, useState, useTransition, type ChangeEvent } from 'react'
import type {Icomments} from '../interfaces/comments'
import { Link } from 'react-router-dom'

const LandingPage: React.FC<{}> = () => {
   const [data, setData] = useState<Icomments[]>([])
   const [value, setValue] = useState('')
   const [isPending, startTransition] = useTransition()
   const deffered = useDeferredValue(value)
   const [isOpen, setIsOpen] = useState(false)
   const [statusOpen, setStatusOpen] = useState(false)
   const emailId1 = useId()
   const emailId2 = useId()


  



    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then((response)=>(response.json()))
        .then((jsonData) =>(setData(jsonData)))
    }, [])

   const filteredData = useMemo(()=>{
    return data.filter(element =>element.name.toLocaleLowerCase().includes(deffered.toLocaleLowerCase()))
   },[deffered, data])

   const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
    startTransition(()=>{
        setValue(e.target.value)
    })
   }

//  Open div with email inputs
const openDiv = () =>{
setIsOpen(true)
}

// subscribe status pop-up
const showStatus =()=>{
setStatusOpen(true)
setIsOpen(false)
}


  return (
    <div>
        <div style = {{display: 'flex'}}> <button><Link to ={'/'}>Go home</Link></button></div>
        <div className="email">
        <button onClick={openDiv}>Subscribe by email</button>
        {isOpen ? 
        <div>
            <form>
            <label htmlFor={emailId1}></label>
            <input  id={emailId1}type="text" placeholder='email'/>
            </form>     
            <form>
            <label htmlFor={emailId2}></label>
            <input  id={emailId2}type="text" placeholder='email'/>
            </form>     
            <button onClick={showStatus}>Subscribe</button>
            <button onClick={()=>setIsOpen(false)}>Cancel</button>
        </div>: null
        }
        {statusOpen ? <div><p>Your email is remembered!</p></div> : null}
        </div>
        
        <div className="filter" style={{display: 'flex', gap: '8px', flexDirection:'column', alignItems:'flex-start'}}>
            <label htmlFor="filterInput" style={{fontWeight:'bold', fontSize:'20px'}}>Filter</label>
            <input type="text" name="filterInput" style={{height: '32px'}} onChange={onChangeHandler}/>
            <div className="email">
        {statusOpen ? <div><p>Your email is remembered!</p></div> : null}
        </div>
        </div>
        {isPending ? (<p>Loading . . . </p>) : filteredData.length === 0 ? ( <p>No data avaialble</p>) : (
           filteredData.map(({id, name, email, body})=>(
            <div key={id} style={{display:'flex', flexDirection:'column', alignItems:'flex-start', borderBottom:'1px solid magenta',padding: '8px'}}>
                <h2>{id}{name}</h2>
                <p>{email}</p>
                <p>{body}</p>
            </div>
        )) 
        )}
       
       
    </div>
  )
}

export default LandingPage
