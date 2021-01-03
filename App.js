import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import SettingsScreen from './Settings';
import HomeStackScreen from './Home.js';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'ios-football'
          } else if (route.name === 'Settings') {
            iconName = 'ios-settings'
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeStackScreen}
          //options={}
         />
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen}
          //options={}
         />
      </Tab.Navigator>
    </NavigationContainer>
  );
}