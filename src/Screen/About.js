import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, InputFromUser } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import BottomSheet from 'reanimated-bottom-sheet';
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

    const [imageUpload, setImageUpload] = useState('Upload Image');
    
    //Ask for permission and select image from local storage
    const pickImage = async () => {
        (async () => {
            if (Platform.OS !== 'web') {
              const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
              if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
              }
            }
          })();  
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 6],
          quality: 1,
        });
        
        if (!result.cancelled) {
          setImageUpload(result.uri);
        }
    };

    const renderContent = () => (
                <View style={styles.formStyles}>
                    <InputFromUser 
                        placeHolder = 'Recipe Name'
                    />
                    {/* <TouchableOpacity
                        onPress={()=>pickImage()}
                        style={styles.uploadImageStyle}
                    >
                        <View style={styles.uploadDetailsStyle}>
                            <Text numberOfLines={1}>{imageUpload}</Text>
                        </View>
                    </TouchableOpacity>
                    <InputFromUser
                        placeHolder= 'Description'
                    />  */}
                </View>
    );

    const sheetRef = React.useRef(null);

    return(
        <View style={styles.viewStyle}>
            <LinearGradient
                        // Background Linear Gradient
                        colors={['#00b2ca','#fff']}
                        style={styles.linearBackground}
            />
            <StatusBar style='dark' hidden={true}/>
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
                        onPress={() => sheetRef.current.snapTo(0)}
                    >
                        <Ionicons name="add" size={20} color="#000" style={styles.twoButtonIconStyle}/>
                        <Text style={styles.twoButtonTextStyle}>Add Recipe</Text>
                    </TouchableOpacity>
                </View>
                {/* <View style={styles.twoButtonStyle}>
                    <TouchableOpacity
                        style={styles.addButtonStyle}
                    >
                        <Fontisto name="favorite" size={20} color="#000" style={styles.twoButtonIconStyle}/>
                        <Text style={styles.twoButtonTextStyle}>Favourites</Text>
                    </TouchableOpacity>
                </View> */}
            </View>
            <TouchableOpacity
                    style={styles.signoutStyle}
                    onPress={()=>SignOutButtonAlert()}
                >
                    <Text style={styles.signoutTextStyle}>Sign Out</Text>
            </TouchableOpacity>

            <View style={styles.seperatorStyle}>
                <View style={styles.line1Style} />
                <Text style={styles.favouriteTextStyle}>Favourites</Text>
                <View style={styles.line2Style} />
            </View>
            {/* <Text style={styles.thankStyle}>Made with <Emoji name="heart" style={{fontSize: 8}} />  using React-Native/Expo</Text> */}
            {/* <BottomSheet
                ref={sheetRef}
                snapPoints={[450, 300, 0]}
                borderRadius={30}
                renderContent={renderContent}
        /> */}
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
        width:'100%'
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
    seperatorStyle:{
        marginVertical:15,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    line1Style:{
        borderColor:'black',
        borderWidth:1,
        height:1,
        flex:1,
        marginLeft:10,
        borderColor:'#42bfdd'
    },
    line2Style:{
        borderColor:'black',
        borderWidth:1,
        height:1,
        flex:1,
        marginRight:10,
        borderColor:'#42bfdd'
    },
    favouriteTextStyle:{
        marginHorizontal:5,
        fontSize:20,
        color:'#42bfdd',
        fontWeight:'bold'
    },
    signoutStyle:{
        bottom:0,
        position:'absolute',
        backgroundColor:'#000',
        width:'100%',
        height:40,
        alignItems:'center',
        justifyContent:'center'
    },
    signoutTextStyle:{
        color:'#fff',
        fontSize:20,
        fontWeight:'bold'
    },
    formStyles:{
        backgroundColor:'#DEDEDE',
        height:'100%'
    },
});

export default About;