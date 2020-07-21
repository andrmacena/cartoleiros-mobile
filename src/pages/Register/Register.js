import React, { useState } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import logoImg from '../../assets/logo.png'

import api from '../../services/api'

export default function Register() {

   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const navigation = useNavigation()

   async function submitData() {

      const res = await api.post('users', {
         name,
         email,
         password
      })

      return res ? navigation.goBack() : 'Erro no cadastro'
   }

   return (
      <View style={styles.container}>
         <Image source={logoImg} />
         <Text style={styles.titleRegister}>Cadastrar</Text>

         <TextInput style={styles.inputRegister} placeholder='Nome' onChangeText={name => setName(name)} ></TextInput>
         <TextInput style={styles.inputRegister} placeholder='Email' onChangeText={email => setEmail(email)} ></TextInput>
         <TextInput style={styles.inputRegister} placeholder='Senha' onChangeText={password => setPassword(password)} ></TextInput>
         <TextInput style={styles.inputRegister} placeholder='Confirmar Senha'></TextInput>

         <TouchableOpacity style={styles.registerButton} onPress={submitData}>
            <Text style={styles.textRegisterButton}>Cadastrar</Text>
         </TouchableOpacity>
      </View>
   )
}


