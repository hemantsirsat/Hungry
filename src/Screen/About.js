import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Emoji from 'react-native-emoji';
import firebase from 'firebase';
import * as Google from 'expo-google-app-auth';

const About =({navigation}) =>{

    const user = firebase.auth().currentUser;
    const userName = user.displayName;
    const userProfilePicture = user.photoURL;
    const userEmail = user.email;

    const userSignOut = async() =>{
        try{
                firebase.auth().signOut();
                navigation.replace('Loading')
            }
        catch(err){
            console.log(err)
            alert('Sign Out Failed! Try Again')
        }

    }
    return(
        <View style={styles.viewStyle}>
            <StatusBar style='auto' />
            <View style={styles.detailStyle}>
                <Image 
                    source={{uri:userProfilePicture}}
                    style={styles.profileImageStyle}
                />
                <View style={styles.nameandmailStyle}>
                    <Text style={styles.nameTextStyle}>{userName}</Text>
                    <Text style={styles.emailTextStyle}>{userEmail}</Text>
                </View>
                <TouchableOpacity
                    style={styles.signoutStyle}
                    onPress={()=>userSignOut()}
                >
                    <Text style={styles.signoutTextStyle}>Sign out</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.favouriteStyle}>
                <TouchableOpacity>
                    <Text style={styles.favouriteTextStyle}>Favourites</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.thankStyle}>Made with <Emoji name="heart" style={{fontSize: 8}} />  using React-Native/Expo</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle:{
        marginTop:20,
        flex:1,
        backgroundColor:'#fff',
    },
    detailStyle:{
        marginVertical:20,
        marginHorizontal:15,
        flexDirection:'row',
    },
    nameandmailStyle:{
        marginHorizontal:10,
        justifyContent:'center'
    },
    nameTextStyle:{
        fontSize:22,
        fontWeight:'bold',
    },
    emailTextStyle:{
        fontSize:13,
        marginVertical:2
    },
    profileImageStyle:{
        width:60,
        height:60,
        borderRadius:100,
        borderColor:'#ced4da',
        borderWidth:1
    },  
    favouriteStyle:{
        marginHorizontal:15,
        marginTop:15,
        borderWidth:1,
        borderRadius:5,
        padding:5,
        borderColor:'#ced4da'
    },
    favouriteTextStyle:{
        fontSize:20,
        fontWeight:'bold'
    },
    signoutStyle:{
        marginLeft:'auto',
    },
    signoutTextStyle:{
        color:'#0077b6',
        fontSize:15
    },
    thankStyle:{
        fontSize:10,
        fontStyle:'italic',
        marginHorizontal:20,
        textAlign:'center',
        bottom:5,
        position:'absolute',
        alignSelf:'center'
    }
});

export default About;