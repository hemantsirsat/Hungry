import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ShoppingList =() =>{
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Feature Coming Soon</Text>
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