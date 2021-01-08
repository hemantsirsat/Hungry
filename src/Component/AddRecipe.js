import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const AddRecipe = () =>{
    return(
        <View style={styles.viewStyle}>
            <MaterialIcons name="food-bank" size={24} color="#ced4da" style={styles.addIconStyle}/>
            <TouchableOpacity
                style = {styles.addButtonStyle}
            >
                <Text style={styles.addTextStyle}>Add Your Recipe</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle:{
        marginHorizontal:15,
        borderWidth:1,
        borderRadius:5,
        borderColor:'#ced4da',
        flexDirection:'row'
    },
    addButtonStyle:{
        padding:10,
    },
    addIconStyle:{
        padding:10
    },
    addTextStyle:{
        fontSize:20,
        color:'#219ebc',
        fontWeight:'bold'
    }
});

export default AddRecipe;