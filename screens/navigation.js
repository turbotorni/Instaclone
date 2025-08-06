import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Homescreen from '../screens/Homescreen'
import NewPostScreen from '../screens/NewPostScreen'
import 'react-native-gesture-handler';

const Stack = createStackNavigator()

const screenOptions = {
    headerShown: false,

}

const SignedInStack = () => {
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='HomeScreen'
            screenOptions={screenOptions}
        >
            <Stack.Screen name='HomeScreen' component={Homescreen} />
            <Stack.Screen name='NewPostScreen' component={NewPostScreen} />
        </Stack.Navigator>
    </NavigationContainer>
}

export default SignedInStack