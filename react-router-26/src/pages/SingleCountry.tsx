import React from 'react'
import { useLoaderData, type LoaderFunctionArgs } from 'react-router-dom'
import type { ICountries } from '../interfaces/CountryInterface'

const SingleCountry = () => {
 const country = useLoaderData() as ICountries

 if (!country) return <div>No country data found.</div>;
  return (
    <div>
      <h1>Single country here</h1>
      
        <li style ={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <div style={{display:'flex', flexDirection: 'column'}}>
            <div style= {{display:'flex', flexDirection:'row', alignItems:'baseline', gap: '12px'}}>
            <h2>{country.name}</h2>
            <h3>{country.capital}</h3>
            </div>
            <div style={{display:'block', textAlign:'left'}}>
            <p>{country.currency}</p>
            <p>{country.phone_code}</p>
            <p>{country.continent}</p>
            <p>{country.description}</p>
            <p>{country.population}</p>
            </div>
            <img src={country.href.flag} style={{height:'120px'}} alt="flag of country" />
            </div>
        </li>
    

    </div>
  )
}

export default SingleCountry


const API_TOKEN = '2767|nufvjyxA8AeY5BPseSj7KYuevHVkt4Vp75UyKzGI'
export const SingleCountryLoader = async ({params}: LoaderFunctionArgs):Promise<ICountries>=>{
  const {country} = params
  const response = await fetch(`https://restfulcountries.com/api/v1/countries/${country}`, {
  headers:{
      "Accept": "application/json",
      "Authorization": `Bearer ${API_TOKEN}`
  }
});
  if (!response.ok) {
  throw new Response("Country not found", { status: 404 });
  }

  const result = await response.json();
  return result.data || result;
}