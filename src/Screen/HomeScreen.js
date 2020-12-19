import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native-gesture-handler';
import SearchBar from '../Component/SearchBar';
import Quick from '../Component/Quick';
import Healthy from '../Component/Healthy';
import HolidaySpecial from '../Component/HolidaySpecial';
import Breakfast from '../Component/Breakfast';
import Lunch from '../Component/Lunch';
import Snacks from '../Component/Snacks';
import Dinner from '../Component/Dinner';
import Desert from '../Component/Desert';

const HomeScreen =() =>{
    return(
        <View>
            <SearchBar />
            <ScrollView>
                <StatusBar style='auto' />
                <Quick 
                    category="Quick"
                />
                <Healthy
                    category="Healthy"
                />
                <HolidaySpecial
                    category="Holiday"
                />
                <Breakfast
                    category="Breakfast"
                />
                <Lunch
                    category="Lunch"
                />
                <Snacks
                    category="Snacks"
                />
                <Dinner
                    category="Dinner"
                />
                <Desert
                    category="Desert"
                />
            </ScrollView>
        </View>
    );
};



export default HomeScreen;