import React from 'react';

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
        <p>Click to continue</p>
    </Aux>
   )
}

export default orderSummary;