import React, { useState } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, Linking } from 'react-native';

import styles from './styles'
import logoImg from '../../assets/logo_size.jpg'

export default function ResetPassword() {

   [email, setEmail] = useState('')

   return (
      <View style={styles.container}>
         <Image source={logoImg} />
         <Text style={styles.titleReset}>Restaurar Senha</Text>
         <View style={styles.containerReset}>
            <TextInput style={styles.inputReset} placeholder='Email' textContentType={"emailAddress"} keyboardType={"email-address"} onChangeText={email => setEmail(email)}></TextInput>
            <TouchableOpacity style={styles.resetButton} onPress={() => { }}>
               <Text style={styles.textResetButton}>Enviar</Text>
            </TouchableOpacity>
         </View>
      </View>
   )
}


