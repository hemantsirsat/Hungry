import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Button,ImageBackground } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import InputFromUser from '../Component/InputFromUser';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

export default class MyRecipe extends React.Component{
  render(){
    return(
      <View style={styles.containerStyle}>
        <ImageBackground source={{uri:'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=331&q=80'}}
          style={styles.coverImageStyle}
        >
          <View style={styles.formStyle}>
            <InputFromUser
              placeHolder="Recipe Name"
            />
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle:{
    flex:1
  },
  coverImageStyle:{
    // resizeMode:'stretch',
    height:'100%',
  },
  formStyle:{
    flex:1,
    backgroundColor:'rgba(0,0,0,0.7)',
    paddingTop:30
  }
})