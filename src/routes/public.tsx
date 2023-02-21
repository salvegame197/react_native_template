import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home';

const Auth = createStackNavigator();

const PublicRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: true,
    }}
    initialRouteName="Home">
    <Auth.Screen name="Home" component={Home} />
  </Auth.Navigator>
);

export default PublicRoutes;
