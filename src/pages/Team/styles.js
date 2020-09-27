import React from 'react'
import { StyleSheet, Dimensions, StatusBar } from 'react-native'

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
   campo: {
      width: Dimensions.get('screen').width - .5,
      height: Dimensions.get('screen').height - 160,
      marginTop: 65
   },
   jogadores: {
      height: 50,
      width: 50,
      borderWidth: 3,
      borderRadius: 100,
      margin: 20,
   },
   imageButtonJogadores: {
      height: '100%',
      width: '100%',
      borderRadius: 100
   },
   ataque: {
      flex: 2,
      flexDirection: 'row',
      marginLeft: 70
   },
   meio: {
      flex: 2,
      flexDirection: 'row',
      marginLeft: 70
   },
   defesa: {
      flex: 2,
      flexDirection: 'row',
      marginLeft: 30
   },
   goleiro: {
      marginLeft: 160
   }
})

export default styles