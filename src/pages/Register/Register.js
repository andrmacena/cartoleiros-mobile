import React, { useState } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker';

import styles from './styles'
import logoImg from '../../assets/logo_size.jpg'

import api from '../../services/api'

export default function Register() {

   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [profileImage, setProfileImage] = useState('')

   const navigation = useNavigation()

   async function submitData() {

      const image = 'data:image/jpeg;base64,'+ profileImage.replace(/(\r\n|\n|\r)/gm, "")
      
      const res = await api.post('users', {
         name,
         email,
         password,
         profile_url: image
      })

      return res ? navigation.goBack() : Alert.alert('Erro no cadastro')
   }

   const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        base64: true
      });
  

      if (!result.cancelled) {
         setProfileImage(result.base64)
      }
    }

   return (
      <View style={styles.container}>
         <Image source={logoImg} />
         <Text style={styles.titleRegister}>Cadastrar</Text>

         <TouchableOpacity style={styles.registerButton} onPress={pickImage}>
               <Text style={styles.textRegisterButton}>Selecionar imagem</Text>
            </TouchableOpacity>

         <TextInput style={styles.inputRegister} placeholder='Nome' onChangeText={name => setName(name)} ></TextInput>
         <TextInput style={styles.inputRegister} placeholder='Email' onChangeText={email => setEmail(email)} textContentType={"emailAddress"} keyboardType={"email-address"}></TextInput>
         <TextInput style={styles.inputRegister} placeholder='Senha' onChangeText={password => setPassword(password)} textContentType={"password"} secureTextEntry={true}></TextInput>
         <TextInput style={styles.inputRegister} placeholder='Confirmar Senha' textContentType={"password"} secureTextEntry={true}></TextInput>

         <TouchableOpacity style={styles.registerButton} onPress={submitData}>
            <Text style={styles.textRegisterButton}>Cadastrar</Text>
         </TouchableOpacity>
      </View>
   )
}


