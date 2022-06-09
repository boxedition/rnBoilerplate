import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { APP } from '../screennames';
import Default from '../../view/Default';

const Index_Stack = createStackNavigator();
const Stack = () => {
    return (
        <Index_Stack.Navigator>
            <Index_Stack.Screen name={APP} component={Default} />
        </Index_Stack.Navigator>
    )
};

export default Stack;
