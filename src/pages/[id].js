import React, {useState} from 'react'

import Image from 'next/image'
import { Container, NavItem } from 'react-bootstrap'
import styles from '../styles/Home.module.scss';


const getCountry = async (id) =>{
    const res = await fetch(`https://restcountries.com/v2/alpha/${id}`)

    return res.json()
}

const Details  = ({data}) => {

   const [borders, setBorders] = useState([])

   const getBorder = async () => {
    const borders =  data.border.map((border)=> getBorder(border))
    return borders
   }

  

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
            {data.languages.map(({name}) => name).join(', ')}
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

export const getServerSideProps = async (context) =>{

    const {id} = context.query

    const data = await  getCountry(id)
   

    return {
        props:{
            data
        }
    }
}