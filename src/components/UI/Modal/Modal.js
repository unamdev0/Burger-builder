import React from 'react'
import styles from './Modal.css'

const Modal =(props)=>(
    <div style={{
         opacity: props.isVisible?'0':'1',transform:props.isVisible?'translateY(-100vh)':'translateY(0)'}} className={styles.Modal}>
        {props.children}
        
    </div>
)

export default Modal;