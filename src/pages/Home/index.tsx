import React from 'react';
import {
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
} from 'react-native';

const Home: React.FC = () => {
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>OLA MUNDO</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default Home;
