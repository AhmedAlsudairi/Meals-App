import React from 'react';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../screens/CtegoriesScreen';
import CategoryMealScreen from '../screens/CategoryMeal';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import colors from '../constants/colors';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FavoriteScreen from '../screens/FavoritesScreen';
import {Ionicons} from '@expo/vector-icons';
import {createDrawerNavigator} from 'react-navigation-drawer';
import FilterScreen from '../screens/FiltersScreen';
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

const FavoriteNavigator = createStackNavigator({
    Favorite: {
        screen: FavoriteScreen
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
    Meals: {screen: MealsNavigator, navigationOptions: {
        tabBarIcon: (iconInfo) => <Ionicons name='ios-restaurant' size={20} color={iconInfo.tintColor}/>
    } },
    favorite: {screen: FavoriteNavigator, navigationOptions: {
        tabBarIcon: (iconInfo) => <Ionicons name='ios-star' size={20} color={iconInfo.tintColor}/>
    }}
},{
    tabBarOptions: {
        activeTintColor: colors.primary
    }
})

const FilterNavigator = createStackNavigator({
    Filters: FilterScreen
},{
    defaultNavigationOptions: {
        headerTintColor: colors.primary
    }
})
const MainNavigator = createDrawerNavigator({
    Meals : MealTabNavigator,
    Filters: FilterNavigator
})
export default createAppContainer(MainNavigator);
