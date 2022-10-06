import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import styles from './main.module.scss'
import { FaSort } from "react-icons/fa";
import FilterItem from '../FilterItem';
import SearchItem from '../SearchItem/searchItem';
import Link from 'next/link'
import Image from 'next/image';

const Main = ({data}) => {

    const [searchFilter, setSearchFilter] = useState('')
    const [value, setValue] = useState()
    const [direction, setDirection] = useState()
     // This function helps in sorting the data in the  table base on the rows and value params

    const handleSort = ()=>{
      if(!direction)setDirection('dsc')
      else if(direction === 'dsc')setDirection('asc')
      else(setDirection(null))
    }

    const filterValue = (value)=>{
      handleSort()
      setValue(value)
    }


   
    
    const sortList = FilterItem(data, value, direction)

    // This function helps in searching the table using the underisted category
    const searchFilterbyItem = sortList.filter((text)=>{
      return ( text.name.toLowerCase().includes(searchFilter) || 
      text.region.toLowerCase().includes(searchFilter) ||
      text.subregion.toLowerCase().includes(searchFilter)
  )})
    
  return (
    <section className={styles.container}>
    <div className={styles.rowCol}>
    <div className={styles.top}> Found {searchFilterbyItem.length} Countries </div>
    <SearchItem  text={searchFilter} results={setSearchFilter}/>
    
    <Table hover  className={styles.table}>
      <thead>
        <tr>
          <th></th>
          <th> Countries <FaSort onClick={()=>filterValue('name')} /> </th>
          <th >Populations<FaSort onClick={()=>filterValue('population')} /></th>
          <th >Area(Km3)<FaSort onClick={()=>filterValue('area')} /></th>
          <th >Gini<FaSort onClick={()=>filterValue('gini')} /></th>
          
        </tr>
      </thead>
      
      <tbody>
        {searchFilterbyItem.map((item, index)=>{
            return <Link href={`${item.alpha3Code}`} key={index}>
            <tr  className={styles.table_row}>
              <td><Image src={item.flag} width={40} height={30}/></td>
            <td className={styles.ta_data}>{item.name.length > 40 ? `${item.name.substring(0, 40)}...`: item.name}</td>
            <td>{item.population}</td>
            <td>{item.area || 0}</td>
            <td>{item.gini || 0}</td>
            
          </tr>
          </Link>
        })}
        
       
      </tbody>
     
    </Table>
    </div>
    </section>
   
  )
}

export default Main