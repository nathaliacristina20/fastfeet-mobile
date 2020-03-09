import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

import DeliveryProblems from './pages/Delivery/Problems';
import DeliveryForm from './pages/Delivery/Problems/Form';
import DeliveryDetail from '~/pages/Delivery/Detail';

export default (signedIn = false) =>
    createAppContainer(
        createSwitchNavigator(
            {
                Sign: createSwitchNavigator({
                    SignIn,
                }),
                App: createBottomTabNavigator(
                    {
                        Deliveries: {
                            screen: createStackNavigator(
                                {
                                    Dashboard,
                                    DeliveryDetail,
                                    DeliveryProblems,
                                    DeliveryForm,
                                },
                                {
                                    defaultNavigationOptions: {
                                        headerTransparent: true,
                                        headerLeftContainerStyle: {
                                            marginLeft: 20,
                                        },
                                        headerTitleStyle: {
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                            color: '#fff',
                                            marginLeft: 30,
                                        },
                                    },
                                }
                            ),
                            navigationOptions: {
                                tabBarVisible: true,
                                tabBarLabel: 'Entregas',
                                tabBarIcon: ({ tintColor }) => (
                                    <Icon
                                        name="reorder"
                                        size={20}
                                        color={tintColor}
                                    />
                                ),
                            },
                        },
                        Profile,
                    },
                    {
                        resetOnBlur: true,
                        tabBarOptions: {
                            keyboardHidesTabBar: true,
                            activeTintColor: '#7D40E7',
                            inactiveTintColor: '#999999',
                            style: {
                                backgroundColor: '#fff',
                            },
                        },
                    }
                ),
            },
            {
                initialRouteName: signedIn ? 'App' : 'Sign',
            }
        )
    );
