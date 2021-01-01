import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AddItem from '../Component/AddItem';

const ShoppingList =() =>{
    return(
        <View style={styles.viewStyle}>
            <AddItem />
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle:{
        flex:1,
        justifyContent:'center'
    },
    textStyle:{
        alignSelf:'center',
        fontSize:20,
        fontStyle:'italic'
    }
});

export default ShoppingList;