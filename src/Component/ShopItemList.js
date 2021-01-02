import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ShopItemList = ({item, onDeleteItem}) =>{
    return(
        <View style={styles.viewStyle}>
            <TouchableOpacity
                onPress={()=>onDeleteItem(item.key)}
            >
                <Text style={styles.textStyle}>{item.text}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle:{
        flex:1,
        marginHorizontal:15,
        backgroundColor:'#e0f7fc',
        marginVertical:5,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#83dff0'
    },
    textStyle:{
        fontSize:20,
        padding:10,
        color:'#000'
    }
});

export default ShopItemList;