import React, { Component } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

import styles from './styles'

import image from '../../assets/plus-icon.png'

export default function Profile () {
      return (
         <View style={styles.container}>
            <View style={styles.profileInfoImageContainer}>
               <View style={styles.profileImageContainer}>
                  <Image source={image} style={styles.profileImage} />
               </View>
               <View style={styles.profileInfoContainer}>
                  <Text>nome</Text>
                  <Text>email</Text>
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
