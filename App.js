import React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Mypage from './src/screens/MypageScreen';
// import Login from './src/screens/LoginScreen';
import LoginAction from './src/actions/LoginAction';
// import Register from './src/screens/RegisterScreen';
import RegisterAction from './src/actions/RegisterAction';
// import FindPw from './src/screens/FindPassword';
import FindPwAction from './src/actions/FindPwAction';

import ResetInfoAction from './src/actions/ResetMyInfoAction';



import WritePost from './src/actions/WritePostAction/WritePostAction';
import InputPrice from './src/screens/WritePost/InputPrice';
import SelectCategory from './src/screens/WritePost/SelectCategory';
import WriteTitle from './src/screens/WritePost/WriteTitle';
import WriteContent from './src/screens/WritePost/WriteContent';
import SelectStartDate from './src/screens/WritePost/SelectStartDate';
import SelectStartTime from './src/screens/WritePost/SelectStartTime';

const Stack = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer> 
      <Stack.Navigator
        screenOptions={({navigation}) => ({
          headerRight: () => (
            <Button title="Home" onPress={() => navigation.navigate('Home')} />
          )
      })}>
        <Stack.Screen name="Home" component={Mypage} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={LoginAction} />
        <Stack.Screen name="Register" component={RegisterAction} />
        <Stack.Screen name="FindPw" component={FindPwAction} />
        <Stack.Screen name="ResetInfo" component={ResetInfoAction} />


        <Stack.Screen name="WritePost" component={WritePost} />

        <Stack.Screen name="SelectCategory" component={SelectCategory} />
        <Stack.Screen name="InputPrice" component={InputPrice} />
        <Stack.Screen name="WriteTitle" component={WriteTitle} />
        <Stack.Screen name="WriteContent" component={WriteContent} />
        
        <Stack.Screen name="SelectStartDate" component={SelectStartDate} />
        <Stack.Screen name="SelectStartTime" component={SelectStartTime} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}