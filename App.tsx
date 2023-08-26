import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import EditNoteScreen from './screens/EditNoteScreen';

import { RootStackParamList } from './types';

import NewNoteButton from './components/NewNoteButton';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />

      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerTitle: 'All Notes',
            headerRight: () => <NewNoteButton />
          }}
        />
        <Stack.Screen
          name="EditNoteScreen"
          component={EditNoteScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
