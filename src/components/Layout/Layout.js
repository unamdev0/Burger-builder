import React from 'react'
import Aux from '../../hoc/auxilary'
import styles from './Layout.css'
import Toolbar from '../Navigation/toolbar/toolbar'

const Layout=(props)=>{
    return(
        <Aux>
            <Toolbar/>
            <main className={styles.content} >
                {props.children}
            </main>
        </Aux>
    )
}

export default Layout;