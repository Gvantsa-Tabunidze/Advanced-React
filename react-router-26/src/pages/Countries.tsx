import { NavLink, useLoaderData } from 'react-router-dom'
import type { ICountries } from '../interfaces/CountryInterface'

const Countries = () => {
    const countries = useLoaderData() as ICountries[]

  return (
    <div>
      <h1>List of countries here</h1>
      {countries?.map(({name, capital, currency, phone_code, continent, description, population, href:{flag}})=>(
        <NavLink to={`/countries/${name}`}>
        <li key={name} style ={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <div style={{display:'flex', flexDirection: 'column'}}>
            <div style= {{display:'flex', flexDirection:'row', alignItems:'baseline', gap: '12px'}}>
            <h2>{name}</h2>
            <h3>{capital}</h3>
            </div>
            <div style={{display:'block', textAlign:'left'}}>
            <p>{currency}</p>
            <p>{phone_code}</p>
            <p>{continent}</p>
            <p>{description}</p>
            <p>{population}</p>
            </div>
            </div>
            <img src={flag} style={{height:'120px'}} alt="flag of country" />
        </li>
        </NavLink>
      ))}
    
    </div>
  )
}

export default Countries

const API_TOKEN = '2767|nufvjyxA8AeY5BPseSj7KYuevHVkt4Vp75UyKzGI'
                                
export const loader =  async()=>{
const response = await fetch('https://restfulcountries.com/api/v1/countries?per_page=10', {
    headers:{
        "Accept": "application/json",
        "Authorization": `Bearer ${API_TOKEN}`
    }
})
if(response.status === 304){
    return null
}
const result = await response.json()
return result.data
}
