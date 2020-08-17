import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import HeaderButton from '../components/HeaderButton';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import colors from '../constants/colors';
const filters = (props) => {

    return (
        <View style={styles.screen}>
            <Text>Filters Screen</Text>
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
        flex:1 ,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default filters;