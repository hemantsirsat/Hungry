import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SearchBar from '../Component/SearchBar';
import Categories from '../Component/Categories';
import ApiKeys from '../ApiKeys/ApiKeys';

const HomeScreen =({ navigation }) =>{
    const [key1, id1, key2, id2, key3, id3] = ApiKeys();
    const types = [
        {id:'Quick',unique:1, api_id:id1,api_key:key1,from:0,to:15},
        {id:'Holiday',unique:2, api_id:id1,api_key:key1,from:0,to:15},
        {id:'Healthy',unique:3, api_id:id1,api_key:key1,from:0,to:15},
        {id:'Breakfast',unique:4, api_id:id2,api_key:key2,from:0,to:15},
        {id:'Lunch',unique:5, api_id:id2,api_key:key2,from:0,to:15},
        {id:'Snacks',unique:6, api_id:id2,api_key:key2,from:0,to:15},
        {id:'Dinner',unique:7, api_id:id3,api_key:key3,from:0,to:15},
        {id:'Desert',unique:8, api_id:id3,api_key:key3,from:0,to:15}
    ]
    return(
        <>
            <StatusBar style='auto' backgroundColor='#fff'/>
            <SearchBar 
                navigation={navigation}
                api_id={id3}
                api_key={key3}
                from={0}
                to={40}
            />
            <FlatList
                data={types}
                keyExtractor={(item)=>item.unique}
                renderItem={({item})=>{
                    return(
                        
                        <Categories 
                            category={item.id} 
                            destination={navigation}
                            api_id={item.api_id}
                            api_key={item.api_key}
                            from={item.from}
                            to={item.to}
                        />
                    )
                }}
            />
        </>
    );
};

const styles = StyleSheet.create({
});

export default HomeScreen;