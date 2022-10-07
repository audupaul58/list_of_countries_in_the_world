import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container, NavItem } from 'react-bootstrap'
import styles from '../styles/Home.module.scss';


const getCountry = async (id) =>{
    const res = await fetch(`https://restcountries.com/v2/alpha/${id}`)

    return res.json()
}

const Details  = ({data}) => {

   const [borders, setBorders] = useState([])

   console.log(data)
   const getBorder = async () => {
    const borders = await Promise.all(data.borders ? data.borders.map((border)=> getCountry(border)): data.borders)
    console.log(borders)
    setBorders(borders)
   }

  
   useEffect(()=> {
     {data.borders ? getBorder() : []}
   }, [])

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
            {data.languages.length > 1 ? data.languages.map(({name}) => name).join(', ') : data.languages[0].name}
            </div>

            <div className={styles.detail_Item}>  
            <h6 className={styles.light_fonts}>Currency</h6> 
            {data.currencies.length > 1 ? data.currencies.map(({name})=> name) : data.currencies[0].name}
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
                <hr/>
            <h7 className={styles.light_fonts}>Border Nations</h7> 
            <div className={styles.border_con}>
                 {borders ? borders.map((country, index)=>(
                    <Link href={`${country.alpha3Code}`} key={index}>
                    <div className={styles.bod_country}>
                        <Image src={country.flag} width={150} height={100} />
                        <h6 className={styles.text}>{country.name}</h6>
                    </div>
                    </Link>
                 )): borders.length == 1 ? borders[0].name : "No border" }
            </div>
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