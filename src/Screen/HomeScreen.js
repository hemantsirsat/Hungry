import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Indian from '../Component/Indian';
import Italian from '../Component/Italian';
import Vegan from '../Component/Vegan';
import { ScrollView } from 'react-native-gesture-handler';

const HomeScreen =() =>{
    return(
        <View>
            <ScrollView>
                <StatusBar style='auto' />
                <Indian 
                    category="Indian"
                />
                <Italian 
                    category="Italian"
                />
                <Vegan
                    category="Vegan"
                />
            </ScrollView>
        </View>
    );
};



export default HomeScreen;