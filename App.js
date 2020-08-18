import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import MealsNavigator from './navigation/MealsNavigation';
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import mealReducer from './store/reducers/MealReducers';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

const rootReducer = combineReducers({
  meals: mealReducer
});

const store = createStore(rootReducer);

export default function App() {
  const [isLoad,setIsLoad] = useState(false);

  if(!isLoad){
    return <AppLoading startAsync={fetchFonts} onFinish={()=>{setIsLoad(true)}} onError={(err)=> console.log(err)}/>
  }
  return (
    <Provider store={store}>
      <MealsNavigator/>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
