import React from 'react';


import WritePost from './src/actions/WritePostAction/WritePostAction';
import InputPrice from './src/screens/WritePost/InputPrice';
import SelectCategory from './src/screens/WritePost/SelectCategory';
import WriteTitle from './src/screens/WritePost/WriteTitle';
import WriteContent from './src/screens/WritePost/WriteContent';
import SelectStartDate from './src/screens/WritePost/SelectStartDate';
import SelectStartTime from './src/screens/WritePost/SelectStartTime';

import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import Feed from './src/screens/FeedScreen';
import FeedAction from './src/actions/FeedAction';
import Mypage from './src/screens/MypageScreen';
import ShowDetailPost from './src/screens/ShowDetailPost';
// import ShowDetailPost from './src/screens/ShowDetailPost';
// import Login from './src/screens/LoginScreen';
import LoginAction from './src/actions/LoginAction';
// import Register from './src/screens/RegisterScreen';
import RegisterAction from './src/actions/RegisterAction';
// import FindPw from './src/screens/FindPassword';
import FindPwAction from './src/actions/FindPwAction';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={FeedAction} />
      <Tab.Screen name="Mypage" component={Mypage} />
    </Tab.Navigator>
  )
}

export default App = () => {
  return (
    <NavigationContainer> 
      <Stack.Navigator screenOptions={{headerBackTitle: null}}>
        <Stack.Screen name="Tab" component={TabNavigator} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={LoginAction} />
        <Stack.Screen name="Register" component={RegisterAction} />
        <Stack.Screen name="FindPw" component={FindPwAction} />



        <Stack.Screen name="WritePost" component={WritePost} />

        <Stack.Screen name="SelectCategory" component={SelectCategory} />
        <Stack.Screen name="InputPrice" component={InputPrice} />
        <Stack.Screen name="WriteTitle" component={WriteTitle} />
        <Stack.Screen name="WriteContent" component={WriteContent} />
        
        <Stack.Screen name="SelectStartDate" component={SelectStartDate} />
        <Stack.Screen name="SelectStartTime" component={SelectStartTime} />

        <Stack.Screen name="ShowDetailPost" component={ShowDetailPost} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}