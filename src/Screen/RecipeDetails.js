import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, StyleSheet, FlatList, ScrollView, TouchableOpacity, Share } from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from 'firebase';

export default class RecipeDetails extends React.Component{
    constructor(props){
        super(props);
        this.state={
            route:this.props.route,
            navigation:this.props.navigation,
            Favourite:"False",
            favs:[],
            iconColor:'#DEDEDE'
        }
    }

    async defaultStore(){
        try {
          await AsyncStorage.setItem('status', '0') //Not in Favourites(0:- not fav, 1:- Fav)
        } catch (e) {
          // saving error
        }
      }

    async checkifExists(){
        let recipeDetails='';
        {!this.state.route.params.item.recipe ? 
            recipeDetails=this.state.route.params.item.item.recipe
            : 
            recipeDetails=this.state.route.params.item.recipe 
        }
        const recipeDetailsUrl = recipeDetails.url;
        await firebase.database()
                        .ref('Favourites/'+firebase.auth().currentUser.uid)
                            .once('value')
                                .then(function(snapshot) {
                                    snapshot.forEach(function(childSnapshot) {
                                        var url = childSnapshot.child('URL').val();
                                        var check = url.localeCompare(recipeDetailsUrl)
                                        if(check=='0'){
                                            AsyncStorage.setItem('status', '1')
                                        }
                                    })
                                })
    }
    async deleteifExists(){
        let recipeDetails='';
        {!this.state.route.params.item.recipe ? 
            recipeDetails=this.state.route.params.item.item.recipe
            : 
            recipeDetails=this.state.route.params.item.recipe 
        }
        const recipeDetailsUrl = recipeDetails.url;
        var db = firebase.database()
        var path = await db.ref('Favourites/'+firebase.auth().currentUser.uid)
        path.once('value')
        .then(function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                var url = childSnapshot.child('URL').val();
                var check = url.localeCompare(recipeDetailsUrl)
                if(check=='0'){
                    db.ref('Favourites/'+firebase.auth().currentUser.uid).child(childSnapshot.key).remove()
                }
            })
        }) 
    }

    async componentDidMount(){
        await this.defaultStore()
        await this.checkifExists()
        try {
            const value = await AsyncStorage.getItem('status')
            if(value == 1) {
                this.setState({
                    iconColor:'#d40429',
                    Favourite:'True'
                })
            }
        } catch(e) {
            // error reading value
        }
    }
    render(){
        let recipeDetails='';
        {!this.state.route.params.item.recipe ? 
            recipeDetails=this.state.route.params.item.item.recipe
            : 
            recipeDetails=this.state.route.params.item.recipe 
        }
        const recipeName = recipeDetails.label;
        const imageURL = recipeDetails.image;
        const ingredients = recipeDetails.ingredientLines;
        const healthlabel = recipeDetails.healthLabels;
        const calories = parseFloat(recipeDetails.calories).toFixed(2);
        const totalWeight = parseFloat(recipeDetails.totalWeight).toFixed(2);
        const totalTime = parseFloat(recipeDetails.totalTime).toFixed(2);
        const recipeDetailsUrl = recipeDetails.url;

        const userID = firebase.auth().currentUser.uid;

        const onShare = async() =>{
            try{
                const result = await Share.share({
                    message:'Hey, Check Out This Amazing Recipe on '+recipeName+' '+recipeDetailsUrl,
                });
                if (result.action === Share.dismissedAction){
                    alert("Something Went Wrong! Try Again")
                }
            }
            catch(err){
                alert(error.message);
            }
        };
        return(
            <View style={{flex:1, backgroundColor:"#fff"}}>
                <StatusBar style='light' backgroundColor='rgba(0,0,0,0.5)'/>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.shareViewStyle}>
                        <TouchableOpacity
                            onPress={()=>onShare()}
                        >
                            <Text style={styles.shareStyle}><Entypo name="share" size={28} color="white" /></Text>
                        </TouchableOpacity>
                    </View>
                    <Image source={{uri:imageURL}} style={styles.headerimageStyle}/>
                    <View style={styles.contentStyle}>
                        <View style={styles.nameandfavStyle}>
                            <Text style={styles.labelStyle}>{recipeName}</Text>




                            <TouchableOpacity
                                onPress={()=>{
                                    if(this.state.Favourite=='False'){
                                        this.setState({
                                            Favourite:'True',
                                            iconColor:'#d40429'
                                        });
                                        firebase.database().ref('Favourites/'+userID).push({'URL':recipeDetailsUrl,'Name':recipeName})
                                    }
                                    else{
                                        this.setState({
                                            Favourite:'False',
                                            iconColor:'#DEDEDE'
                                        })
                                        this.deleteifExists()
                                    }
                                }}
                                style={styles.favouritebuttonStyle}
                            >
                                <Entypo name="heart" size={24} color={this.state.iconColor} />
                            </TouchableOpacity>




                        </View>
                        <View style={styles.inshortStyle}>
                            <Text style={styles.innerinshortStyle}>
                                <Text>{calories}{"\n"}</Text> 
                                <Text style={styles.unitStyle}>Kcal</Text>
                            </Text>
                            <Text style={styles.innerinshortStyle}>
                                <Text>{totalWeight}{"\n"}</Text> 
                                <Text style={styles.unitStyle}>g</Text>    
                            </Text>
                            <Text style={styles.timeStyle}>
                                { parseFloat(totalTime)===0.00 ?
                                        <Text>N/A{"\n"}</Text> 
                                    :
                                        <Text>{totalTime}{"\n"} </Text>
                                }
                                <Text style={styles.unitStyle}>min</Text>
                            </Text>
                        </View>
                        <View style={{paddingRight:5}}>
                            {healthlabel.length!==0 ?
                            <View>
                            <Text style={styles.healthheaderStyle}>Health Labels</Text>
                            <FlatList
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={healthlabel}
                                keyExtractor={(item)=>item}
                                renderItem={({item})=>{
                                    return(
                                        <Text style={styles.healthlabelStyle}>{item}</Text>
                                    )
                                }}    
                            />
                            </View>
                            :null}
                        </View>
                        <View style={styles.ingredientHeadingStyle}>
                            <MaterialIcons name="list-alt" size={22} color="black" />
                            <Text style={styles.textStyle}>
                                Ingredients
                            </Text>
                        </View>
                        {ingredients.map((items)=>
                            <Text style={styles.ingredientStyle}>{items}</Text>
                        )}
                    </View>
                    <TouchableOpacity
                        style={styles.knowMoreStyle}
                        onPress={()=>navigation.navigate('InDetail',{website:recipeDetailsUrl})}
                    >
                        <Text style={styles.tapStyle}>Tap Here To Know More!</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    headerimageStyle:{
        width:'auto',
        height:500,
    },
    shareViewStyle:{
        zIndex:1,
        position:'absolute',
        alignItems:'flex-end',
        right:0
    },
    shareStyle:{
        marginRight:15,
        marginTop:10,
        backgroundColor:'rgba(0,0,0,0.3)',
        borderRadius:30,
        padding:10
    },
    contentStyle:{
        marginBottom:10
    },
    nameandfavStyle:{
        flexDirection:'row',
        marginTop:20,
        marginHorizontal:15,
        flex:1
    },
    favouritebuttonStyle:{
        marginLeft:'auto',
        marginHorizontal:10
    },
    labelStyle:{
        fontSize:24,
        fontWeight:'bold',
        textAlign:'left',
        marginRight:45
    },  
    inshortStyle:{
        flexDirection:'row',
        height:60,
        justifyContent:'center',
        marginVertical:15,
        marginHorizontal:15,
    },
    innerinshortStyle:{
        alignSelf:'center',
        marginHorizontal:30,
        textAlign:'center',
        fontSize:15,
    },
    timeStyle:{
        alignSelf:'center',
        marginHorizontal:30,
        textAlign:'center',
        fontSize:15,
        color:'#2ec4b6'
    },
    unitStyle:{
        fontWeight:'bold'
    },
    healthheaderStyle:{
        fontSize:22,
        paddingLeft:15,
        fontWeight:'bold'
    },
    healthlabelStyle:{
        marginHorizontal:15,
        backgroundColor:'#dee2e6',
        borderRadius:10,
        padding:10,
        marginVertical:10
    },
    ingredientHeadingStyle:{
        flexDirection:'row',
        marginVertical:10,
        marginHorizontal:15,
    },
    ingredientStyle:{
        marginVertical:6,
        fontSize:17,
        marginHorizontal:15,
    },
    textStyle:{
        fontSize:22,
        fontWeight:'bold',
        paddingLeft:7,
    },
    knowMoreStyle:{
        bottom:0,
        height:40,
        justifyContent:'center',
        backgroundColor:'#000',
    },
    tapStyle:{
        color:'#fff',
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:15
    }
});

// export default RecipeDetails;