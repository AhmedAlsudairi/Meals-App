import React from 'react';
import {View,Text,StyleSheet, Button,FlatList,TouchableOpacity} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import colors from '../constants/colors';
import { createAppContainer } from 'react-navigation';

const ctegories = (props) => {

    const renderItems = (category) => {
        return (
             <TouchableOpacity style={styles.item} onPress={()=>{
                 props.navigation.navigate('CategoryMeal',{category: category.item})
             }}>
            <View style={{...styles.itemContainer,backgroundColor: category.item.color}}>
            <Text style={styles.title}>{category.item.title}</Text>
            </View>
        </TouchableOpacity>
        )
    }
    

    return (
            <FlatList 
            keyExtractor={(item)=> item.id}
            data={CATEGORIES} 
            numColumns={2} 
            renderItem={renderItems}
            />
    )

    
}

ctegories.navigationOptions = {
    headerTitle: 'Meal Categories'
}

const styles = StyleSheet.create({
    item: {
        flex:1,
        height: 150,
        margin: 15
    },
    itemContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        shadowColor: 'black',
        borderRadius: 10,
        shadowOpacity: 0.26,
        shadowRadius: 10,
        elevation: 10,
        shadowOffset: {width: 0, height: 2},
        alignItems: 'flex-end',
        padding: 10
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 15,
        textAlign: 'right'
    }
})
export default ctegories;