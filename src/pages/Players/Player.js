import React, { Component } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

import styles from './styles'

import image from '../../assets/plus-icon.png'

export default function Player({ route, navigation }) {
   // const { data } = route.params
   // console.log('home - name logado: ' + data.name)
   return (
      <View style={styles.container}>
         <View style={styles.infoPlayer}>
            <View style={styles.imagePlayerContainer}>
               <Image source={image} style={styles.imagePlayer} />
            </View>
            <View style={styles.infoPlayerContainer}>
               <Text>name player</Text>
               <Text>points</Text>
               <Text>value</Text>
            </View>
         </View>
         <View style={styles.infoPlayer}>
            <View style={styles.imagePlayerContainer}>
               <Image source={image} style={styles.imagePlayer} />
            </View>
            <View style={styles.infoPlayerContainer}>
               <Text>name player</Text>
               <Text>points</Text>
               <Text>value</Text>
            </View>
         </View>
         <View style={styles.infoPlayer}>
            <View style={styles.imagePlayerContainer}>
               <Image source={image} style={styles.imagePlayer} />
            </View>
            <View style={styles.infoPlayerContainer}>
               <Text>name player</Text>
               <Text>points</Text>
               <Text>value</Text>
            </View>
         </View>
         <View style={styles.infoPlayer}>
            <View style={styles.imagePlayerContainer}>
               <Image source={image} style={styles.imagePlayer} />
            </View>
            <View style={styles.infoPlayerContainer}>
               <Text>name player</Text>
               <Text>points</Text>
               <Text>value</Text>
            </View>
         </View>
      </View>
   )
}


