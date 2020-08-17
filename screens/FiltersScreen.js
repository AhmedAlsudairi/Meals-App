import React, {useState} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import HeaderButton from '../components/HeaderButton';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import colors from '../constants/colors';
import FilterSwitch from '../components/FilterSwitch';
const filters = (props) => {
    const [isGlutenFree,setIsGlutenFree] = useState(false);
    const [isLactoseFree,setIsLactoseFree] = useState(false);
    const [isVegan,setIsVegan] = useState(false);
    const [isVagetarian,setIsVagetarian] = useState(false);
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Filters</Text>
            <View style={styles.filtersContainer}>
                <FilterSwitch 
                title='Gluten-free'
                value={isGlutenFree}
                onChange={(newValue)=>{setIsGlutenFree(newValue)}}
                />
                <FilterSwitch 
                title='Lactose-free'
                value={isLactoseFree}
                onChange={(newValue)=>{setIsLactoseFree(newValue)}}
                />
                <FilterSwitch 
                title='Vegan'
                value={isVegan}
                onChange={(newValue)=>{setIsVegan(newValue)}}
                />
                <FilterSwitch 
                title='Vagetarian'
                value={isVagetarian}
                onChange={(newValue)=>{setIsVagetarian(newValue)}}
                />
            </View>
        </View>
    )
}

filters.navigationOptions = props => {
    return{
      headerTitle: 'Filter Meal',
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
        flex:1 
    },
    title: {
        marginVertical: 10,
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
    },
    filtersContainer: {
        margin: 15,
        padding: 10
    }
})
export default filters;