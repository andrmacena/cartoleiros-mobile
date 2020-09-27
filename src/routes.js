import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Home from './pages/Home/Home'
import Team from './pages/Team/Team'
import Reset from './pages/ResetPassword/ResetPassword'
import Profile from './pages/Profile/Profile'

const AppStack = createStackNavigator()
const Bottom = createBottomTabNavigator()

export function BottomTabs() {
   return (
      <Bottom.Navigator
         initialRouteName={Home}
         tabBarOptions={
            {
               activeTintColor: '#e91e63',
               tabStyle: {
                  alignContent: 'center',
                  justifyContent: 'center'
               }
            }}
      >
         <Bottom.Screen name='Home' component={Home} />
         <Bottom.Screen name='Team' component={Team} />
         <Bottom.Screen name='Profile' component={Profile} />
      </Bottom.Navigator>
   )
}

export default function Routes() {
   return (
      <NavigationContainer>
         <AppStack.Navigator initialRouteName={Login} screenOptions={{ headerShown: false }}>
            <AppStack.Screen name='Login' component={Login} />
            <AppStack.Screen name='Register' component={Register} />
            <AppStack.Screen name='Reset' component={Reset} />
            <AppStack.Screen name='Bottom' component={BottomTabs} />
         </AppStack.Navigator>
      </NavigationContainer>
   )
}
