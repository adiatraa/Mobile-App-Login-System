import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Spinner from '../components/Spinner';
import LoginPage from '../scenes/LoginPage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Reset from '../scenes/password_reset/Reset';
import SendEmail from '../scenes/password_reset/SendEmail';
import Success from '../scenes/password_reset/Success';
import Verify from '../scenes/password_reset/Verify';
import Test from '../scenes/Test';
import {colors} from '../components/Theme';
import HomeScreen from '../scenes/HomeScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => {
  return (
    // <Stack.Navigator
    //   screenOptions={{headerShown: false}}
    //   initialRouteName="Test">
    //   <Stack.Screen name="Test" component={Test} />
    //   <Stack.Screen name="Login" component={LoginPage} />
    //   <Stack.Screen name="SendEmailReset" component={SendEmail} />
    //   <Stack.Screen name="VerifyOTP" component={Verify} />
    //   <Stack.Screen name="ResetPassword" component={Reset} />
    //   <Stack.Screen name="SuccessReset" component={Success} />
    // </Stack.Navigator>
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-variant';
          } else if (route.name === 'Test') {
            iconName = 'dev-to';
          } else if (route.name === 'Login') {
            iconName = 'login';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={32} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.dark20,
        tabBarStyle: {
          borderWidth: 2,
          borderColor: '#CCCCCC',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          height: 80,
          paddingHorizontal: 30,
        },
        tabBarShowLabel: false,
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Test" component={Test} />
      <Tab.Screen name="Login" component={LoginPage} />
    </Tab.Navigator>
  );
};

export default AuthStack;
