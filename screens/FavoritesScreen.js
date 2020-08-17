import React from 'react';
import {MEALS} from '../data/dummy-data';
import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import colors from '../constants/colors';
const favorites = (props) => {
    const meals = MEALS.filter((meal)=> meal.id === 'm1' || meal.id === 'm2')
    return <MealList data={meals} navigation={props.navigation}/>
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

export default favorites;