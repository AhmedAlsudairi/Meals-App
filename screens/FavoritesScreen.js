import React from 'react';
import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import colors from '../constants/colors';
import {useSelector} from 'react-redux';
import { View, StyleSheet, Text } from 'react-native';
import DefaultText from '../components/DefaultText';

const favorites = (props) => {
    const favoriteMeals = useSelector((state)=>state.meals.favoriteMeals);

    if(favoriteMeals.length === 0 || !favoriteMeals){
        return (
            <View style={styles.screen}><DefaultText>No favorite meals was found. Start adding some!</DefaultText></View>
        )
    }
    return <MealList data={favoriteMeals} navigation={props.navigation}/>
}


favorites.navigationOptions = props => {
    return{
      headerTitle: 'Favorite Meals',
      headerLeft: 
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item 
          title='Menu'
          iconName='ios-menu'
          iconSize={25}
          color= {colors.primary}
          onPress={()=>{
              props.navigation.toggleDrawer()
          }
          }/>
      </HeaderButtons>
  }  
  }

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default favorites;