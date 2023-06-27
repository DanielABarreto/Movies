import React from 'react';
import { createNativeStackNavigator } from '~/modules';

import { HomeScreen, DetailsScreen } from '~/screens';

const Public = createNativeStackNavigator<PublicStackParams>();

export const PublicStack = (): JSX.Element => (
  <Public.Navigator
    initialRouteName="HOME"
    screenOptions={{
      headerShown: false,
    }}>
    <Public.Screen name="HOME" component={HomeScreen} />
    <Public.Screen name="DETAILS" component={DetailsScreen} />
  </Public.Navigator>
);
