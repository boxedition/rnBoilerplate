import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import App from '../../view/App';
import { APP } from '../screennames';

const Index_Stack = createStackNavigator();
const Stack = () => {
    return (
        <Index_Stack.Navigator>
            <Index_Stack.Screen name={APP} component={App} />
        </Index_Stack.Navigator>
    )
};

export default Stack;
