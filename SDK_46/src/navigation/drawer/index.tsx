import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { APP } from "../screennames";
import Default from "../../view/Default";
import Fonts from "../../theme/Fonts";

const MyDrawer = createDrawerNavigator();

const Drawer = () => {
    return (
        <MyDrawer.Navigator
            initialRouteName={APP}

            screenOptions={{
                headerTitle: "BOILERPLATE",
                headerStyle: {
                    //backgroundColor: '#f4511e',

                },
                //headerTintColor: "#fff",
                headerTitleStyle: {
                    //fontFamily: Fonts.family.regular,
                },
            }}>
            <MyDrawer.Screen name={APP} component={Default} />
        </MyDrawer.Navigator>
    )
}

export default Drawer