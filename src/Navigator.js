import React from 'react'
import { 
    createAppContainer
} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from './screens/Home'
import Produto from './screens/Produto'
import Carrinho from './screens/Carrinho'
import Menu from './components/Menu'

const menuConfig = {
    initialRouteName: 'Home',
    contentComponent: Menu,
    contentOptions: {
        labelStyles: { 
            fontWeight: 'normal',
            fontSize: 20
        },
        activeLabelStyle: {
            color: 'red',
            fontWeight: 'bold'
        }
    }
}

const menuRoutes = {
    Home,
    Produto,
    Carrinho
}

const menuNavigator = createBottomTabNavigator(menuRoutes, menuConfig)

export default createAppContainer(menuNavigator)