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
      width: '50%',
      height: '80%',
      margin: 10,
      borderColor: 'green',
      borderWidth: 3
   },
   profileInfoContainer1: {
      flex: 2,
      borderWidth: 1,
      borderRadius: 15,
      width: '95%',
      margin: 10,
      flexDirection: 'row'
   }
})

export default styles
