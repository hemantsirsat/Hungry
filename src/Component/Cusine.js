import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Cusine = ({ cusineImageURL, cusineName, api_id, api_key, from, to, navigation }) => {
    return(
        <View style={styles.viewStyle}>
            <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('RecipeList',{searchTerm:cusineName,api_id,api_id,api_key,from,to});
                }}
            >
                <View style={styles.textoverlayStyle}>
                    <Image 
                        source={{uri:cusineImageURL}}
                        style={styles.imageStyle}
                    />
                    <View style={styles.detailStyle}>
                        <Text style={styles.cusineNameStyle} numberOfLines={1}>{cusineName}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle:{
        width:180,
        paddingLeft:10,
        marginHorizontal:5
    },
    imageStyle:{
        height:130,
        borderRadius:10,
    },
    detailStyle:{
        position:'absolute',
        backgroundColor:'rgba(0,0,0,0.5)',
        width:'100%',
        height:'100%',
        borderRadius:10,
        justifyContent:'flex-end',
    },
    cusineNameStyle:{
        fontSize:22,
        color:'#fff',
        marginBottom:20,
        alignSelf:'center',
    },
    textoverlayStyle:{
        backgroundColor:'rgba(0,0,0,0.5)',
        marginVertical:7,
        borderRadius:10,
    }
});

export default Cusine;