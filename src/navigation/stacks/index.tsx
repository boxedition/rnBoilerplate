import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { APP } from '../screennames';
import Default from '../../view/Default';

const MyStack = createStackNavigator();
const Stack = () => {
    return (
        <MyStack.Navigator screenOptions={{ headerShown: false }}>
            <MyStack.Screen name={APP} component={Default} />
        </MyStack.Navigator>
    )
};

export default Stack;
