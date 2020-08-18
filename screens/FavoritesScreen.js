import React from 'react';
import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import colors from '../constants/colors';
import {useSelector} from 'react-redux';



const favorites = (props) => {
    const favoriteMeals = useSelector((state)=>state.meals.favoriteMeals);

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

export default favorites;