import React from 'react'
import { Platform, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { DrawerItems } from 'react-navigation-drawer'

export default props => {
  return(
      <ScrollView>
          <View style={styles.header}>
              <Text style={styles.title}>Bem vindo</Text>
          </View>
          <DrawerItems {...props} />
      </ScrollView>
  )
    
}

const styles = StyleSheet.create({
  header: {
      borderColor: '#DDD'
  },
  title: {
      color: '#000',
      fontSize: 30,
      paddingTop: 70,
      padding: 10
  }
})