import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AddRecipe = ({navigation}) =>{
    return(
        <View style={styles.viewStyle}>
            
            <TouchableOpacity
                style = {styles.addButtonStyle}
                onPress={()=>navigation.navigate('MyRecipe')}
            >
                <Ionicons name="add" size={24} color="#000" style={styles.addIconStyle}/>
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
    },
    addButtonStyle:{
        flexDirection:'row',
        padding:10,
    },
    addIconStyle:{
        paddingRight:10
    },
    addTextStyle:{
        fontSize:20,
        color:'#219ebc',
        fontWeight:'bold'
    }
});

export default AddRecipe;