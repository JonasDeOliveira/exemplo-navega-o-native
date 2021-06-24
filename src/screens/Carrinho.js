import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Constants from "expo-constants"
export default props => {
    return (
        <View style={styles.container}>
            <Text>Carrinho</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight
    }
})