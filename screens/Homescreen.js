import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import Header from '../components/home/Header';


const Homescreen = () => {
    return (
        <SafeAreaView>
            <Header />
            <Text>Homescreen</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Homescreen;