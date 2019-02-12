import React, { Fragment } from 'react'
import styles from './Layout.module.css'

const layout = (props) => (
    <Fragment>
        <div>Toolbar, sideDrawer, Backdrop</div>
        <main className={styles.Content}>
            {props.children}
        </main>
    </Fragment>
)

export default layout