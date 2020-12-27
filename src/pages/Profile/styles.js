import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
   },
   profileInfoImageContainer: {
      flex: 1,
      borderWidth: 1,
      borderRadius: 15,
      width: '95%',
      margin: 10,
      flexDirection: 'row'
   },
   profileImageContainer:{
      width: '35%',
      height: '80%',
      margin: 10,
      borderColor: 'red',
      borderWidth: 3
   },
   profileImage: {
      width: '100%',
      height: '100%'
   },
   profileInfoContainer:{
      width: '55%',
      height: '80%',
      margin: 10,
      borderColor: 'green',
      borderWidth: 3
   },
   profileFuncionalidades: {
      flex: 2,
      borderWidth: 1,
      borderRadius: 15,
      width: '95%',
      margin: 10,
      flexDirection: 'column',
      alignItems: 'center',

   },
   buttonUpdateProfile: {
      backgroundColor: '#E04021',
      width: '90%',
      height: 45,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 15
   }
})

export default styles
