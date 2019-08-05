import React from 'react'
import styles from './toolbar.css'
import NavigationItems from '../../UI/NavigationItems/Navigationitems'

const toolbar =(props)=>(
    <header className={styles.toolbar}>
        <NavigationItems/>
        <div>Menu</div>
        <div>Logo</div>
        <nav>
            ...
        </nav>
    </header>
)

export default toolbar