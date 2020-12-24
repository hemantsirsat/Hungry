import React from 'react';
import { View, StyleSheet } from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const SkeletonLoading = () =>{
    return(
        <View style = {styles.viewStyle}>
            <SkeletonPlaceholder>
                <View style={styles.loaderStyle}/>
                <View style={styles.loaderStyle}/>
                <View style={styles.loaderStyle}/>
                <View style={styles.loaderStyle}/>
            </SkeletonPlaceholder>
        </View>
    )
}
const styles = StyleSheet.create({
    viewStyle:{
        marginHorizontal:15,
        marginTop:25
    },
    loaderStyle:{
        width:'auto',
        height:150,
        borderRadius:10,
        marginVertical:7
    }
});

export default SkeletonLoading;