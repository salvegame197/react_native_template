import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import StackNavigator from '../components/StackNavigator';

const AppRoutes: React.FC = () => (
  <NavigationContainer independent>
    <StackNavigator />
  </NavigationContainer>
);

export default AppRoutes;
