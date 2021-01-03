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
            <View style={styles.enterItemStyle}>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder='Add Items To Shopping List'
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={(term)=>setItemName(term)}
                    onEndEditing={()=>{
                        if(itemName.length!=0){
                            submitHandler(itemName);
                        }
                }}
                />
                <TouchableOpacity
                    style={styles.addButtonStyle}
                    onPress={()=>{
                        if(itemName.length!=0){
                            submitHandler(itemName);
                        }
                    }}
                >
                    <Text style={styles.addTextStyle}>Add</Text>
                </TouchableOpacity>
            </View>
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
    enterItemStyle:{
        flexDirection:'row',
    },
    textInputStyle:{
        height:40,
        marginHorizontal:15,
        borderRadius:10,
        backgroundColor:'#DEDEDE',
        paddingHorizontal:10,
        marginBottom:10,
        width:'70%'
    },
    addButtonStyle:{
        marginLeft:'auto',
        backgroundColor:'#caf0f8',
        height:40,
        borderRadius:10,
        justifyContent:'center',
        marginRight:15,
        width:'17%'
    },
    addTextStyle:{
        alignSelf:'center',
        color:'#468faf'
    },
});

export default AddItem;