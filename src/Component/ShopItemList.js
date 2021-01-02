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
        backgroundColor:'#adb5bd',
        marginVertical:5,
        borderRadius:10,
    },
    textStyle:{
        fontSize:18,
        padding:10,
        color:'#fff',
    }
});

export default ShopItemList;