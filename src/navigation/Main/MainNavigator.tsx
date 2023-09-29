import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MAIN_ROUTES } from '@/routes/main';
import { MAIN_ROUTE } from '@/routes/routes';

// TODO: Add types

const MainStack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <MainStack.Navigator
      initialRouteName={MAIN_ROUTE.FIRST_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      {MAIN_ROUTES.map((item) => (
        <MainStack.Screen key={item.name} {...item} />
      ))}
    </MainStack.Navigator>
  );
};

export default MainNavigator;
