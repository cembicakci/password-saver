
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../types';

import EditNoteScreen from '../screens/EditNoteScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

import NewNoteButton from '../components/NewNoteButton';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigation = () => {

    const { login } = useSelector((x: any) => x.user)

    return (
        <NavigationContainer>
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
