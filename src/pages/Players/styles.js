import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center'
   },
   infoPlayer: {
      flex: 3,
      // backgroundColor: 'red',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 15,
      height: 120,
      width: '95%',
      margin: 10,
      justifyContent: 'space-between',
      flexDirection: 'row'
   },
   infoPlayerContainer: {
      width: '60%',
      height: '80%',
      // borderWidth: 1,
      // borderRadius: 15,
      marginRight: 20,
      padding: 5
   },
   infoPlayerText: {
      fontSize: 15
   },
   imagePlayerContainer: {
      width: '30%',
      height: '80%',
      borderWidth: 1,
      marginLeft: '5%'
   },
   imagePlayer: {
      width: '100%',
      height: '100%'
   }
})

export default styles
