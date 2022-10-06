import React from 'react'
import useSWR from 'swr'
import {useRouter} from 'next/router'
import Image from 'next/image'
import { Container, NavItem } from 'react-bootstrap'
import styles from '../styles/Home.module.scss';

const Details  = () => {

    const router = useRouter()

    const {id} = router.query

    const baseURL = `https://restcountries.com/v2/alpha/${id}`

    const {data, errors} = useSWR(id ? baseURL: null)

    if(!data) return <p>Data is Loading please wait</p>
    if(errors) return <p>No Data please try again</p>

    console.log(data)

  return (
    <Container className={styles.details}>
        <div className={styles.img_sec}>
            <Image src={data.flag} width={800} height={450} alt={data.name}/>
            <h1>{data.name}</h1>
            <h6 className={styles.light_fonts}>{data.region}</h6>
        </div>
        <div className={styles.detail_text}>
            
            <div className={styles.detail_Item} >
                <h6 className={styles.light_fonts}>Population</h6>
                <h6>{data.population}</h6>
            </div>
            <div className={styles.detail_Item} >
                <h6 className={styles.light_fonts}>Area</h6>
                <h6>{data.area}</h6>
            </div>
        </div>
        <hr/>
       <div className={styles.more_info}> <h6>Details</h6>
        <div className={styles.detail_Item}>  
            <h6 className={styles.light_fonts}>Capital</h6> 
            <h6>{data.capital}</h6>
            </div>
            <div className={styles.detail_Item}>  
            <h6 className={styles.light_fonts}>Language</h6> 
            {data.languages.map((language, index) =>(
                <h6 key={index}>{language.name}</h6>
            )) }
            </div>

            <div className={styles.detail_Item}>  
            <h6 className={styles.light_fonts}>Currency</h6> 
            {data.currencies.map((currency, index) =>(
                <h6 key={index}>{(currency.name)}</h6>
            )) }
            </div>

            <div className={styles.detail_Item}>  
            <h6 className={styles.light_fonts}>Native Name</h6> 
                <h6>{data.nativeName}</h6>
            </div>

            <div className={styles.detail_Item}>  
            <h6 className={styles.light_fonts}>Gini</h6> 
               <h6>{data.gini || 0}%</h6> 
            </div>

            <div className={styles.detail_Item}>  
            <h6 className={styles.light_fonts}>Sub Region</h6> 
                <h6>{data.subregion}</h6>
            </div>

            <div>
                
            </div>
       </div>

    </Container>
  )
}

export default Details 