import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';

const CategotyMeal = (props) => {

    return (
        <View style={styles.screen}>
            <Text>Category Mael Screen</Text>
            <Button title='MealDetails' onPress={()=> {
                props.navigation.navigate({routeName: 'MealDetails' })
            }}/>
             <Button title='Back' onPress={()=> {
                props.navigation.goBack()
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex:1 ,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default CategotyMeal;