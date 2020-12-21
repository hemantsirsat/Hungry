import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const RecipeListCard = ({dish, navigation}) => {
    const imageURI = dish.item.recipe.image;

    return (
        <View style={styles.viewStyle}>
            <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Recipe',{item:dish});
                }}
            >
                <View style={styles.textoverlayStyle}>
                    <Image 
                        source={{uri:imageURI}}
                        style={styles.imageStyle}
                    />
                    <View style={styles.detailStyle}>
                        <Text style={styles.dishNameStyle} numberOfLines={2}>{dish.item.recipe.label}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    imageStyle:{
        height:150,
       // marginHorizontal:15,
        borderRadius:10,
       // marginVertical:7,
    },
    detailStyle:{
        position:'absolute',
        backgroundColor:'rgba(0,0,0,0.5)',
        width:'100%',
        height:'100%',
        borderRadius:10,
        justifyContent:'flex-end',
    },
    dishNameStyle:{
        fontSize:22,
        color:'#fff',
        marginHorizontal:25,
        marginBottom:20,
        textAlign:'left',
    },
    textoverlayStyle:{
        backgroundColor:'rgba(0,0,0,0.5)',
        marginVertical:7,
        marginHorizontal:15,
        borderRadius:10,
    }
});

export default RecipeListCard;