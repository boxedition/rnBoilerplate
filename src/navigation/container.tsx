import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './stacks';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../store';
import { Provider } from 'react-redux';

/**
 * Default Stack under stacks folders
 */
interface INavConteiner {
    callback?: () => void,
}
const NavContainer = ({ callback }: INavConteiner) => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <NavigationContainer onReady={callback}>
                    <Stack />
                </NavigationContainer>
            </PersistGate>
        </Provider>
    )
};

export default NavContainer;
