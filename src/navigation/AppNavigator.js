import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import UserScreen from '../screens/UserScreen';
import HooksExampleScreen from '../screens/HooksExampleScreen';
import DemoMenu from '../screens/DemoMenu';
import CreateUserScreen from '../screens/CreateUserScreen';
import Jambon from '../screens/Jambon';
import GameVue from '../screens/GameVue';
import AddGame from '../screens/AddGame';
import LeagueVue from '../screens/LeagueVue';
import User from '../screens/UserVue';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1c1c1c', // Same dark gray color as the bottom navbar
          },
          headerTintColor: '#fff', // White color for the header text and icons
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Accueil' }} />
        <Stack.Screen name="User" component={User} options={{ title: 'Votre compte' }} />
        <Stack.Screen name="UserTom" component={UserScreen} options={{ title: 'Utilisateurs' }} />
        <Stack.Screen name="HooksExample" component={HooksExampleScreen} options={{ title: 'Exemples de Hooks' }} />
        <Stack.Screen name="DemoMenu" component={DemoMenu} options={{ title: 'DemoMenu' }} />
        <Stack.Screen name="CreateUser" component={CreateUserScreen} options={{ title: 'Créer un Utilisateur' }} />
        <Stack.Screen name="Jambon" component={Jambon} options={{ title: 'Jambon' }} />
        <Stack.Screen name="GameVue" component={GameVue} options={{ title: 'Games jouées' }} /> 
        <Stack.Screen name="AddGame" component={AddGame} options={{ title: 'Ajouter une Game' }} />  
        <Stack.Screen name="LeagueVue" component={LeagueVue} options={{ title: 'Liste des Leagues' }} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}
