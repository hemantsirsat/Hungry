import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import InputFromUser from '../Component/InputFromUser';

const MyRecipe = () => {
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
    return(
        <View style={styles.viewStyle}>
            <View style={styles.headerStyle}>
                <Text style={styles.headerTextStyle}>Add Your Recipe</Text>
            </View>
            <View style={styles.nameImageStyle}>
                <InputFromUser 
                    placeHolder = 'Recipe Name'
                />
                <TouchableOpacity
                    onPress={()=>pickImage()}
                    style={styles.uploadImageStyle}
                >
                    <View style={styles.uploadDetailsStyle}>
                        <Text numberOfLines={1}>{imageUpload}</Text>
                    </View>
                </TouchableOpacity>
                <InputFromUser
                    placeHolder= 'Description'
                /> 
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle:{},
    headerStyle:{
        justifyContent:'center'
    },
    headerTextStyle:{
        alignSelf:'flex-start',
        fontWeight:'bold',
        fontSize:22,
        marginHorizontal:15,
        marginVertical:15
    },
    nameImageStyle:{

    },
    uploadImageStyle:{
        marginVertical:7,
        marginHorizontal:15,
        backgroundColor:'#deedee',
        padding:10,
        minHeight:45,
        borderRadius:7,
        justifyContent:'center'
    },
    uploadDetailsStyle:{
    },
});

export default MyRecipe;