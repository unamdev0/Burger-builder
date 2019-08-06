import React from 'react'
import styles from './toolbar.css'
 import NavigationItems from '../NavigationItems/Navigationitems'

const toolbar =(props)=>(
    <header className={styles.toolbar}>
        
        <div>Menu</div>
        <div>Logo</div>
        <nav>
        <NavigationItems/>
        </nav>
    </header>
)

export default toolbar