import React from 'react';
import Button from '../../UI/Button/Button'
import Aux from '../../../hoc/auxilary';

const orderSummary = (props)=>{
    const IngredientSummary = Object.keys(props.ingredients).map(IgKey=>{
        return <li>{IgKey}:{props.ingredients[IgKey]}</li>
    });

   return( <Aux>
        <h3>Your order summary</h3>
        <ul>
            {IngredientSummary}
        </ul>
        <Button btnType="Success" clicked={props.purchaseConfirm} >Continue</Button>
        <Button btnType="Danger" clicked = {props.cancelOrder}>Cancel</Button>
    </Aux>
   )
}

export default orderSummary;