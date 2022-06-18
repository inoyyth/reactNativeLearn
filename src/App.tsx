/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {FunctionComponent} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './pages/Home';
import Login from './pages/Login';
import {Provider} from 'react-redux';
import {store} from './redux/store';

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();

const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            animationEnabled: true,
            animationTypeForReplace: 'push',
          }}
          initialRouteName="Login">
          <Stack.Screen
            options={{
              headerShown: false,
              headerTitle: 'Login',
            }}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{
              headerShown: false,
              headerTitle: 'Home',
            }}
            name="Home"
            component={Home}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
