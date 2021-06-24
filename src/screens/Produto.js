import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Constants from "expo-constants"
export default props => {
    return (
        <View style={styles.container}>
            <Text>Produto</Text>
            <Button title="Ir para carrinho"
                onPress={() => props.navigation.navigate('Carrinho')}/>
            <Button title="Voltar para home"
                onPress={() => props.navigation.navigate('Home')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight
    }
})