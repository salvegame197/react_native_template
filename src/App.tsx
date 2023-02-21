import 'react-native-gesture-handler';

import React from 'react';
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ToastProvider} from 'react-native-toast-notifications';

import {ThemeProvider} from 'styled-components';
import {ThemeOs, ThemeStatusBarOs} from './global/styles/theme/';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={ThemeOs}>
      <NavigationContainer>
        <StatusBar {...ThemeStatusBarOs} />
        <View style={{flex: 1, backgroundColor: '#18122B'}}>
          <ToastProvider>
            <Routes />
          </ToastProvider>
        </View>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
