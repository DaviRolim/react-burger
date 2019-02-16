import React, {Fragment} from 'react'
import Logo from '../../Logo/Logo'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

import NavigationItems from '../NavigationItems/NavigationItems'
import styles from './Toolbar.module.css'

const toolbar = (props) => (
    <Fragment>
        <header className={styles.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked}/>
            <div className={styles.Logo}>
                <Logo />
            </div>
            <nav className={styles.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    </Fragment>
)

export default toolbar
