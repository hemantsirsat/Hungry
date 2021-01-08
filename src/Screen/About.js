import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import AddRecipe from '../Component/AddRecipe';
import Emoji from 'react-native-emoji';
import { Fontisto } from '@expo/vector-icons';
import firebase from 'firebase';

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

    const SignOutButtonAlert = () =>
        Alert.alert(
            "You no longer will be able to use our services",
            "Are you sure?",
            [
                {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
                },
                { text: "Sign Out", onPress: () => userSignOut()}
            ],
            { cancelable: false }
    );
    return(
        <View style={styles.viewStyle}>
            <StatusBar style='auto' hidden={true} />
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
                    onPress={()=>SignOutButtonAlert()}
                >
                    <Text style={styles.signoutTextStyle}>Sign Out</Text>
                </TouchableOpacity>
            </View>
            <AddRecipe />
            <View style={styles.favouriteStyle}>
                <Fontisto name="favorite" size={24} color="black" style={styles.favouriteIconStyle}/>
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
        borderColor:'#ced4da',
        flexDirection:'row',
    
    },
    favouriteIconStyle:{
        alignSelf:'center',
        padding:10
    },
    favouriteTextStyle:{
        fontSize:20,
        fontWeight:'bold',
        color:'#219ebc',
        alignSelf:'center',
        padding:10
    },
    signoutStyle:{
        marginLeft:'auto',
    },
    signoutTextStyle:{
        color:'#0077b6',
        fontSize:15,
        fontWeight:'bold'
    },
    thankStyle:{
        fontSize:10,
        fontStyle:'italic',
        marginHorizontal:20,
        textAlign:'center',
        bottom:0,
        paddingBottom:5,
        position:'absolute',
        alignSelf:'center'
    }
});

export default About;