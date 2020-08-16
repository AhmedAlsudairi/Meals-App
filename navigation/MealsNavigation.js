import React from 'react';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../screens/CtegoriesScreen';
import CategoryMealScreen from '../screens/CategoryMeal';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import colors from '../constants/colors';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FavoriteScreen from '../screens/FavoritesScreen';
import {Ionicons} from '@expo/vector-icons'
const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen
    },
    CategoryMeal: {
        screen: CategoryMealScreen
    },
    MealDetails: {
        screen: MealDetailsScreen
    }
},
{
    defaultNavigationOptions: {
        headerTintColor: colors.primary
    }
})

const MealTabNavigator = createBottomTabNavigator({
    all: {screen: MealsNavigator, navigationOptions: {
        tabBarIcon: (iconInfo) => <Ionicons name='ios-restaurant' size={20} color={iconInfo.tintColor}/>
    } },
    favorite: {screen: FavoriteScreen, navigationOptions: {
        tabBarIcon: (iconInfo) => <Ionicons name='ios-star' size={20} color={iconInfo.tintColor}/>
    }}
},{
    tabBarOptions: {
        activeTintColor: colors.primary
    }
})
export default createAppContainer(MealTabNavigator);
