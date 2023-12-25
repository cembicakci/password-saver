import { StatusBar } from 'expo-status-bar';

import StackNavigation from './src/navigation/StackNavigation';

import { Provider } from 'react-redux';
import { store } from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="dark" />
      <StackNavigation />
    </Provider>
  );
}
