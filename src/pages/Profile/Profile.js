import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import styles from './styles'

export default function Profile({ route, navigation }) {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [profile_url, setProfileUrl] = useState('./')

   const { data } = route.params

   useEffect(() => { 
      setName(data.name)
      setEmail(data.email)
      setProfileUrl(data.profile_url)
   })

   return (
      <View style={styles.container}>
         <View style={styles.profileInfoImageContainer}>
            <View style={styles.profileImageContainer}>
               <Image source={{ uri: profile_url }} style={styles.profileImage} />
            </View>
            <View style={styles.profileInfoContainer}>
               <Text style={styles.infoText}>{name}</Text>
               <Text style={styles.infoText}>{email}</Text>
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
