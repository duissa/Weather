import React from 'react'
import styles from '../styles/Card.module.css'

export const Card = (props) => {
  if(props.message.error){

    return (
      <div>
        <p>{props.message.error}</p>
        
      </div>
    )


  }else{

    
    return (
      <div className={styles.container}>
        <div><h1>{props.message.location}</h1></div>
        <div ><img className={styles.image} src={`http://openweathermap.org/img/w/${props.message.icon}.png`} alt="" /></div>
        <div><h2>{props.message.temperature}°C</h2></div>
        <div><h3>Feels Like: {props.message.feelsLike}°C </h3></div>
    
        
      </div>
    )
  }
  
}