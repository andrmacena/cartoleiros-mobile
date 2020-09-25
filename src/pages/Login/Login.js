import React, { useState } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome';


import styles from './styles'
import logoImg from '../../assets/logo.png'

import api from '../../services/api'

export default function Login() {
   const navigation = useNavigation()

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   async function submitLogin() {

      try {
         const res = await api.post('users/authenticate', {
            email,
            password
         })
         return res.headers !== '' ? navigateToHome() : Alert.alert(res.status)
      } catch (res) {
         return Alert.alert('Usuário ou senha inválidos')
      }
   }

   function navigateToHome() {
      navigation.navigate('Bottom')
   }

   function navigateToRegister(incident) {
      navigation.navigate('Register')
   }

   function navigateToReset() {
      navigation.navigate('Reset')
   }
   return (
      <View style={styles.container}>
         <Image source={logoImg} />
         <Text style={styles.titleLogin}>Login</Text>
         <View style={styles.containerLogin}>
            
            <TextInput style={styles.inputLogin} placeholder='Email' onChangeText={email => setEmail(email)} textContentType={"emailAddress"} keyboardType={"email-address"}/>
            <TextInput style={styles.inputLogin} placeholder='Senha' onChangeText={password => setPassword(password)} textContentType={"password"} secureTextEntry={true} />
            <TouchableOpacity style={styles.loginButton} onPress={submitLogin}>
               <Text style={styles.textLoginButton}>Entrar</Text>
            </TouchableOpacity>
            <View style={styles.containerOpcoes}>
               <TouchableOpacity onPress={navigateToReset}>
                  <Text style={styles.textOpcoes}>Esqueceu sua senha?</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={navigateToRegister}>
                  <Text style={styles.textOpcoes}>Não possui cadastro?</Text>
               </TouchableOpacity>
            </View>
         </View>
      </View>
   )
}


