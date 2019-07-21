import React,{Component} from 'react'
import Aux from '../../hoc/auxilary'
import Burger from '../../components/Burger/Burger'
class burgerbuilder extends Component{

    state={
        ingredients:{cheese:1,salad:1,meat:1}
    }
    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div> build controls</div>
            </Aux>
        )
    }
}

export default burgerbuilder;