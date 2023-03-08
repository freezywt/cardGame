import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Game from '../screens/Game';

const Stack: any = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Game"
        component={Game}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
