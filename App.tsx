import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';

import FavoriteProvider from './src/lib/context/favorites-context';
import HomeScreen from './src/screens/Home';
import CategoryStack from './src/stacks/category';
import FavoriteStack from './src/stacks/favorite';

// Category Stack
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <>
      <FavoriteProvider>
        <NavigationContainer>
          <PaperProvider>
            <Tab.Navigator
              initialRouteName="CategoriesScreen"
              activeColor="#FF5F05"
              inactiveColor="#475569"
              labeled={false}
              barStyle={{ backgroundColor: '#fff' }}
            >
              <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                  tabBarLabel: 'Home',
                  tabBarIcon({ color, focused }) {
                    return (
                      <Ionicons name={focused ? 'home' : 'home-outline'} size={24} color={color} />
                    );
                  },
                }}
              />
              <Tab.Screen
                name="CategoriesScreen"
                component={CategoryStack}
                options={{
                  tabBarLabel: 'Categories',
                  tabBarIcon({ color, focused }) {
                    return (
                      <Ionicons name={focused ? 'grid' : 'grid-outline'} size={24} color={color} />
                    );
                  },
                }}
              />
              <Tab.Screen
                name="FavoriteScreen"
                component={FavoriteStack}
                options={{
                  tabBarLabel: 'Favorite',
                  tabBarIcon({ color, focused }) {
                    return (
                      <Ionicons
                        name={focused ? 'heart' : 'heart-outline'}
                        size={24}
                        color={color}
                      />
                    );
                  },
                }}
              />
              <Tab.Screen
                name="UserScreen"
                component={CategoryStack}
                options={{
                  tabBarLabel: 'user',
                  tabBarIcon({ color, focused }) {
                    return (
                      <Ionicons
                        name={focused ? 'person' : 'person-outline'}
                        size={24}
                        color={color}
                      />
                    );
                  },
                }}
              />
            </Tab.Navigator>
          </PaperProvider>
        </NavigationContainer>
      </FavoriteProvider>
      <StatusBar style="light" />
    </>
  );
}
