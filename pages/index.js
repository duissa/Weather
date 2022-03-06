import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SearchBar from '../components/SearchBar'

import { Card } from '../components/Card'
import bodyParser from "body-parser";
import util from "util";

const getBody = util.promisify(bodyParser.urlencoded());

export default  function Home({weatherData}) {

  let results={}

  if (weatherData.message==="city not found" || weatherData.message==="bad query"|| weatherData.message==="Nothing to geocode"){
    results.error="Please enter a valid city"

    return (
      <div className={styles.container}>
        <h1>Weather App</h1>
        
        <div className={styles.searchBar}>
          <SearchBar/>
          
          
        </div>
        <Card message={results}/>
       
  
      </div>
    )
    
  }else{

          results.location= weatherData.name;
          results.location= weatherData.name;
          results.temperature=weatherData.main.temp;
          results.feelsLike=weatherData.main.feels_like;
          results.icon=weatherData.weather[0].icon;




  return (
    <div className={styles.container}>
      <h1>My weather app</h1>
      
      <div className={styles.searchBar}>
      <SearchBar/>
      </div>

      <Card message={results}/>
      
     

    </div>
  )

  }

}

export async function getServerSideProps({ req, res }) {
  await getBody(req, res);
  const city=req.body.name
  
  const api = {
    key: "86223b961e7a39d7324cd5c6164e60ae",
    base: "https://api.openweathermap.org/data/2.5/"
}

  const myData = await fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)

  const weatherData= await myData.json()
  

  

  return{
    props:{
      weatherData,
      
    }
  }
}



