import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const MyRecipe = () => {
    return(
        <View>
            <View style={styles.headerStyle}>
                <Text>Add Your Recipe</Text>
            </View>
            <Text>My Recipe Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default MyRecipe;