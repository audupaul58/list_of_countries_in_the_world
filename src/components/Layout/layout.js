import React, {useState, useEffect} from 'react'
import styles from './layout.module.scss';
import Head from 'next/head'
import Link from 'next/link';
import {GiWorld} from 'react-icons/gi';
import {AiOutlineFacebook, AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin  } from 'react-icons/ai';

const Layout = ({children}) => {

 
  return (
    <div className={styles.container}>
      <Head>
        
      </Head>
      
      <header className={styles.logo}>
        <Link href={'/'}>
          <div className={styles.headea}>
             <GiWorld className={styles.cls_logo}/>
            <h5 className={styles.title}>WORLD RANK</h5>
         </div>
         </Link>
        </header>
       
        <main >
           <div className={styles.main}>
              {children}
           </div>
        </main>
       

      <footer className={styles.footer} >
          <div className={styles.wrapper} >
            <div className={styles.contact}>
            <AiOutlineFacebook className={styles.social}/>
            <AiFillTwitterCircle className={styles.social}/>
            <AiFillInstagram className={styles.social}/>
            <AiFillLinkedin className={styles.social}/>
            </div>
          </div>
          <p>List of countries and a brief summary of important places and activities</p>
           <p> <small>&copy; Copyright 2022/audupaul58 </small> </p>
      </footer>
    </div>
  )
}

export default Layout