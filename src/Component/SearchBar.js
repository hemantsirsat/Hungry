import React, { useState } from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ navigation }) => {
    const [myRecipe, setmyRecipe] = useState('');
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.cravingStyle}>What Are You Craving?</Text>
            <View style={styles.barStyle}>
                <Feather name='search' style={styles.iconStyle} size={18}/>
                <TextInput
                    style={styles.searchBarStyle}
                    placeholder='Search'
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={myRecipe}
                    onChangeText={term => setmyRecipe(term)}
                    onEndEditing={()=>{
                        navigation.navigate('Recipe',{term});
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle:{
        marginTop:25,
    },
    cravingStyle:{
        fontSize:24,
        marginTop:20,
        marginHorizontal:15
    },
    barStyle:{
        flexDirection:'row',
        backgroundColor:'#dee2e6',
        marginHorizontal:15,
        borderRadius:10,
        marginVertical:15,
    },
    iconStyle:{
        padding:10,
    },
    searchBarStyle:{
        marginRight:10,
        flex:1,
        fontSize:15
    }
});

export default SearchBar;