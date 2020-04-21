import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
   containerRegister: {
      width: '90%',
      height: '40%',
      alignItems: 'center',
      justifyContent: 'center'
   },
   titleRegister: {
      fontSize: 24,
      fontWeight: 'bold',
      padding: 20
   },
   inputRegister: {
      backgroundColor: '#fff',
      width: '90%',
      height: 45,
      margin: 15,
      borderRadius: 8,
      padding: 10,
      borderColor: '#000',
      borderWidth: .3
   },
   registerButton: {
      backgroundColor: '#E04021',
      width: '90%',
      height: 45,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 45
   },
   textRegisterButton:{
      fontSize: 20,
      fontWeight: 'bold'
   }
})

export default styles