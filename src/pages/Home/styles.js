import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center'
   },
   infoTeam: {
      flex: 3,
      backgroundColor: 'red',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 15,
      height: 120,
      width: '95%',
      margin: 10,
      justifyContent: 'space-between',
      flexDirection: 'row'
   },
   infoTeamContainer: {
      width: '55%',
      height: '80%',
      borderWidth: 1,
      marginRight: '5%'
   },
   logoTeamContainer: {
      width: '30%',
      height: '80%',
      borderWidth: 1,
      marginLeft: '5%'
   },
   logoTeam: {
      width: '100%',
      height: '100%'
   }
})

export default styles