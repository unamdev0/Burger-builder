import React from 'react'
import styles from './Navigationitem.css'
import {NavLink} from 'react-router-dom';


const navigationitem =(props)=>(
    <li className={styles.NavigationItem}>
        <NavLink to={props.link}>{props.children}</NavLink>
    </li>
)

export default navigationitem;