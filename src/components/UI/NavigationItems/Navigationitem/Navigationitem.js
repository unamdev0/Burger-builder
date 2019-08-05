import React from 'react'
import styles from './Navigationitem.css'
import { classes } from 'istanbul-lib-coverage';


const navigationitem =(props)=>(
    <li className={styles.NavigationItem}>
        <a href={props.link}
        className={props.active?styles.active:null}>{props.children}</a>
    </li>
)

export default navigationitem;