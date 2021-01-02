import React, { Component, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import firebase from 'firebase';
import ShopItemList from './ShopItemList';
import { FlatList } from 'react-native-gesture-handler';

const AddItem = () => {
    const [itemName, setItemName] = useState('');
    const [itemList, setItemList] = useState([]);
    // const userId = firebase.auth().currentUser.uid;

    //add item to firebase database under user/shopinglist
    // const addToList = (item) =>{
    //     firebase
    //         .database()
    //             .ref('/users/'+userId+'/ShopingList/')
    //                 .push(item);
    //     }

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

    //retrive items from database
    // const receiveItem = ()=>{
    //     firebase
    //         .database()
    //             .ref('/users/'+userId+'/ShopingList/')
    //                 .once('value',function(SnapShot){
    //                     SnapShot.forEach(function(childSnapShot){
    //                         setItemList([...itemList,childSnapShot]);
    //                     })
    //                 })
    // }

    const submitHandler = (item) =>{
        setItemList((prevItemList)=>{
            return[
                {text: item,key:Math.random().toString()},
                ...prevItemList
            ]
        })
    }

    const onDeleteItem = (key) =>{
        setItemList((prevItemList)=>{
            return prevItemList.filter(itemList=>itemList.key!=key);
        });
    }

    return(
        <View style={styles.viewStyle}>
            <Text style={styles.headerStyle}>Shopping List</Text>
            <TextInput
                style={styles.textInputStyle}
                placeholder='Add Items To Shopping List'
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={(term)=>setItemName(term)}
                onEndEditing={()=>{
                    submitHandler(itemName);
            }}
            />
            <FlatList
                data={itemList}
                keyExtractor={(items)=>items.key}
                renderItem={(items)=>{
                    return(
                        <ShopItemList
                            onDeleteItem={onDeleteItem}
                            item = {items.item}
                        />
                    )
                }}
            />
            
        </View>
    )    
}

const styles = StyleSheet.create({
    viewStyle:{
        flex:1,
        paddingTop:100,
        backgroundColor:'#fff'
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
        paddingHorizontal:10,
        marginBottom:10
    }
});

export default AddItem;