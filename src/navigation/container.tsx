import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './stacks';

/**
 * Default Stack under stacks folders
 */

const NavContainer = () => {
    return (
        <NavigationContainer>
            <Stack />
        </NavigationContainer>
    )
};

export default NavContainer;
