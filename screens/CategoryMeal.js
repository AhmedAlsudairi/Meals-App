import React from 'react';
import {View,Text,StyleSheet,Button,FlatList} from 'react-native';
import {MEALS} from '../data/dummy-data';
import MealList from '../components/MealList';
const categotyMeal = (props) => {
    const catId = props.navigation.getParam('category').id;

    const meals = MEALS.filter((meal)=> meal.categoryIds.includes(catId));

    
    return <MealList data={meals} navigation={props.navigation}/>
}

categotyMeal.navigationOptions = props => {
    const category = props.navigation.getParam('category');

    return {
        headerTitle: category.title
    }
}

const styles = StyleSheet.create({
    screen: {
        flex:1 ,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default categotyMeal;