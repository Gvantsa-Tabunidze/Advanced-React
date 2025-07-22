import React from 'react'

const InputForm:React.FC = () => {
  return (
    <form action="submit">
      <h1>User Form</h1>
        <div>
            <label htmlFor="name">Name</label>
            <input  type="text" id="name" />
        </div>
       
        <div>
            <label htmlFor="surname">Surname</label>
            <input role="surname" type="text" id="surname" />
        </div>
  
        <div>
            <label htmlFor="checkBox">Surname</label>
            <input type="checkbox" id="checkBox" />
        </div>
        
        <button type='submit'>Submit</button>
    </form>
  )
}

export default InputForm