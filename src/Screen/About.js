import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import Emoji from 'react-native-emoji';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
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
            <LinearGradient
                        // Background Linear Gradient
                        start={{x: 0.3, y: 0.25}} end={{x: 0.9, y: 1.0}}
                        colors={['#007ea7','#b8f3ff','#fff']}
                        style={styles.linearBackground}
            />
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
            </View>
            <View style={styles.addfavStyle}>

                <View style={styles.twoButtonStyle}>
                    <TouchableOpacity
                        style = {styles.addButtonStyle}
                        onPress={()=>navigation.navigate('MyRecipe')}
                    >
                        <Ionicons name="add" size={20} color="#000" style={styles.twoButtonIconStyle}/>
                        <Text style={styles.twoButtonTextStyle}>Add Recipe</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.twoButtonStyle}>
                    <TouchableOpacity
                        style={styles.addButtonStyle}
                    >
                        <Fontisto name="favorite" size={20} color="#000" style={styles.twoButtonIconStyle}/>
                        <Text style={styles.twoButtonTextStyle}>Favourites</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <TouchableOpacity
                    style={styles.signoutStyle}
                    onPress={()=>SignOutButtonAlert()}
                >
                    <Text style={styles.signoutTextStyle}>Sign Out</Text>
            </TouchableOpacity>
            {/* <Text style={styles.thankStyle}>Made with <Emoji name="heart" style={{fontSize: 8}} />  using React-Native/Expo</Text> */}
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle:{
        flex:1,
        backgroundColor:'#fff',
    },
    linearBackground:{
        height:'18%',
        marginBottom:10,
        top:-10
    },
    detailStyle:{
        position:'absolute',
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
    addfavStyle:{
        left:5,
        flexDirection:'row',
        justifyContent:'center',
        marginHorizontal:10
    },
    twoButtonStyle:{
        justifyContent:'center',
        height:40,
        borderWidth:1,
        borderRadius:5,
        borderColor:'#ced4da',
        marginRight:10,
        width:'50%'
    },
    addButtonStyle:{
        flexDirection:'row',
        padding:10,
    },
    twoButtonIconStyle:{
        paddingRight:10
    },
    twoButtonTextStyle:{
        fontSize:20,
        color:'#219ebc',
        fontWeight:'bold'
    },
    signoutStyle:{
        bottom:0,
        position:'absolute',
        backgroundColor:'#000',
        width:'100%',
        height:30,
        alignItems:'center',
        justifyContent:'center'
    },
    signoutTextStyle:{
        color:'#fff',
        fontSize:15,
        fontWeight:'bold'
    },
});

export default About;