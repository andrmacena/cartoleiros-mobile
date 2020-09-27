import React, { Component } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, ImageBackground } from 'react-native';

import styles from './styles'
import campo from '../../assets/campo.jpg'
import plus from '../../assets/plus-icon.png'

export default class Team extends Component {
   render() {
      return (
         <View style={styles.container}>
            <ImageBackground source={campo} style={styles.campo}>
               <View style={styles.ataque}>
                  <TouchableOpacity style={styles.jogadores}>
                     <Image source={plus} style={styles.imageButtonJogadores}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.jogadores}>
                     <Image source={plus} style={styles.imageButtonJogadores}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.jogadores}>
                     <Image source={plus} style={styles.imageButtonJogadores}></Image>
                  </TouchableOpacity>
               </View>

               <View style={styles.meio}>
                  <TouchableOpacity style={styles.jogadores}>
                     <Image source={plus} style={styles.imageButtonJogadores}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.jogadores}>
                     <Image source={plus} style={styles.imageButtonJogadores}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.jogadores}>
                     <Image source={plus} style={styles.imageButtonJogadores}></Image>
                  </TouchableOpacity>
               </View>

               <View style={styles.defesa}>
                  <TouchableOpacity style={styles.jogadores}>
                     <Image source={plus} style={styles.imageButtonJogadores}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.jogadores}>
                     <Image source={plus} style={styles.imageButtonJogadores}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.jogadores}>
                     <Image source={plus} style={styles.imageButtonJogadores}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.jogadores}>
                     <Image source={plus} style={styles.imageButtonJogadores}></Image>
                  </TouchableOpacity>
               </View>
               <View style={styles.goleiro}>
                  <TouchableOpacity style={styles.jogadores}>
                     <Image source={plus} style={styles.imageButtonJogadores}></Image>
                  </TouchableOpacity>
               </View>

            </ImageBackground>
         </View>
      )
   }
}


