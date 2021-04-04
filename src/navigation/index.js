import * as React from 'react';
import { PostDetails, PostList, UserDetails } from "../screens";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: 'Post List',
          headerStyle: {
            backgroundColor: '#1a0049'
          },
          headerTintColor: '#fff'
        }}
        name="PostList"
        component={PostList}
      />
      <Stack.Screen
        options={{
          title: 'Post Detail',
          headerStyle: {
            backgroundColor: '#1a0049'
          },
          headerTintColor: '#fff'
        }}
        name="PostDetails"
        component={PostDetails}
      />
      <Stack.Screen
        options={{
          title: 'User Detail',
          headerStyle: {
            backgroundColor: '#1a0049'
          },
          headerTintColor: '#fff'
        }}
        name="UserDetails"
        component={UserDetails}
      />
    </Stack.Navigator>
  );
}

export default Navigation;