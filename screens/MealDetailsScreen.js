import React from 'react';
import { View, StyleSheet, Button, Image, FlatList, ScrollView } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
const mealDetails = (props) => {


    const meal = props.navigation.getParam('meal');

    return (
        <ScrollView >
            <Image style={styles.image} source={{ uri: meal.imageUrl }} />
            <View style={styles.details}>
                <DefaultText>{meal.duration}m</DefaultText>
                <DefaultText>{meal.complexity}</DefaultText>
                <DefaultText>{meal.affordability}</DefaultText>
            </View>
            <View style={styles.listContainer}>
                <DefaultText style={styles.title}>Ingredients:</DefaultText>
                {meal.ingredients.map((ingredient) => {
                    return (<View style={styles.listItem}>
                        <DefaultText key={ingredient}>{ingredient}</DefaultText>
                        </View>);
                })}
                <DefaultText style={styles.title}>Steps:</DefaultText>
                {meal.steps.map((step,index) => {
                    return <DefaultText key={step}>{index+1}. {step}</DefaultText>;
                })}
            </View>
        </ScrollView>
    )
}

mealDetails.navigationOptions = props => {
    const mealTitle = props.navigation.getParam('meal').title;
    return {
        headerTitle: mealTitle,
        headerRight:
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Favorite' iconName='ios-star' onPress={() => { console.log('hi'); }} />
            </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 150
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15
    },
    listContainer: {
        margin: 15,

    },
    title: {
        fontSize: 22,
        fontFamily: 'open-sans-bold',
        marginVertical: 10
    },
    listItem: {
        borderColor: 'gray',
        borderRadius: 3,
        borderWidth: 1,
        padding: 7,
        marginVertical: 5
    }
})
export default mealDetails;