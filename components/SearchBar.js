import React from 'react'
import Button from './Button'
import styles from '../styles/Search.module.css'

const SearchBar = () => {
  return (
    <form method="post" className={styles.form}>
      <input name="name" placeholder='Enter the name of a city' className={styles.searchbar}/>
      <Button/>
      
    </form>
  )
}

export default SearchBar