import React from 'react'
import styles from './BuildControl.css'

const BuildControl = (props)=>(
    <div className={styles.BuildControl}>
        <div className={styles.Label}>{props.label}</div>
        <button onClick={props.ingredientsAdded} className={styles.More}>
            More
        </button>
        <button onClick={props.ingredientRemoved} className={styles.Less}>
            Less
        </button>
    </div>
)

export default BuildControl