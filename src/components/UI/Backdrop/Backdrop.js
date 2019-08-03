import classes from './Backdrop.css'
import React from 'react'

const backdrop=(props)=>{
        return(
        props.show?<div className={classes.Backdrop}></div>:null)
}

export default backdrop;