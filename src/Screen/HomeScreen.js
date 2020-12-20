import React from 'react';
import { View, StyleSheet } from 'react-native';
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

const HomeScreen =({ navigation }) =>{
    return(
        <>
            <SearchBar 
                navigation={navigation}
            />
            <ScrollView>
                <StatusBar style='auto' translucent={true}/>
                <Quick 
                    category="Quick"
                    destination={navigation}
                />
                <Healthy
                    category="Healthy"
                    destination={navigation}

                />
                <HolidaySpecial
                    category="Holiday"
                    destination={navigation}

                />
                <Breakfast
                    category="Breakfast"
                    destination={navigation}

                />
                <Lunch
                    category="Lunch"
                    destination={navigation}

                />
                <Snacks
                    category="Snacks"
                    destination={navigation}

                />
                <Dinner
                    category="Dinner"
                    destination={navigation}

                />
                <Desert
                    category="Desert"
                    destination={navigation}

                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    scrollStyle:{}
});

export default HomeScreen;