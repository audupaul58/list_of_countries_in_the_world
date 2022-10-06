import React, {useState, useEffect} from 'react'
import styles from './layout.module.scss';
import Head from 'next/head'
import Image from 'next/image';
import m1 from '../../public/images/world.png';
import Link from 'next/link';
import {MdBrightnessMedium} from 'react-icons/md';

const Layout = ({children}) => {

 
  return (
    <div className={styles.container}>
         <Head>
        
      </Head>
      <header className={styles.logo}>
        <Link href='/'>
          <div className={styles.headea}>
            <Image src={m1} width={40} height={40}/>
            <h5 className={styles.title}>WORLD RANK</h5>
           
           
         </div>
         </Link>
        </header>
        <main className={styles.main}>
         {children}
      </main>
    </div>
  )
}

export default Layout