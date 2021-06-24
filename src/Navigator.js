import React from 'react'
import { 
    createAppContainer, 
    createSwitchNavigator 
} from 'react-navigation'
import { Transition } from 'react-native-reanimated'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';

import Home from './screens/Home'
import Produto from './screens/Produto'
import Carrinho from './screens/Carrinho'

const Routes = {
    Home: {
        name: 'Home',
        screen: Home
    },
    Produto: {
        name: 'Produto',
        screen: Produto
    },
    Carrinho: {
        name: 'Carrinho',
        screen: Carrinho
    }
}

const transiton = {
    transition: (
        <Transition.Together>
          <Transition.Out
            type="slide-left"
            durationMs={200}
            interpolation="easeIn"
          />
          <Transition.In type="fade" durationMs={500} />
        </Transition.Together>
      )
}

// const MainNavigator = createSwitchNavigator(Routes, {initialRouteName:'Home'})

const MainNavigator = createAnimatedSwitchNavigator(Routes, transiton)

export default createAppContainer(MainNavigator)