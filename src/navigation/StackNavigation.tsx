
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../types';

import EditNoteScreen from '../screens/EditNoteScreen';
import LoginScreen from '../screens/LoginScreen';
import NewNoteButton from '../components/NewNoteButton';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigation = () => {

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
    )
}

export default StackNavigation
