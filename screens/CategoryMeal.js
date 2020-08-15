import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';

const categotyMeal = (props) => {
    const category = props.navigation.getParam('category');

    return (
        <View style={styles.screen}>
            <Text>Category Mael Screen</Text>
            <Text>{category.title}</Text>
            <Button title='MealDetails' onPress={()=> {
                props.navigation.navigate({routeName: 'MealDetails' })
            }}/>
             <Button title='Back' onPress={()=> {
                props.navigation.goBack()
            }}/>
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