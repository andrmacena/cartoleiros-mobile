import React from 'react'
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Home from './pages/Home/Home'
import Team from './pages/Team/Team'
import Reset from './pages/ResetPassword/SendEmailResetPassword'
import ResetPassword from './pages/ResetPassword/ResetPassword'
import Profile from './pages/Profile/Profile'
import Player from './pages/Players/Player'

const AppStack = createStackNavigator()
const Bottom = createBottomTabNavigator()

function getHeaderTitle(route) {
   // If the focused route is not found, we need to assume it's the initial screen
   // This can happen during if there hasn't been any navigation inside the screen
   // In our case, it's "Feed" as that's the first screen inside the navigator
   const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

   switch (routeName) {
      case 'Home':
         return 'Home';
      case 'Profile':
         return 'My profile';
      case 'Team':
         return 'Team';
      case 'Player':
         return 'Player';
   }
}

export function BottomTabs({ route }) {
   const { data } = route.params
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
         <Bottom.Screen name='Home' component={Home} initialParams={{ data }} />
         <Bottom.Screen name='Team' component={Team} initialParams={{ data }} />
         <Bottom.Screen name='Player' component={Player} initialParams={{ data }} />
         <Bottom.Screen name='Profile' component={Profile} initialParams={{ data }} />

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
            <AppStack.Screen name='ResetPassword' component={ResetPassword} />
            <AppStack.Screen name='Bottom' component={BottomTabs} options={({ route }) => (
               { headerShown: true, title: getHeaderTitle(route), headerStyle: { backgroundColor: '#ccc' }, headerTitleAlign: 'center', headerLeft: null })
            } />
         </AppStack.Navigator>
      </NavigationContainer>
   )
}
