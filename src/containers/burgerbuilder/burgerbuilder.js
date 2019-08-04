import React,{Component} from 'react'
import Aux from '../../hoc/auxilary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import styles from './button.css'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Backdrop from '../../components/UI/Backdrop/Backdrop'

const INGRIEDIENT_PRICES ={
    salad:15,
    meat:45,
    cheese:30,
    bacon:40
}
class burgerbuilder extends Component{
    
    
    state={
        ingredients:{cheese:0,salad:0,meat:0,bacon:0}, totalPrice:0,purchasable:false, OrderSummary:true,
    }

    addIngredient = (type)=>{
        const oldIngriedientCount = this.state.ingredients[type]
        const newIngriedientCount = oldIngriedientCount + 1
        const updateIngriedient = {
            ...this.state.ingredients
        }
        updateIngriedient[type] = newIngriedientCount
        const newPrice = INGRIEDIENT_PRICES[type]
      const   oldPrice = this.state.totalPrice
        const updatedPrice = oldPrice+newPrice

        this.setState({
            ingredients:updateIngriedient, totalPrice:updatedPrice
        })
        this.buyItems(updatedPrice)
    }

    removeIngredient = (type)=>{
        const oldIngriedientCount = this.state.ingredients[type]
        const newIngriedientCount = oldIngriedientCount - 1
        var updateIngriedient = {
            ...this.state.ingredients
        }
        
        updateIngriedient[type] = newIngriedientCount
        const newPrice = INGRIEDIENT_PRICES[type]
        const   oldPrice = this.state.totalPrice
        if(this.state.ingredients[type]>0){
             var updatedPrice = oldPrice-newPrice
        }else{
             updatedPrice = oldPrice
        }
        if(updatedPrice<0){
            updatedPrice=0
        }
        if(updateIngriedient[type]<0){
            updateIngriedient[type]=0
        }
        this.setState({
            ingredients:updateIngriedient, totalPrice:updatedPrice
        })
        this.buyItems(updatedPrice)
    }

    buyItems=(updatedPrice)=> {
        if(updatedPrice>0){
        this.setState({purchasable:true})                
       }else{
           this.setState({purchasable:false})
       }    
    }

    order= ()=> {
        this.setState({OrderSummary:false})
    }

    cancelOrder= ()=> {
        this.setState({OrderSummary:true})
    }
    purchaseConfirm=()=>{
        alert("Purchase confirmed")
    }

    render(){
        return(
            <Aux>
                <Backdrop clicked={this.cancelOrder} show={!this.state.OrderSummary}  />
                <Modal isVisible={this.state.OrderSummary}><OrderSummary cancelOrder={this.cancelOrder} purchaseConfirm={this.purchaseConfirm} ingredients={this.state.ingredients}/></Modal>
                <Burger ingredients={this.state.ingredients}/>
                
                <BuildControls totalPrice={this.state.totalPrice} ingredientsAdded = {this.addIngredient} purchasable={this.state.purchasable} ingredientRemoved={this.removeIngredient}/>
                 
                <button className={styles.OrderButton} disabled={!this.state.purchasable} onClick={this.order} >Buy</button>
            </Aux>
        )
    }
}

export default burgerbuilder;