import React from 'react'
import styles from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const BuildControls = (props)=>{
    const controls = [{ label:'Salad' ,type:'salad'},
    { label:'Meat' ,type:'meat'},
    { label:'Bacon' ,type:'bacon'},
    { label:'Cheese' ,type:'cheese'}]
    return(
        <div className={styles.BuildControls}>
              <div><h2>Total price: {props.totalPrice}</h2></div> 
            {controls.map(control=>{
            return ( <BuildControl ingredientRemoved={()=>{props.ingredientRemoved(control.type)}} ingredientsAdded={ ()=>{props.ingredientsAdded(control.type)}}  key={control.label} label={control.label} type={control.type}/>    
            )}
            )}

        </div>
    )
}

export default BuildControls