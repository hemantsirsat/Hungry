import React, { Component, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import firebase from 'firebase';

const AddItem = () => {
    const [shopitems, setShopItems] = useState();
    const userId = firebase.auth().currentUser.uid;

    const [present, setPresent] = useState(false);
    const [itemList, setItemList] = useState([]);

    // check if already exists
    // const checkIfAlreadyExists = (item) =>{
    //     firebase
    //         .database()
    //             .ref('/users/'+userId+'/ShopingList/')
    //                 .once('value',function(snapShot){
    //                     snapShot.forEach(function(childSnapShot){
    //                         const itemName = childSnapShot;
    //                         console.log(itemName)
    //                         if(itemName  === item){
    //                             setPresent(true)
    //                             return;
    //                         }
    //                     });
    //                 })
    // }

    //add item to firebase database under user/shopinglist
    const addToList = (item) =>{
        firebase
            .database()
                .ref('/users/'+userId+'/ShopingList/')
                    .push(item);
        }

    //retrive items from database
    const receiveItem = ()=>{
        firebase
            .database()
                .ref('/users/'+userId+'/ShopingList/')
                    .once('value',function(SnapShot){
                        SnapShot.forEach(function(childSnapShot){
                            setItemList([...itemList,childSnapShot]);
                        })
                    })
    }
    useEffect(()=>{
        receiveItem();
    },[])
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.headerStyle}>Shopping List</Text>
            <TextInput
                    placeholder='Add Items To Shopping List'
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={shopitems}
                    onChangeText={(term)=>setShopItems(term)}
                    onEndEditing={()=>{
                        addToList(shopitems)
                        setShopItems('')
                    }}
                    style={styles.textInputStyle}
                />
        </View>
    )    
}

const styles = StyleSheet.create({
    viewStyle:{
        flex:1,
        marginTop:100
    },
    additemviewStyle:{
        flex:1
    },
    addStyle:{
        marginTop:20,
        textAlign:'center',
        fontSize:18,
        padding:5,
        color:'#57cc99'
    },
    headerStyle:{
        alignSelf:'center',
        paddingVertical:15,
        fontSize:25,
        fontWeight:'bold'
    },
    textInputStyle:{
        height:40,
        marginHorizontal:15,
        borderRadius:10,
        backgroundColor:'#DEDEDE',
        paddingHorizontal:10
    }
});

export default AddItem;