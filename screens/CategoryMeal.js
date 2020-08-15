import React from 'react';
import {View,Text,StyleSheet,Button,FlatList} from 'react-native';
import {MEALS} from '../data/dummy-data';

const categotyMeal = (props) => {
    const catId = props.navigation.getParam('category').id;

    const meals = MEALS.filter((meal)=> meal.categoryIds.includes(catId));

    const renderItems = (itemData) => {
        return (
            <View><Text>{itemData.item.title}</Text></View>
        )
    }
    return (
        <View style={styles.screen}>
           <FlatList 
           data={meals} 
           renderItem={renderItems} 
           keyExtractor={(meal)=> meal.id}/>
        </View>
    )
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