import React, { Component } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

import styles from './styles'

import image from '../../assets/plus-icon.png'

export default class Home extends Component {
   render() {
      return (
         <View style={styles.container}>
            <View style={styles.infoTeam}>
               <View style={styles.logoTeamContainer}>
                  <Image source={image} style={styles.logoTeam} />
               </View>
               <View style={styles.infoTeamContainer}>
                  <Text>Info Team</Text>
               </View>
            </View>
            <View style={styles.infoTeam}>
               <View style={styles.logoTeamContainer}>
                  <Image source={image} style={styles.logoTeam} />
               </View>
               <View style={styles.infoTeamContainer}>
                  <Text>Results</Text>
               </View>
            </View>
            <View style={styles.infoTeam}>
               <View style={styles.logoTeamContainer}>
                  <Image source={image} style={styles.logoTeam} />
               </View>
               <View style={styles.infoTeamContainer}>
                  <Text>Team of league</Text>
               </View>
            </View>
            <View style={styles.infoTeam}>
               <View style={styles.logoTeamContainer}>
                  <Image source={image} style={styles.logoTeam} />
               </View>
               <View style={styles.infoTeamContainer}>
                  <Text>Player of week</Text>
               </View>
            </View>
         </View>
      )
   }
}


