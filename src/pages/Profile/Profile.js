import React  from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import styles from './styles'

export default function Profile({ route, navigation }) {
   const { data } = route.params
   return (
      <View style={styles.container}>
         <View style={styles.profileInfoImageContainer}>
            <View style={styles.profileImageContainer}>
               <Image source={{ uri: data.profile_url }} style={styles.profileImage} />
            </View>
            <View style={styles.profileInfoContainer}>
               <Text>{data.name}</Text>
               <Text>{data.email}</Text>
            </View>
         </View>
         <View style={styles.profileFuncionalidades}>
            <TouchableOpacity style={styles.buttonUpdateProfile}>
               <Text>Editar informações</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonUpdateProfile}>
               <Text>Desativar conta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonUpdateProfile}>
               <Text>Sair</Text>
            </TouchableOpacity>
         </View>
      </View>
   )
}
