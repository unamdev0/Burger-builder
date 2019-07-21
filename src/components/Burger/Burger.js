import React from 'react'
import styles from './Burger.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredient'

const burger =(props)=>{
    
    const transformedIngredients = Object.keys(props.ingredients)
    .map(igkey=>{
        return [...Array(props.ingredients[igkey])]
        .map((_,i)=>{ 
       return (<BurgerIngredients key={igkey+i} type={igkey}/>)
    })})
   
    return(
        <div className={styles.Burger}>
            <BurgerIngredients type='bread-top'/>
           {transformedIngredients}
            <BurgerIngredients type='bread-bottom'/>
        </div>
    )
}

export default burger;