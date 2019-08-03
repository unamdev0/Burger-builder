import React from 'react'
import styles from './Burger.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredient'

const burger =(props)=>{
   
    var transformedIngredients = Object.keys(props.ingredients)
    .map(igkey=>{
        return [...Array(props.ingredients[igkey])]
        .map((_,i)=>{ 
       return (<BurgerIngredients key={igkey+i} type={igkey}/>)
    })}).reduce((arr,el)=>{return arr.concat(el)},[])

    if(transformedIngredients.length===0){
        transformedIngredients=<p><h3>Please start adding ingredients</h3></p>
    }
    return(
        <div className={styles.Burger}>
            <BurgerIngredients type='bread-top'/>
            {transformedIngredients}
           
            <BurgerIngredients type='bread-bottom'/>
        </div>
    )
}

export default burger;