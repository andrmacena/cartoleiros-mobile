import React, { useState } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import api from '../../services/api'
import logoImg from '../../assets/logo_size.jpg'

export default function ResetPassword({ route }) {

   const [email, setEmail] = useState(route.params)
   const [password, setPassword] = useState('')

   const navigation = useNavigation()

   async function submitData() {

      const res = await api.put('users/reset', {
         password,
         email
      })

      return res ? navigation.navigate('Login') : Alert.alert('Erro ao tentar trocar senha')
   }

   return (
      <View style={styles.container}>
         <Image source={logoImg} />
         <Text style={styles.titleReset}>Nova Senha</Text>
         <View style={styles.containerReset}>
            <TextInput style={styles.inputReset} placeholder='Email' textContentType={"emailAddress"} keyboardType={"email-address"} defaultValue={email} editable={false} textAlign="center"></TextInput>
            <TextInput style={styles.inputReset} placeholder='Nova Senha' textContentType={"password"} onChangeText={password => setPassword(password)} secureTextEntry={true}></TextInput>
            <TextInput style={styles.inputReset} placeholder='Confirmar Senha' textContentType={"password"} secureTextEntry={true}></TextInput>
            <TouchableOpacity style={styles.resetButton} onPress={submitData}>
               <Text style={styles.textResetButton}>Enviar</Text>
            </TouchableOpacity>
         </View>
      </View >
   )
}


