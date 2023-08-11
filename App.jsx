import { Provider } from 'react-redux'
import store from './Store/Store';
import AppNavigator from'./Screens/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
    </Provider>
  );
}


