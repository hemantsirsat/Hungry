import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';

const InputFromUser = ({ placeHolder }) => {
    return(
        <View style={styles.viewStyle}>
            <TextInput
                placeholder={placeHolder}
                style={styles.textInputStyle}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle:{
        marginVertical:7
    },
    textInputStyle:{
        marginHorizontal:15,
        height:40,
        backgroundColor:'#DEDEDE',
        borderRadius:7,
        paddingHorizontal:10,
    },
});

export default InputFromUser;