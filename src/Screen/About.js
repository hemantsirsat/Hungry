import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';
import Emoji from 'react-native-emoji';

const About =() =>{
    return(
        <View style={styles.viewStyle}>
            <StatusBar style='auto' />
            <Text style={styles.headerStyle}>Hungry Food Recipe App.</Text>
            <Text style={styles.descriptionStyle}>The main motive of this application is to provide recipe details to user.</Text>
            <Text style={styles.thankStyle}>Made with <Emoji name="heart" style={{fontSize: 8}} />  using React-Native/Expo</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    },
    headerStyle:{
        fontWeight:'bold',
        fontSize:20,
        fontFamily:'sans-serif',
        marginHorizontal:20,
        textAlign:'center'
    },
    descriptionStyle:{
        marginHorizontal:50,
        textAlign:'center',
        marginVertical:5,
        fontSize:15,
    },
    thankStyle:{
        fontSize:10,
        fontStyle:'italic',
        marginHorizontal:20,
        textAlign:'center'
    }
});

export default About;