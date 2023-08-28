
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from './types';

import HomeScreen from './src/screens/HomeScreen';
import EditNoteScreen from './src/screens/EditNoteScreen';
import LoginScreen from './src/screens/LoginScreen';

import NewNoteButton from './src/components/NewNoteButton';


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {

  const [login, setLogin] = useState(true)
  return (
    <NavigationContainer>
      <StatusBar style="light" />

      <Stack.Navigator>
        {
          login ?
            <>
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                  headerTitle: 'Şifreler',
                  headerRight: () => <NewNoteButton />
                }}
              />
              <Stack.Screen
                name="EditNoteScreen"
                component={EditNoteScreen}
                options={{ presentation: 'modal' }}
              />
            </>
            :
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{ headerShown: false }} />
        }

      </Stack.Navigator>
    </NavigationContainer>
  );
}
