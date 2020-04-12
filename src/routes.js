import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Home from './pages/Home/Home'

const AppStack = createStackNavigator()

export default function Routes() {
   return (
      <NavigationContainer>
         <AppStack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="Login" component={Login} />
            <AppStack.Screen name="Home" component={Home} />
            <AppStack.Screen name="Register" component={Register} />
         </AppStack.Navigator>
      </NavigationContainer>
   )
}
