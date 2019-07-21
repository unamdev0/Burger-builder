import React from 'react'
import Aux from '../../hoc/auxilary'
import styles from './Layout.css'

const Layout=(props)=>{
    return(
        <Aux>
            <div >Toolbar,Sidedrawer,Backdrop</div>
            <main className={styles.content} >
                {props.children}
            </main>
        </Aux>
    )
}

export default Layout;