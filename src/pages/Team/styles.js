import React from 'react'
import { StyleSheet, Dimensions, StatusBar } from 'react-native'

const styles = StyleSheet.create({
   container: {
      height: Dimensions.get('window').height - 105,
      backgroundColor: '#ccc'
   },
   campo: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height - 105
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