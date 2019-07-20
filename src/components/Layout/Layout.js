import React from 'react'
import Aux from '../../hoc/auxilary'
import styles from './Layout.css'

const Layout=(props)=>{
    return(
        <Aux>
            <div className={styles.content}>Toolbar,Sidedrawer,Backdrop</div>
            <main>
                {props.children}
            </main>
        </Aux>
    )
}

export default Layout;