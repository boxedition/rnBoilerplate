import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './stacks';

/**
 * Default Stack under stacks folders
 */
interface INavConteiner {
    callback?: () => void,
}
const NavContainer = ({ callback }: INavConteiner) => {
    return (
        <NavigationContainer onReady={callback}>
            <Stack />
        </NavigationContainer>
    )
};

export default NavContainer;
