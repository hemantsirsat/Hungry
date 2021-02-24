import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SearchBar from '../Component/SearchBar';
import Cusine from '../Component/Cusine';
import Categories from '../Component/Categories';
import ApiKeys from '../ApiKeys/ApiKeys';
import { ScrollView } from 'react-native-gesture-handler';
import firebase from 'firebase';

const HomeScreen =({ navigation }) =>{
    const [key1, id1, key2, id2, key3, id3, key4, id4] = ApiKeys();
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

    const allCusines = [
        {id:'In',Cusinename:'Indian',ImageURL:'https://cdn.vox-cdn.com/thumbor/8fZR_P4E2OCgm3T99Y-5ABG7Mx4=/0x0:7360x4912/920x613/filters:focal(3092x1868:4268x3044):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67000785/shutterstock_1435374326.0.jpg',api_id:id4,api_key:key4,from:0,to:30},
        {id:'USA',Cusinename:'American',ImageURL:'https://travelandleisureindia.in/wp-content/uploads/2018/06/South-American-Food-Feature.jpg',api_id:id4,api_key:key4,from:0,to:30},
        {id:'Ch',Cusinename:'Chinese',ImageURL:'https://www.thespruceeats.com/thmb/NRllXVX3m3JP4bCWxw0Ltpayhfg=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chinese-take-out-472927590-57d31fff3df78c5833464e7b.jpg',api_id:id4,api_key:key4,from:0,to:30},
        {id:'Th',Cusinename:'Thai',ImageURL:'https://asianinspirations.com.au/wp-content/uploads/2020/02/01_SouthtoNorth_1920x1280-940x627.jpg',api_id:id4,api_key:key4,from:0,to:30},
        {id:'It',Cusinename:'Italian',ImageURL:'https://www.onhisowntrip.com/wp-content/uploads/2020/08/RACQ-1000x540.jpg',api_id:id4,api_key:key4,from:0,to:30},
        {id:'Br',Cusinename:'British',ImageURL:'https://i2.wp.com/handluggageonly.co.uk/wp-content/uploads/2014/06/Hand-Luggage-Only-13.jpg?w=1600&ssl=1',api_id:id4,api_key:key4,from:0,to:30},
        {id:'Mx',Cusinename:'Mexican',ImageURL:'https://img1.mashed.com/img/gallery/mexican-foods-you-need-to-try-before-you-die/intro-1585677665.jpg',api_id:id4,api_key:key4,from:0,to:30},
        {id:'Jp',Cusinename:'Japanese',ImageURL:'https://www.onhisowntrip.com/wp-content/uploads/2020/07/The-Jakarta-Post-1290x540.jpg',api_id:id4,api_key:key4,from:0,to:30},
        {id:'Nd',Cusinename:'Nordic',ImageURL:'https://www.hospitalitynewsmag.com/wp-content/uploads/2018/12/hospitality-news-nordic-cuisine-main.jpg',api_id:id4,api_key:key4,from:0,to:30},
        {id:'Md',Cusinename:'Mediterranean',ImageURL:'https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/story/more-diet.jpg?itok=y9x4cqn-',api_id:id4,api_key:key4,from:0,to:30}
    ]

    const user = firebase.auth().currentUser;
    const userName = user.displayName;

    return(
        <View style={styles.viewStyle}>
            <StatusBar style='dark' hidden={true} backgroundColor='rgba(0,0,0,0.5)'/>
            <ScrollView
                style={{backgroundColor:'#fff'}}
                // stickyHeaderIndices={[1]}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.greetingStyle}>
                    <Text style={styles.hiStyle}>Hi, {userName}</Text>
                    <Text style={styles.cravingStyle}>What Are You Craving?</Text>
                </View>
                <SearchBar 
                    navigation={navigation}
                    api_id={id3}
                    api_key={key3}
                    from={0}
                    to={40}
                />
                <Text style={styles.cusineStyle}>Cuisine</Text>
                <FlatList
                    horizontal
                    ListFooterComponent={<View style={{marginRight:10}}></View>}
                    showsHorizontalScrollIndicator={false}
                    data={allCusines}
                    keyExtractor={(item)=>item.id}
                    renderItem={({item})=>{
                        return(
                            <Cusine 
                                cusineImageURL={item.ImageURL}
                                navigation = {navigation}
                                cusineName={item.Cusinename}
                                api_id={item.api_id}
                                api_key={item.api_key}
                                from={item.from}
                                to={item.to}
                            />
                        )
                    }}
                />          
                <FlatList
                    showsVerticalScrollIndicator={false}
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
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle:{
        backgroundColor:'#fff'
    },
    greetingStyle:{
        backgroundColor:'#a9d6e5',
        height:170,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30
    },
    linearBackground:{
        height:100
    },
    hiStyle:{
        fontSize:28,
        marginTop:80,
        marginHorizontal:15,
        fontWeight:'bold'
    },
    cravingStyle:{
        fontSize:18,
        marginBottom:5,
        marginHorizontal:15,
        fontWeight:'bold'
    },
    cusineStyle:{
        fontSize:25,
        fontWeight:'bold',
        paddingLeft:15,
        paddingVertical:18,
        fontSize:20
    },
});

export default HomeScreen;