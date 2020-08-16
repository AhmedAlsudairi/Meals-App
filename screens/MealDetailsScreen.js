import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
const mealDetails = (props) => {

    const meal = props.navigation.getParam('meal');
    return (
        <View style={styles.screen}>
            <Text>{meal.title}</Text>
            <Button title='Back To Home' onPress={()=> {
                props.navigation.popToTop()
            }}/>
        </View>
    )
}

mealDetails.navigationOptions = props => {
    const mealTitle = props.navigation.getParam('meal').title;
    return {
        headerTitle: mealTitle,
        headerRight: 
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Favorite' iconName='ios-star' onPress={()=>{console.log('hi');}}/>
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen: {
        flex:1 ,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default mealDetails;