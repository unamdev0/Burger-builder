import React,{Component} from 'react'
import styles from './Modal.css'


class Modal extends Component{
    shouldComponentUpdate(nextProps){
        return (nextProps.isVisible!==this.props.isVisible || nextProps.children !==this.props.children) 
    }
    
    render(   ){
        console.log("Modal refreshed")
        return (   <div style={{
            opacity: this.props.isVisible?'0':'1',transform:this.props.isVisible?'translateY(-100vh)':'translateY(0)'}} className={styles.Modal}>
           {this.props.children}
           
       </div>)
    }
}

export default Modal;