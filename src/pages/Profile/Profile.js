import React, { Component } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

import styles from './styles'

import image from '../../assets/plus-icon.png'

export default class Profile extends Component {
   render() {
      return (
         <View style={styles.container}>
            <View style={styles.profileInfoImageContainer}>
               <View style={styles.profileImageContainer}>
                  <Image source={image} style={styles.profileImage} />
               </View>
               <View style={styles.profileInfoContainer}>
                  <Text>Info sobre a pessoa</Text>
               </View>
            </View>
            <View style={styles.profileInfoContainer1}>
               <Text>Info sobre a pessoa</Text>
            </View>
         </View>
      )
   }
}
