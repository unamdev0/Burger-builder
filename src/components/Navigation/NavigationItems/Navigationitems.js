import React from 'react'
import Navigationitem from './Navigationitem/Navigationitem'
import styles from './Navigationitems.css'


const navigationitems = (props)=>(
    <ul className={styles.NavigationItems}>
        <Navigationitem link="#">Checkout</Navigationitem>
        <Navigationitem link="#">Burger builder</Navigationitem>
    </ul>
)

export default navigationitems;