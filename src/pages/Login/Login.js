import React, { Component } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import logoImg from '../../assets/logo.png'



export default function Login() {
   const navigation = useNavigation()

   function navigateToHome() {
      navigation.navigate('Home')
   }

   function navigateToRegister(incident) {
      navigation.navigate('Register')
   }
   return (
      <View style={styles.container}>
         <Image source={logoImg} />
         <Text style={styles.titleLogin}>Login</Text>
         <View style={styles.containerLogin}>
            <TextInput style={styles.inputLogin} placeholder='Email' textContentType={"emailAddress"} keyboardType={"email-address"}></TextInput>
            <TextInput style={styles.inputLogin} placeholder='Senha' textContentType={"password"} secureTextEntry={true}></TextInput>
            <TouchableOpacity style={styles.loginButton} onPress={navigateToHome}>
               <Text style={styles.textLoginButton}>Entrar</Text>
            </TouchableOpacity>
            <View style={styles.containerOpcoes}>
               <TouchableOpacity>
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


