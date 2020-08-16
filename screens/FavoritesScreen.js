import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {MEALS} from '../data/dummy-data';
import MealList from '../components/MealList';

const Favorites = (props) => {
    const meals = MEALS.filter((meal)=> meal.id === 'm1' || meal.id === 'm2')
    return <MealList data={meals} navigation={props.navigation}/>
}

Favorites.navigationOptions = {
    headerTitle: 'Favorite'
}

export default Favorites;