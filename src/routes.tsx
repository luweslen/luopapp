import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import CameraScreen from "./screens/Camera";
import GalleryScreen from "./screens/Gallery";
import PermissionScreen from "./screens/Permission";
import SettingsScreen from "./screens/Settings";

export type StackParamList = {
  permission: undefined;
  camera: undefined;
  gallery: undefined;
  settings: undefined;
};

const Stack = createStackNavigator<StackParamList>();

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="permission"
        component={PermissionScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="camera"
        component={CameraScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="gallery"
        component={GalleryScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="settings"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default Routes;
