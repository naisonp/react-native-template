import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import MainNavigator from '@/navigation/Main';

// TODO: Add types

const RootStack = createStackNavigator();

const RootNavigator = () => {
  const isMainLoading = false;

  if (isMainLoading) {
    // return some loading screen
    return <></>;
  }

  const getNavigator = () => {
    // here can be some checks for roles in order to return correct navigator

    return {
      name: 'main',
      component: MainNavigator,
    };
  };

  const currentNavigator = getNavigator();

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
      }}
    >
      <RootStack.Screen name={currentNavigator.name} component={currentNavigator.component} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
