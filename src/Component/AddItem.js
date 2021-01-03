import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import firebase from 'firebase';
import ShopItemList from './ShopItemList';
import { FlatList } from 'react-native-gesture-handler';

const AddItem = () => {
    const [itemName, setItemName] = useState('');
    const [itemList, setItemList] = useState([]);
    const userId = firebase.auth().currentUser.uid;

    //add item to firebase database under user/shopinglist
    const addToList = () =>{
        removeFromList();
        firebase
            .database()
                .ref('/users/'+userId+'/ShopingList')
                    .push(itemList);
        console.log(firebase.database().ref('/users/'+userId+'/ShopingList'))
    }

    //remove item from firebase database under user/shopinglist
    const removeFromList = () => {
        firebase
            .database()
                .ref('/users'+userId+'/ShopingList')
                    .remove()
    }

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
            <StatusBar style='auto' hidden={false}/>
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
                            // addToList();
                        }
                }}
                />
                <TouchableOpacity
                    style={styles.addButtonStyle}
                    onPress={()=>{
                        if(itemName.length!=0){
                            submitHandler(itemName);
                            // addToList();
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
        backgroundColor:'#d6e2e9',
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