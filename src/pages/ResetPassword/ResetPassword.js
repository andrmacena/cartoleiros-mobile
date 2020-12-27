import React, { useState } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import api from '../../services/api'
import logoImg from '../../assets/logo_size.jpg'

export default function ResetPassword() {

   [email, setEmail] = useState('')

   const navigation = useNavigation()

   async function submitData() {

      const res = await api.post('service/send', {
         email,
      })

      return res ? navigation.goBack() : Alert.alert('Erro ao enviar email')
   }

   return (
      <View style={styles.container}>
         <Image source={logoImg} />
         <Text style={styles.titleReset}>Restaurar Senha</Text>
         <View style={styles.containerReset}>
            <TextInput style={styles.inputReset} placeholder='Email' textContentType={"emailAddress"} keyboardType={"email-address"} onChangeText={email => setEmail(email)}></TextInput>
            <TouchableOpacity style={styles.resetButton} onPress={submitData}>
               <Text style={styles.textResetButton}>Enviar</Text>
            </TouchableOpacity>
         </View>
      </View>
   )
}


