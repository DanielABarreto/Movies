import React, { FC, useEffect } from 'react';
import {
  createNativeStackNavigator,
  NavigationContainer,
  useNavigationContainerRef,
} from '~/modules';
import { NavigationActions } from '~/services';
import { PublicStack } from './stacks';

const MainStack = createNativeStackNavigator<MainStackParams>();

export const Navigation: FC = () => {
  const navigationRef = useNavigationContainerRef();

  useEffect(() => {
    NavigationActions.setNavigatorRef(navigationRef);
  }, [navigationRef]);

  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack.Navigator
        initialRouteName="PUBLIC"
        screenOptions={{
          headerShown: false,
        }}>
        <MainStack.Screen
          name="PUBLIC"
          component={PublicStack}
          options={{
            animationTypeForReplace: 'pop',
            animation: 'slide_from_right',
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
