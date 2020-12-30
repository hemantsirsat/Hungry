import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const FavouriteButton =()=>{
    const [favbutton, setFavButton] = useState(false);
    const changeColor=()=>{
        setFavButton(!favbutton);
    }
    return(
        <TouchableOpacity
            onPress={()=>changeColor()}
            style={styles.favouritebuttonStyle}
        >
            <Entypo name="heart" size={24} color={favbutton?'#d90429':'#DEDEDE'} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    favouritebuttonStyle:{
        marginLeft:'auto',
        marginHorizontal:10
    },
});

export default FavouriteButton;