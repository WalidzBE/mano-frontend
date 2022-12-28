import React from 'react'
// import { StyleSheet, Text, View } from 'react-native'
import { Products, DetailedProduct } from './src/screens'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="DetailedProduct" component={DetailedProduct} />
      </Stack.Navigator>
      </NavigationContainer>
  )
}
