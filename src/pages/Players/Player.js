import React, { useEffect, useState } from 'react';
import { Text, View, Image, FlatList } from 'react-native';

import styles from './styles'
import api from '../../services/api'

import image from '../../assets/plus-icon.png'

export default function Player({ route, navigation }) {
   const { data } = route.params
   const [players, setPlayers] = useState([])


   useEffect(() => {
      getAllPlayers()
   })

   async function getAllPlayers() {
      const res = await api.get('/players',
         { 'headers': { 'x-access-token': data.token } }
      )

      setPlayers(res.data)
   }

   return (
      <View style={styles.container}>
         <FlatList
            data={players}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
               <View style={styles.infoPlayer}>
                  <View style={styles.imagePlayerContainer}>
                     <Image source={image} style={styles.imagePlayer} />
                  </View>
                  <View style={styles.infoPlayerContainer}>
                     <Text style={styles.infoPlayerText}>Nome: {item.name}</Text>
                     <Text style={styles.infoPlayerText}>Posição: {item.position}</Text>
                     <Text style={styles.infoPlayerText}>Pontuação: {item.points}</Text>
                  </View>
               </View>)}
         />
      </View>
   )
}


