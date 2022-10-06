import React, {useState} from 'react'
import { BiSearchAlt2 } from "react-icons/bi";
import styles from './searchItems.module.scss';

const searchItem = ({text, results }) => {

    const handleSearch = (e) => {
        results(e.target.value.toLowerCase());
    }
  return (
    <form className={styles.searchForms}>
        <BiSearchAlt2/>
        <input type="search" value={text} onChange={handleSearch} className={styles.searchInput} placeholder='Filter by Name, Region Subregion'  />
    </form>
  )
}

export default searchItem