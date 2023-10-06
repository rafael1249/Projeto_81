import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Profile from ".. /screens/Profile"

const Drawer = createDrawerNavigator

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>

            <Drawer.Screen name ="Tela inicial" component = {TabNavigator} />
            <Drawer.Screen name="Perfil" component = {Profiel} />

        </Drawer.Navigator>
    );
};

export default DrawerNavigator;