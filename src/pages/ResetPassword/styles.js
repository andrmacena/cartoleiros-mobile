import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
   containerReset: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
      height: '30%'
   },
   inputReset: {
      backgroundColor: '#fff',
      width: '90%',
      height: 45,
      margin: 15,
      borderRadius: 8,
      padding: 10,
      borderColor: '#000',
      borderWidth: .3
   },
   titleReset: {
      margin: 20,
      fontSize: 25,
      fontWeight: 'bold',
   },
   resetButton: {
      backgroundColor: '#E04021',
      width: '90%',
      height: 45,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 45
   },
   textResetButton:{
      fontSize: 20,
      fontWeight: 'bold'
   }
})

export default styles