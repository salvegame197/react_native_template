import React from 'react';
import AppPublicRoutes from './public';

const Routes: React.FC = () => {
  //const {user, loading} = useAuth();

  /*if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }*/
  return <AppPublicRoutes />;
  //return user ? <AppPublicRoutes /> : <AuthRoutes />;
};

export default Routes;
